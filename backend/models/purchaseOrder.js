const mongoose = require('mongoose');

const purchaseOrderSchema = new mongoose.Schema({
  buyer: {
    name: { type: String, required: true },
    completeAddress: { type: String, required: true },
  },
  vendor: {
    name: { type: String, required: true },
    completeAddress: { type: String, required: true },
  },
  shipTo: {
    name: { type: String, required: true },
    completeAddress: { type: String, required: true },
    shipVia: String,
    shippingDate: Date,
  },
  assignedPeople: [
    {
      name: { type: String, required: true },
    },
  ],
  products: [
    {
      styleId: String,
      styleName: String,
      quantity: Number,
      color: String,
      weight: Number,
      length: Number,
      height: Number,
      width: Number,
      aql: Number,
      weightTolerance: {
        type: Number,
        min: -100,
        max: 100,
      },
      lengthTolerance: {
        type: Number,
        min: -100,
        max: 100,
      },
      widthTolerance: {
        type: Number,
        min: -100,
        max: 100,
      },
      heightTolerance: {
        type: Number,
        min: -100,
        max: 100,
      },
    },
  ],
});

const PurchaseOrder = mongoose.model('PurchaseOrder', purchaseOrderSchema);

export default PurchaseOrder;
