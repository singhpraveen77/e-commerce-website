import React, { useState } from 'react'

const Login = () => {

    const [user, setUser]=useState("");
    const [pass, setPass]=useState("")

    const handleSubmit = async(e)=>{
        e.preventDefault();
        console.log(e.target[0].value);
        console.log(pass);
        
    }
    
  return (
    <div className="bg-zinc-800 h-screen flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-yellow-400 mb-6">login acc.</h1>
        <form onSubmit={handleSubmit} className="bg-black p-6 rounded-xl shadow-md w-[40vw]">
            <input className="shadow bg-gray-800 mb-2 appearance-none border border-gray-300 rounded w-full py-3 px-3 text-gray-200 leading-tight focus:outline-none focus:ring focus:ring-blue-500" type="email" placeholder="email" onChange={(e)=>setUser(e.target.value)} name="email" value={user} required />

            <input className="shadow bg-gray-800 mb-2 appearance-none border border-gray-300 rounded w-full py-3 px-3 text-gray-200 leading-tight focus:outline-none focus:ring focus:ring-blue-500" type="password" placeholder="pass.."  onChange={(e)=>setPass(e.target.value)} value={pass} name="password" required />

            <input type="submit" className="bg-green-500 hover:bg-green-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" />
        </form>
        <a href="/" className="fixed top-4 right-4 bg-blue-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Create
        </a>
    </div>
  )
}

export default Login