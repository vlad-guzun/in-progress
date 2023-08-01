import { connectDB } from "../../../utils/db"
import { NextResponse } from "next/server"
import Prompt from "../../models/Prompt"

export async function GET(){
    
    try{
        
        await connectDB()
        const prompts = await Prompt.find({})

        return NextResponse.json({prompts: prompts})

    }catch(err){
        console.log(err)
    }
}