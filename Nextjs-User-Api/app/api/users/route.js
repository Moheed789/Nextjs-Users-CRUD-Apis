import User from "../../../model/user";
import { NextResponse } from "next/server";
import connectMongoDB from "../../../libs/mongodb";

export async function POST(request) {
    try {
        const { name, full_name, email, age } = await request.json();
        await connectMongoDB();
        await User.create({ name, full_name, email, age });
        return NextResponse.json({ message: "User Created and Upload Image" }, { status: 201 });
    } catch (e) {
        console.log(e.message);
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 })
    }
};



export async function GET() {
    try {
        await connectMongoDB();
        const users = await User.find();
        return NextResponse.json({ users });
    } catch (e) {
        console.log(e.message);
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 })
    }
};

export async function DELETE(request) {
    try {
        const id = request.nextUrl.searchParams.get("id");
        await connectMongoDB();
        await User.findByIdAndDelete(id);
        return NextResponse.json({ message: "User Deleted" }, { status: 200 });
    } catch (e) {
        console.log(e.message);
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 })
    }
};