import express from 'express';
import PurchaseOrder from '../models/purchaseOrder.js'; // Make sure to include the file extension if you're using ES modules

const purchaseOrders = async (req, res) => {
  const {
    buyer,
    vendor,
    shipTo,
    assignedPeople,
    products,
    comments
  } = req.body;

  try {
    if (!buyer || !vendor || !shipTo || !assignedPeople || !products) {
      return res.status(422).json({ status: 422, error: "Please provide all the necessary fields" });
    }

    const newPurchaseOrder = new PurchaseOrder({
      buyer,
      vendor,
      shipTo,
      assignedPeople,
      products,
      comments
    });

    await newPurchaseOrder.save();

    res.status(201).json({ message: 'New purchase order created' });
  } catch (error) {
    res.status(500).json({ message: 'Error creating new purchase order', error: error.message });
  }
};

export { purchaseOrders };
