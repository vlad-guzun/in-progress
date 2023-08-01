import { Drawer } from "vaul"
import { useState } from 'react'
import axios from "axios"
import toast from 'react-hot-toast'
import dotenv from 'dotenv'
dotenv.config()


const Register = () => {

  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    password: '',
  });

  const onChange = (e) => {
    setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }))
  };

  const register = async (e) => {
    e.preventDefault()

    try {
      const response = await axios.post('/api/auth/register', inputs)
      if(response.data.message === 'User already exists!') {
        toast.error('User already exists, please login')
        return
      }
      toast.success('Registered successfully, please login')
    } catch (err) {
      console.log(err)
      toast.error('Something went wrong')
    }
  }

  return (
    <div>
      <Drawer.Root shouldScaleBackground>
        <Drawer.Trigger asChild>
          <button className='text-white'>Register</button>
        </Drawer.Trigger>
        <Drawer.Portal>
          <Drawer.Overlay className="fixed inset-0 bg-black/40" />
          <Drawer.Content className="bg-white flex flex-col fixed bottom-0 left-0 right-0 max-h-[85vh] rounded-t-[10px]">
            <h1 className='text-4xl text-purple-900'><b>Register an account</b></h1>
            <form onSubmit={register}>
              <div className="max-w-md w-full mx-auto flex flex-col overflow-auto p-4 rounded-t-[10px]">
                <label>name</label>
                <input
                  className="border border-gray-400 my-4"
                  placeholder="Tom Hardy"
                  name='name'
                  type='text'
                  onChange={onChange}
                  value={inputs.name}
                />
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
                <button type="submit" className='text-2xl text-purple-900 bg-purple-600 rounded-md'><b>Register</b></button>
              </div>
            </form>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
    </div>
  );
};

export default Register;
