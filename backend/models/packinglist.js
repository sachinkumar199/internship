import mongoose from "mongoose";


const packingSchema = new mongoose.Schema({
         
    buyer: {
        name: { type: String, required: true },
        completeAddress: { type: String, required: true },
      },
     
    factory: {
        name: { type: String, required: true },
        completeAddress: { type: String, required: true },
    },

    totalcartoon:{
        type:Number,
        required:true
    },
    invoicenumber:{
        type:Number,
        required:true

    },
    slots:[
        {
        type:String,
        required:true
        }
       ],

    products: [
        {
          styleId: { type: String, required: true },
          styleName: { type: String, required: true },
          quantity: Number,
          color: { type: String, required: true },
          weight:{ type: Number, required: true },
          length: { type: Number, required: true },
          height: { type: Number, required: true },
          width: { type: Number, required: true },
          aql: { type: Number, required: true }, 
         assignfactory:[{
            name: { type: String, required: true }
         }]
        },
      ],
});

const Packing = mongoose.model('Packing', packingSchema);

export default Packing;
