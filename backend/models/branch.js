import mongoose from "mongoose";

const BranchSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  address: {
    type: String,
    required: true,
    trim: true,
  },
   country: {
    type: String,
    required: true,
    trim: true,
  },
  city: {
    type: String,
    required: true,
    trim: true,
  },
  pincode: {
    type: Number,
    required: true,
    trim: true,
  },
  coordinates: {
    type: String,
    required: true,
    trim: true,
  },
  
});

const Branch = mongoose.model('Branch', BranchSchema);

export default  Branch;
