import express from 'express';
import Companydetails from '../models/companydetails.js';

// POST request to create a new company details record
const companydetails = async (req, res) => {
  const { formData, companyid } = req.body;

  try {
    // Validate required fields
    if (!companyid || !formData.name || !formData.address || !formData.country || !formData.city || !formData.pincode) {
      return res.status(422).json({ status: 422, error: 'Please provide all the necessary fields' });
    }

    const newCompanyDetails = new Companydetails({
      companyid,
      ...formData,
    });

    const savedCompanyDetails = await newCompanyDetails.save();

    res.status(201).json({ message: 'New company details record created', data: savedCompanyDetails });
  } catch (error) {
    console.error('Error creating new company details record:', error.message);
    res.status(500).json({ message: 'Error creating new company details record', error: error.message });
  }
};

export { companydetails };
