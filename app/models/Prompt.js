import mongoose from 'mongoose'


const PromptSchema = new mongoose.Schema({
    prompt: {
        type: String,
        required: true,
    },
})

export default mongoose.models.Prompt || mongoose.model('Prompt',PromptSchema)