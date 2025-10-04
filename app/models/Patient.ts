import mongoose, { mongo } from "mongoose";

const userSchema = new mongoose.Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    gender: {type: String, enum: ['male', 'female', 'other'], required:true},
    role: {type: String, enum: ['patient', 'doctor', 'staff'], default: "patient"},
    age: {type: String, required: true},
    address: {type: String, required: true},
    phoneNumber: {type: String, required: true},
    email: {type:String, required: true},
    username: {type: String, required: true},
    password: {type: String, required: true}
}, {timestamps: true});

export const userModel = mongoose.models.patients || mongoose.model("patients", userSchema);