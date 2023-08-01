'use client'
import {AiFillGithub} from 'react-icons/ai'
import Link from 'next/link'

import Autenticate from "./Autenticate"

const Navbar = () => {
  return (
    <div className='flex justify-between bg-blue-950'>
      <div className='flex flex-row mt-2 ml-1'>
        <AiFillGithub color='white'/>
        <Link href={'/'} className='text-white'>/vlad-guzun</Link>
      </div>
      <Autenticate />
    </div>
  )
}

export default Navbar
