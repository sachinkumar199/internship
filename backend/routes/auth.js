import express from "express";
import {registerEmployee} from "../controller/user.js"
import {roles} from "../controller/role.js"
import {branch} from "../controller/branch.js"
import {message} from "../controller/whatsapp.js"


const router = express.Router();


router.route("/registerEmployee").post(registerEmployee)
router.route("/roles").post(roles)
router.route("/branch").post(branch)
router.route("/message").post(message)







export default router;