import { NextResponse, NextRequest } from "next/server";
import User from "../../../models/User";
import { signJWT } from "app/lib/token";
import { connectToDatabase } from "app/lib/utils";  
import { getErrorResponse } from "app/lib/helpers"; 
import bcrypt from "bcrypt";
import { ZodError } from "zod";

connectToDatabase();

export async function POST(request: NextRequest) {
    try {
        const { email, password } = await request.json()
        const user = await User.findOne({ email })

        if (!user) {
            return getErrorResponse(401, 'User does not exist')
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        user.password = hashedPassword;
        const validPassword = await bcrypt.compare(password, hashedPassword);

        if (!validPassword) {
            return getErrorResponse(401, 'Incorrect Password')
        }

        const token = await signJWT({ _id: user._id } , { exp: process.env.JWT_EXPIRES_IN as string })
        return NextResponse.json({ user, token }, { status: 200 })
    } catch (error) {
        console.log("error", error)
        return getErrorResponse(500, 'Error logging in user')
    }
}