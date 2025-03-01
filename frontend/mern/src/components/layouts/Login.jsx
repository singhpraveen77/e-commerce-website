import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const navigate = useNavigate();
  
    const handleChangeEmail = (e) => {
      setEmail(e.target.value);
    };

    const handleChangePassword = (e) => {
      setPassword(e.target.value);
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
          console.log("frontend hit :")
          const res = await axios.post("http://localhost:5050/login", { email, password });
            console.log("Email:", email, "Password:", password);
        alert("Logged in !");
        
        navigate('/');
      } catch (error) {
        console.log(error);
        setError(error.response ? error.response.data.message : "An error occurred");
        // alert(error.response ? error.response.data.message : "An error occurred");
      }
    }; 
    
  return (
    <div className="bg-zinc-800 h-screen flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-yellow-400 mb-6">login acc.</h1>
        <form onSubmit={handleSubmit} className="bg-black p-6 rounded-xl shadow-md w-[40vw]">
            <input onChange={handleChangeEmail} className="shadow bg-gray-800 mb-2 appearance-none border border-gray-300 rounded w-full py-3 px-3 text-gray-200 leading-tight focus:outline-none focus:ring focus:ring-blue-500" type="text" placeholder="email" name="email" value={email} required />

            <input onChange={handleChangePassword} className="shadow bg-gray-800 mb-2 appearance-none border border-gray-300 rounded w-full py-3 px-3 text-gray-200 leading-tight focus:outline-none focus:ring focus:ring-blue-500" type="password" placeholder="pass.." name="password" value={password} required />

            <input type="submit" className="bg-green-500 hover:bg-green-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" />
        </form>
        <a href="/register" className="fixed top-4 right-4 bg-blue-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            register
        </a>
    </div>
  )
}

export default Login