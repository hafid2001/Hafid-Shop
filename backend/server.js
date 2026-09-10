import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;  
 app.use(express.json());

 app.use(cors());
  
 app.get("/", (req, res) => {
  res.send("API is running...");
}); 



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); 

