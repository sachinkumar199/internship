const mongoose = require('mongoose');

const purchaseOrderSchema = new mongoose.Schema({
  buyer: {
    name: String,
    completeAddress: String
  },
  vendor: {
    name: String,
    completeAddress: String
  },
  shipTo: {
    name: String,
    completeAddress: String,
    shipVia: String, // e.g. Sea, Air, Land
    shippingDate: Date
  },
  assignedPeople: [{ // Assuming there can be multiple people of interest
    name: String,
    contactInfo: { // You can expand this with specific fields like email, phone, etc.
      type: Map,
      of: String
    }
  }],
  products: [{ // This is an array to accommodate multiple products
    styleId: String,
    styleName: String,
    quantity: Number,
    color: String,
    weight: Number,
    weightTolerance: {
      type: Number,
      min: -100, // Assuming the tolerance can't be less than -100%
      max: 100   // Assuming the tolerance can't be more than 100%
    },
    dimensions: { // Nested object for dimensions
      length: Number,
      width: Number,
      height: Number
    },
    tolerance: { // Nested object for dimension tolerances
      length: Number,
      width: Number,
      height: Number
    },
    aql: Number, // Acceptance Quality Limit
    comments: String
  }]
});

module.exports = mongoose.model('PurchaseOrder', purchaseOrderSchema);
