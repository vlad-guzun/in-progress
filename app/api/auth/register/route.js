import User from '../../../models/User'
import { connectDB } from '../../../../utils/db'
import { NextResponse } from "next/server"


export async function POST(req) {
  const { name, email, password } = await req.json()

  if(!name || !email || !password){
    return NextResponse.json({message: 'Please provide all fields!'})
  }
   
  try{
    
      await connectDB()
      const userExist = await User.findOne({email: email})
      if(userExist){
        return NextResponse.json({message: 'User already exists!'})
      }
      const user = await User.create({
        name,email,password,
      })
      return NextResponse.json({user: user})

  }catch(err){
    console.log(err)
}

  return new NextResponse({ message: 'Received POST request' });
}
