import {auth} from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export const GET = async () => {
    const { userId } = await auth()
    if(!userId) throw new Error("Unauthorized");
    
    console.log(userId);
    return NextResponse.json({
        message: 'Hello World',
        status: 200
    })
}