import User from "../../../../model/user";
import { NextResponse } from "next/server";
import connectMongoDB from "../../../../libs/mongodb";

export async function PUT(request, { params }) {
    try {
        const { id } = params;
        const { name, full_name, email, age } = await request.json();
        await connectMongoDB();
        await User.findByIdAndUpdate(id, { name, full_name, email, age });
        return NextResponse.json({ message: "User Updated" }, { status: 200 });
    } catch (e) {
        console.log(e.message);
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 })
    }
};