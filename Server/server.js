import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

const app = express();
dotenv.config();    

app.use(cors());
app.use(express.json());    

app.get('/', (req, res) => {
    res.send('Welcome to the Email Website API');
}); 

app.post('/', (req, res) => {
    const { email } = req.body;
    if (!email) {
        return res.status(400).json({ message: 'Email is required' });
    }
    // Here you would typically save the email to a database or perform some action
    res.status(200).json({ message: `Email ${email} received successfully` });
});