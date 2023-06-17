import { NextResponse } from 'next/server'
import User from '../../../models/User';
import { connectToDatabase } from 'app/lib/utils';
import { signJWT } from 'app/lib/token';

connectToDatabase();

export async function POST(request: Request) {
//  console.log("User")
//  return NextResponse.json({ message: 'A Okay' }, { status: 200 })
  const { name, email, password } = await request.json();

  // Check for existing user
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return NextResponse.json({ message: 'User already exists.' }, { status: 400 });
  }

  // Create a new user
  try {
    const user = await User.create({ name, email, password });
    const token = await signJWT({ _id: user._id }, { exp: process.env.JWT_EXPIRES_IN as string });
    return NextResponse.json({ user, token }, { status: 200 });
  } catch (error) {
       //! password correct length, email, user. Making sure there are no matching others
    console.log("error", error);
    return NextResponse.json({ message: 'Error creating user.' }, { status: 500 });
  }


}

