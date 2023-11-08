import express from 'express';
import Branch from '../models/branch.js'; 


// Endpoint to create a new role
const branch = async (req, res) => {
    const { name, address, country, city, pincode, coordinates } = req.body;


  try { 

    if (!name || !address || !country || !city || !pincode ) {
        return res.status(422).json({ status: 422, error: "Please fill all the fields" });
      }
    const newBranch = new Branch({
        name, 
        address, 
        country, 
        city, 
        pincode, 
        coordinates  
    });

    await newBranch.save();

    res.status(201).json({ message: 'New branch is created' });
  } catch (error) {
    res.status(500).json({ message: 'Error creating new Branch', error: error.message });
  }
};

export  {branch};
