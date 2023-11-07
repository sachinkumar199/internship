import express from "express";
import {registerEmployee} from "../controller/user.js"


const router = express.Router();


router.route("/registerEmployee").get(registerEmployee)







export default router;