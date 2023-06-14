import { NextResponse } from 'next/server'
import User from '../../models/User';
import { connectToDatabase } from 'app/lib/utils';

connectToDatabase();

export async function POST(request: Request) {
 
  const { name, email, password } = await request.json();

  // Check for existing user
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return NextResponse.json({ message: 'User already exists.' }, { status: 400 });
  }

  // Create a new user
  try {
    const user = await User.create({ name, email, password });
    return NextResponse.json({ user }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: 'Error creating user.' }, { status: 500 });
  }


}