import superAdmin from "../models/superAdmin.js";
import { sendError,createRandomBytes } from "../utils/helper.js";
import {generateOtp,generateEmailTemplet,mailTransport,plainEmailTemplate} from "../utils/mails.js";
import VerificationToken from "../models/verificationToken.js";




const register = async (req, res) => {

  console.log("object",req.body)
    const {role, name, email, password, phoneNumber,cpassword } = req.body;
    // if (!role ||!name || !email || !password || !cpassword) {
    //   return res.status(422).json({ status:422, error: "please fill the fileds" });
    // }
  
    if(password != cpassword){
      return res.status(422).json({ error: "password not match" });
  
    }
  
    try {
      const superAdminExist = await superAdmin.findOne({ email: email });
  
      if (superAdminExist && superAdminExist.verified == false) {
        const deleteduser = await superAdmin.deleteMany({ email: superAdminExist.email});
      }
  
      if(superAdminExist&& superAdminExist.verified == true){
        return res.status(422).json({ error: "Email already Exist" });
      }
      const user = new superAdmin({ role, name, email, password, cpassword,phoneNumber });
  
      const OTP = generateOtp();

      const verificationToken = new VerificationToken({
        owner: user._id,
        token: OTP
      })

      await verificationToken.save()
      await user.save();

      mailTransport().sendMail({
        from: process.env.EMAIL,
        to: user.email,
        subject: "verify your email account",
        html: generateEmailTemplet(OTP),
      }, (error, info) => {
        if (error) {
          console.error('Error sending email:', error);
          // You might want to return an error response to the client here
        } else {
          console.log('Email sent:', info.response);
          // Continue with the response to the client
        }
      });
  
      // res.status(201).json({ message: "user registered successfully" });
      res.json({success: true, user:{role: user.role, lastname: user.name, email: user.email, id: user._id, verified: user.verified}})
    } catch (err) {
      console.log(err);
    }
  };


  const verifyEmail = async (req, res)=>{
    const {userId, otp} = req.body
    if(!userId ||(typeof otp !== 'string') || !otp.trim()) return sendError(res, 'Invalid request, missing parameters!')
  
    const user = await superAdmin.findById(userId)
    if(!user) return sendError(res, 'This account is already verified!');
  
    if(user.verified) return sendError(res, 'This account is already verified');
  
    const token = await VerificationToken.findOne({owner: user._id})
    if(!token) return sendError(res, 'Sorry, user not found!');
  
   const isMathced = await token.compareToken(otp);
   if(!isMathced) return sendError(res, 'Please provide a valid token');
  
   user.verified = true;
  
  
   await VerificationToken.findByIdAndDelete(token._id);
   await user.save()  
  
  //  await User.deleteMany({ verified: false });
  
   mailTransport().sendMail({
    from: process.env.EMAIL,
    to: user.email,
    subject: "verify your email account",
    html:plainEmailTemplate(
      "Email Verified Successfully",
      "Thanks for connectiong with us"
    ),
  }); 
  
  
  res.json({success:true, message:"Your email is verifyed", user:{firstname: user.firstname}})
  
  };

  export {register,verifyEmail};