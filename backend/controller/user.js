import Users from "../models/users.js";

// Make sure to replace this with your actual path to the model

const registerEmployee = async (req, res) => {
  // Destructure the body data
  const { name, employeeId, email, phone, role, officeBranch, profileImagePath } = req.body;
  
  // Check for missing fields
  if (!name || !employeeId || !email || !phone || !role || !officeBranch) {
    return res.status(422).json({ status: 422, error: "Please fill all the fields" });
  }
  
  try {
    // Check if employee already exists with the given email or employee ID
    const employeeExists = await Users.findOne({ 
      $or: [{ email: email }, { employeeId: employeeId }] 
    });

    if (employeeExists) {
      return res.status(422).json({ error: "Employee already exists with given email or ID" });
    }

    // Create a new employee instance
    const employee = new Users({ 
      name, 
      employeeId, 
      email, 
      phone, 
      role, 
      officeBranch, 
    });

    // Save the new employee to the database
    await Users.save();

    // Success response
    res.status(201).json({
      success: true, 
      Users: {
        name: Users.name, 
        enployeeId: Users.employeeId, 
        email: Users.email, 
        phone: Users.phone, 
        role: Users.role, 
        officeBranch: Users.officeBranch, 
      }
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Server error in registering employee" });
  }
};

export {registerEmployee};
