import React from 'react'
import {Link} from "react-router-dom"
function SignUp() {
  return (
    <div className="container">
       <Link to="/">
        <p className="bg-orange-600 text-center p-2 rounded text-white max-w-[250px] m-auto"> Back Home</p>
      </Link>
     
        <div className="md:grid grid-cols-2">
        <div className="text-center p-4">
          <h1 className="text-2xl text-orange-600">Login</h1>
          <form action="">
            <input className="block my-4 p-3 border-2 w-[100%]" type="email" name="email" id="password" placeholder='Enter password'/>
            <input className="block my-4 p-3 border-2 w-[100%]" type="password" name="password" id="password" placeholder='Password' />

            <div className="flex justify-between">
              <a href="" className="text-left block">Forgot password?</a>
              <button className="bg-orange-600 py-2 px-5 rounded text-white hover:bg-orange-900">Login</button>
            </div>
          </form>
         </div>
        <div className="">
        <div className="text-center p-4">
          <h1 className="text-2xl text-orange-600">Sign Up</h1>
          <form action="">
            <input className="block my-4 p-3 border-2 w-[100%]" type="text" name="email" id="password" placeholder='Enter Name'/>
            <input className="block my-4 p-3 border-2 w-[100%]" type="email" name="password" id="password" placeholder='Enter Email' />
            <input className="block my-4 p-3 border-2 w-[100%]" type="password" name="password" id="password" placeholder='Password' />
            <input className="block my-4 p-3 border-2 w-[100%]" type="password" name="password" id="password" placeholder='Confirm Password' />

            <button className="bg-orange-600 py-2 px-5 rounded text-white text-center w-[100%] hover:bg-orange-900">Login</button>
          </form>
         </div>
          </div>
        </div>
    </div>
  )
}

export default SignUp