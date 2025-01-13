import { NextRequest, NextResponse } from "next/server";
import User from "../../../models/user.model";

export async function POST(req: NextRequest) {
    try{
        const profile = await req.body;
        const existAccount = await User.findOne({ email: profile.email });
        if (existAccount) {
            return NextResponse.json(
                { message: "User already exists" },
                { status: 200}
            );
        }

        const newUser = await User.create(profile);
    }
    
}