import mongoose from "mongoose";
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
      email: { type: String, required: true },
    },
  ],
  products: [
    {
      styleId: { type: String, required: true },
      styleName: { type: String, required: true },
      quantity: { type: Number, required: true },
      color: { type: String, required: true },
      weight: { type: Number, required: true },
      length: { type: Number, required: true },
      height: { type: Number, required: true },
      width: { type: Number, required: true },
      aql: { type: Number, required: true },
      weightTolerance: {
        type: Number,
        required: true,
        min: -100,
        max: 100,
      },
      lengthTolerance: {
        type: Number,
        required: true,
        min: -100,
        max: 100,
      },
      widthTolerance: {
        type: Number,
        required: true,
        min: -100,
        max: 100,
      },
      heightTolerance: {
        type: Number,
        required: true,
        min: -100,
        max: 100,
      },
    },
  ],
  comments: [
    {
      comment:String,
    }
  ],
});

const PurchaseOrder = mongoose.model('PurchaseOrder', purchaseOrderSchema);

export default PurchaseOrder;
