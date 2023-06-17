import { NextResponse } from 'next/server'
import User from '../../models/User';
import { connectToDatabase } from 'app/lib/utils';

connectToDatabase();


export async function GET(request: Request) {
  // const user = await User.findById()
  console.log(request)
  return NextResponse.json({ message: 'Headeeeeeeers' }, { status: 200 })
}