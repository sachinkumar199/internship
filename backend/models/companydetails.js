import mongoose from "mongoose";

const companydetailsSchema = new mongoose.Schema({
  companyid:{
   type:String,
   required: true
  },
  
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
    type: String,       // add required after getting storage
  },
  companyimage: {
    type: String,      // add required after getting storage 
  }
});

const Companydetails= mongoose.model('Companydetails', companydetailsSchema);
export default Companydetails;

