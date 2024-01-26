import User from "../../../model/user";
import { NextResponse } from "next/server";
import connectMongoDB from "../../../libs/mongodb";

export async function POST(request){
        const {name, full_name, email, age} = await request.json();
        await connectMongoDB();
        await User.create({name, full_name, email, age});
        return NextResponse.json({message: "User Created"}, {status: 201});   
};

export async function GET(){
    await connectMongoDB();
    const users = await User.find();
    return NextResponse.json({users});
};

export async function DELETE(request){
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDB();
    await User.findByIdAndDelete(id);
    return NextResponse.json({message: "User Deleted"}, {status: 200});
};