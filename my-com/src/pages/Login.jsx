import React, { useState } from 'react';
import LoginImage from "../assets/login.webp";
import { Link } from 'react-router-dom';

const Login = () => {
  const [email ,  setEmail] = useState("")
  const [password ,  setPassword] = useState("")
  const [loading ,  setLoading] = useState(false)


  const handleClick = (e)=>{
    e.preventdefault()
    setLoading(true)

    setTimeout(()=>{
      console.log(email)
       console.log(password)
       alert("login atamp at " + email)
        setLoading(false)
    }, 1000)

  }

  const handleChange =(e)=>{
  const {name , value} = e.target
  if(name === "email"){
    setEmail(value)
  }else if (name === "password"){
    setPassword(value)
  }}



  return (
    <div className="min-h-screen w-full flex justify-center items-center bg-gray-50">
      <div className="w-[90%] sm:w-[70%] md:w-[40%] lg:w-[30%] shadow-xl rounded-xl bg-white p-6">
        <div className="flex flex-col items-center">
          
          {/* Image */}
          <div className="w-[80%] mb-4">
            <img src={LoginImage} alt="Login Visual" className="w-full h-auto object-cover rounded-md" />
          </div>

          {/* Heading */}
          <h1 className="text-3xl font-bold text-red-700 mb-2">Welcome Back!</h1>
          <p className="text-sm text-gray-600 text-center mb-4">
            To connect with us please login with your personal info
          </p>

          {/* Form */}
          <form className="w-full flex flex-col items-center space-y-4">
            <input
              type="email"
              name='email'
              onChange={handleChange}
              value={email}
              placeholder="Enter email"
              className="border border-gray-300 p-2 w-[80%] rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
            />
            <input
            name='password'
            onChange={handleChange}
            value={password}
              type="password"
              placeholder="***********"
              className="border border-gray-300 p-2 w-[80%] rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
            />
            <button
              onClick={handleClick}
              className="w-[50%] bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg text-lg font-semibold shadow-md"
            >
              Login
            </button>
          </form>
          <p className='mt-4'>if you have no account's please <span className='text-blue-600  hover:cursor-pointer'> <Link to='/signup'>Signup</Link></span></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
