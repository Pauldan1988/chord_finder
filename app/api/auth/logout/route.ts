import { NextResponse, NextRequest } from "next/server";
import { connectToDatabase } from "app/lib/utils";  
import { getErrorResponse } from "app/lib/helpers"; 
import User from "../../../models/User";
import { signJWT } from "app/lib/token";

connectToDatabase();

export async function DELETE(request: NextRequest) {
    try {
        const { token } = await request.json()
        const decoded = await signJWT(token, {exp: process.env.JWT_EXPIRES_IN as string})

        if (!decoded) {
            return getErrorResponse(401, 'Token is invalid')
        }

        const user = await User.findOne(decoded._id)

        if (!user) {
            return getErrorResponse(401, 'User does not exist')
        }

        // For now, we'll just 'invalidate' the token by deleting it on the client side
        // For a more secure method, you may wish to maintain a blacklist of invalidated tokens, or use a refresh token
        return NextResponse.json({ message: 'Logged out successfully' }, { status: 200 })
    } catch (error) {
        console.log("error", error)
        return getErrorResponse(500, 'Error logging out user')
    }
}
