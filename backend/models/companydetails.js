import mongoose from "mongoose";

const companydetailsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
   pincode: {
    type: String,
    required: true
  },
  documentimage: {
    type: String,
  },
  companyimage: {
    type: String,
  }
});

const Companydetails= mongoose.model('Companydetails', companydetailsSchema);
export default Companydetails;

