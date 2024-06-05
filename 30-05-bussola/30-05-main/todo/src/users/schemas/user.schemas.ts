import mongoose from "mongoose";
import { Schema, model } from 'mongoose';
// Schema
const userSchema = new Schema({
    idUser: Number,
    nameUser: String,
    pesoUser: Number,
    senhaUser: String,
    emailUser: String
}, {
   timestamps: true 
   }
);

// `UserModel` will have `name: string`, etc.
export default model('User', userSchema);