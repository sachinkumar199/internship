import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  employeeId: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  phone: {
    type: Number,
    required: true
  },
  role: {
    type: String,
    required: true,
  },
  officeBranch: {
    type: String,
    required: true
  },
  profileImage: {
    type: String 
  }
});

const Employee = mongoose.model('Employee', employeeSchema);
export default Employee;

