import express from 'express';
import Role from '../models/role.js'; // Make sure to include the file extension if you're using ES modules



// Endpoint to create a new role
const roles = async (req, res) => {
    const { name, description, permissions } = req.body;


  try { 

    if (!name || !description ) {
        return res.status(422).json({ status: 422, error: "Please fill all the fields" });
      }
    const newRole = new Role({
      name,
      description,
      permissions // This should include 'upload' key with a true or false value
    });

    await newRole.save();

    res.status(201).json({ message: 'New role created' });
  } catch (error) {
    res.status(500).json({ message: 'Error creating new role', error: error.message });
  }
};

export  {roles};
