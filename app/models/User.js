import { models,model,Schema } from 'mongoose'
import bcryptjs from 'bcryptjs'

const UserSchema = new Schema({
    
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required:true,
        unique:true,
    },
    password: {
        type: String,
        required:true,
    },
}) 

UserSchema.pre('save', async function(next){
    if(!this.isModified('password')){
        next()
    }
    const salt = await bcryptjs.genSalt(10)
    this.password = await bcryptjs.hash(this.password,salt)
    next()
})

export default models.User || model('User',UserSchema)