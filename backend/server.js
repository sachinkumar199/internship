// Import the required modules using ES6 import syntax
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import router from './routes/auth.js'

dotenv.config();



const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json()); 

app.use('/api',router);




const uri = process.env.ATLAS_URI; // Connection string for MongoDB
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection;
connection.once('open', () => {
  console.log("connection established successfully");
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
