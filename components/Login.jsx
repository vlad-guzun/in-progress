'use client'

import { Drawer } from "vaul"
import {useState} from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation'



const Login = () => {

  const router = useRouter()

  const [inputs,setInputs] = useState({
    email: '',
    password: '',
  })


  const onChange = (e) => {
    setInputs(prev => 
      ({...prev, [e.target.name]: e.target.value}))
  }

  const onSubmit = async(e) => {
    e.preventDefault()

    const response = await axios.post('api/auth/login', inputs)
    if(response.data.message === 'Invalid credentials!') {
      toast.error('Invalid credentials!')
      return
    }
    toast.success('Logged in successfully')
    router.push('/dashboard')
  }

  return (
    <div>
        <Drawer.Root shouldScaleBackground>
      <Drawer.Trigger asChild>
        <button className='text-white'>Login</button>
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40" />
        <Drawer.Content className="bg-white flex flex-col fixed bottom-0 left-0 right-0 max-h-[85vh] rounded-t-[10px]">
          <h1 className='text-4xl text-purple-900'><b>Register an account</b></h1>
          <form onSubmit={onSubmit}> 
            <div className="max-w-md w-full mx-auto flex flex-col overflow-auto p-4 rounded-t-[10px]">
                <label>email</label>
                <input
                  className="border border-gray-400 my-4"
                  placeholder='johndoe@example.com'
                  name='email'
                  onChange={onChange}
                  value={inputs.email}
                  type="email"
                />
                <label>password</label>
                  <input
                  className="border border-gray-400 my-4"
                  placeholder=''
                  name='password'
                  onChange={onChange}
                  value={inputs.password}
                  type="password"
                />
                <button className='text-2xl text-white bg-blue-900 rounded-md'><b>Welcome</b></button>
            </div>
          </form>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
    </div>
  )
}

export default Login
