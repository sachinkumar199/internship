import mongoose from "mongoose";

const PermissionSchema = new mongoose.Schema({
  upload: {
    type: Boolean,
    default: false,
  },
  approve: {
    type: Boolean,
    default: false,
  }
});

const RoleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  permissions: PermissionSchema,
});

const Role = mongoose.model('Role', RoleSchema);

export default  Role;
