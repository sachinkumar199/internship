import jwt from 'jsonwebtoken'
import User from '../model/user.js'
const Authenticate = async (req, res, next) => {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    if(!token) {
        console.log("no token");
        return res.status(401).json({ error: "Access denied...No token provided..." });
    }
    try {
        const verifyToken = jwt.verify(token, process.env.SECRET_KEY);
        const rootUser = await User.findOne({ _id: verifyToken._id, "tokens.token": token });

        if (!rootUser) { 
            return res.status(401).json({error: "user not found"});
        }
        req.token = token;
        req.rootUser = rootUser;
        req.userID = rootUser._id;
        next();


    } catch (err) {
        res.status(401).json({ error: 'unauthorised:No token provided' });
    }
}

export default Authenticate;
