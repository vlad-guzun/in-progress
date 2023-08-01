import { connectDB } from '../../utils/db'
import { NextResponse } from "next/server"
import Prompt from '../models/Prompt'


export async function POST(req) {
    const { prompt } = await req.json()

    if(!prompt){
        return NextResponse.json({message: 'Please provide all fields!'})
    }
    try{

        await connectDB()
        const goodPrompt = await Prompt.create({prompt})
        return NextResponse.json({prompt: goodPrompt})


    }catch(err){
        console.log(err)
    }

    
    return NextResponse.json({ prompt })
}