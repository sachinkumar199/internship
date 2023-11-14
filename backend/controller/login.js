import superAdmin from "../models/superAdmin.js"
import bcrypt from "bcryptjs";
;


const login =  async (req, res) => {
         
    

    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ message: "Please fill the fields" })
        }

        const userLogin = await superAdmin.findOne({ email: email });
        if (!userLogin) {
            return res.status(400).json({ message: "User not found" });

        
        }
        const passwordMatch = await bcrypt.compare(password, userLogin.password);
        if (!passwordMatch) {
            return res.status(400).json({ message: "Invalid Password" });
        }

        if(userLogin.verified == false){
            return res.status(400).json({ message: "User is not verified" })
        }

        // const token = await userLogin.generateAuthToken();
        return res.json({ message: "User Login successfully" });
        console.log("login sucessfully")


    } catch (err) {
        console.log(err);
    }
};

export {login}


