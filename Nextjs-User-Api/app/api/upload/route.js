import { writeFile } from "fs/promises";
import { NextResponse } from "next/server";
import { join } from "path";
import {connectMongoDB} from "../../../libs/mongodb";

export async function POST(req) {
    const data = await req.formData();
    const file = data.get("file");    
    if (!file) {
      return NextResponse.json({ success: false, message: "No image found" });
    }
    const byteData = await file.arrayBuffer();
    const buffer = Buffer.from(byteData);
    const path = join("public", file.name);
    await writeFile(path, buffer);
    await connectMongoDB();
    return NextResponse.json({ success: true, message: "File uploaded" });
}
