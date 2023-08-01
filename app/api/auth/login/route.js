
import User from '../../../models/User'
import { connectDB } from '../../../../utils/db'
import { NextResponse } from "next/server"
import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { setCookie } from 'nookies' // Import setCookie function from 'nookies'
import { serialize } from 'cookie'

const signToken = (id) => {
  return jwt.sign({id}, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN
  })
}

export async function POST(req) {
  const { email, password } = await req.json()

  if(!email || !password){
    return NextResponse.json({message: 'Please provide all fields!'})
  }
   
  try {
    await connectDB()
    const userExist = await User.findOne({email: email})
    
    if (!userExist) {
      return NextResponse.json({message: 'User does not exist!'})
    }
    
    const matchPassword = await bcryptjs.compare(password, userExist.password)

    if (!matchPassword) {
      return NextResponse.json({message: 'Invalid credentials!'})
    }

    const token = signToken(userExist._id)
    
    const serialized = serialize('acess_token', token, {
      httpOnly: true,
      secure: true,
      sameSite: 'strict',
      maxAge: 3600,
      path: '/',
    })

    const response = {
      message: 'Authentication successful!',
    }

    return new Response(JSON.stringify(response),{
      status: 200,
      headers: {
        'Set-Cookie': serialized,
      }
    })

  } catch (err) {
    console.log(err)
  }
  return new NextResponse({ message: 'Received POST request' });
}
