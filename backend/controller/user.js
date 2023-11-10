import Users from "../models/users.js";

const registerEmployee = async (req, res) => {
  // Destructure the body data
  const { name, employeeId, email, phone, role, officeBranch, profileImagePath } = req.body;

  // Check for missing fields
  if (!name || !employeeId || !email || !phone || !role || !officeBranch) {
    return res.status(422).json({ status: 422, error: "Please fill all the fields" });
  }

  try {
    // Check if an employee already exists with the given email or employee ID
    const employeeExists = await Users.findOne({
      $or: [{ email: email }, { employeeId: employeeId }]
    });

    if (employeeExists) {
      return res.status(422).json({ error: "Employee already exists with the given email or ID" });
    }

    // Create a new employee instance (document)
    const newEmployee = new Users({
      name,
      employeeId,
      email,
      phone,
      role,
      officeBranch,
      profileImagePath
    });

    // Save the new employee to the database
    await newEmployee.save(); // Use the save method on the instance

    // Success response
    res.status(201).json({
      success: true,
      Users: {
        name: newEmployee.name,
        employeeId: newEmployee.employeeId,
        email: newEmployee.email,
        phone: newEmployee.phone,
        role: newEmployee.role,
        officeBranch: newEmployee.officeBranch,
      }
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Server error in registering employee" });
  }
};

export { registerEmployee };
