import mongoose from "mongoose";
import bcrypt from "bcryptjs";
// import jwt from "jsonwebtoken";

const verificationTokenSchema = new mongoose.Schema({
   owner:{
    type: mongoose.Schema.Types.ObjectId,
    ref:'User',
    required: true
   },

   token:{
    type: String,
    required: true
   },

   createdAt:{
    type: Date,
    expires:3600,
    default: Date.now()
   }


});

verificationTokenSchema.pre('save', async function (next) {
    if (this.isModified('token')) {
        try {
            const salt = await bcrypt.genSalt(12);
            this.token = await bcrypt.hash(this.token, salt);
        } catch (error) {
            console.error(error);
        }
    }
    next();
});

verificationTokenSchema.methods.compareToken = async function(token){
    const result = await bcrypt.compareSync(token, this.token)
    return result;
}

const VerificationToken = mongoose.model("VerificationToken", verificationTokenSchema);
export default VerificationToken ;
