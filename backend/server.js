// Import the required modules using ES6 import syntax
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
import auth from './routes/auth.js'




const app = express();
const port = process.env.PORT || 5000;


app.use('/auth',auth);
app.use(cors());
app.use(express.json()); // allows us to parse JSON


// Import routes
// If you have user routes, for example, they would be imported like this:
// import usersRouter from './routes/users.js';

const uri = process.env.ATLAS_URI; // Connection string for MongoDB
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
});

// Use the routes
// If you imported user routes above, you would use them like this:
// app.use('/users', usersRouter);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
