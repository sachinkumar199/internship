import express from "express";
import {registerEmployee} from "../controller/user.js"
import {roles} from "../controller/role.js"
import {branch} from "../controller/branch.js"
import {message} from "../controller/whatsapp.js"
import { purchaseOrders } from "../controller/purchaseOrder.js";
import { Packinglist } from "../controller/packing.js";
import { companydetails } from "../controller/companydeails.js";
import { getEmployees } from "../controller/getemploye.js";
import { deleteEmploye } from "../controller/deleteEmploye.js";
import { getbranch } from "../controller/getbranch.js";
import { getRole } from "../controller/getrole.js";
import { updateEmploye } from "../controller/updateemploye.js";
import { payment } from "../controller/payment.js";
import { register,verifyEmail } from "../controller/registration.js";
import { login } from "../controller/login.js";

const router = express.Router();


router.route("/registerEmployee").post(registerEmployee)
router.route("/roles").post(roles)
router.route("/branch").post(branch)
router.route("/message").post(message)
router.route("/purchaseOrder").post(purchaseOrders)
router.route("/packinglist").post(Packinglist)
router.route("/companydetails").post(companydetails)
router.route("/getEmployees").get(getEmployees);
router.route("/deleteEmploye").delete(deleteEmploye)
router.route("/getbranch").get(getbranch)
router.route("/getrole").get(getRole)
router.route("/updateEmploye/:id").put(updateEmploye)
router.route("/payment").post(payment)
router.route("/register").post(register)
router.route("/register").post(register)
router.route("/verify-email").post(verifyEmail)
router.route("/login").post(login)







export default router;