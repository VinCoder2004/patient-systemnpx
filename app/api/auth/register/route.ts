import { connectDB } from "@/app/lib/mongodb";
import { userModel } from "@/app/models/Patient";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";


export async function POST(req: Request){
    const } = await req.json();
    try {
        await connectDB();
        if(!firstName || !lastName || !gender || !age || !address || !phoneNumber || !email || !username || !password) return NextResponse.json({success: false, message: "Invalid parameters"}, {status: 400});
        const existingUser = await userModel.findOne({email: email});
        if(existingUser) return NextResponse.json({success: false, message: "User already exist"}, {status: 401});
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new userModel({firstName, lastName, gender, age, address, phoneNumber, email, username, password:hashedPassword});
        await user.save();
        return NextResponse.json({success: true, message: "Account registered successfully", path: `/patient/${user._id}/register`});
    } catch (error:string | any) {
        return NextResponse.json({success: false, message: error.message}, {status: 500});
    }
}