import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function Create() {
  const [formData, setFormData] = useState({ username: "", email: "", password: ""});
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    try {
      const res = await axios.post("http://localhost:5005/register", formData);
      alert("User created successfully!");
      setError(null);
      navigate('/');
    } catch (error) {
      setError(error.response ? error.response.data.message : "An error occurred");
      alert(error.response ? error.response.data.message : "An error occurred");
    }
  }; 

  return (
    <div className="bg-zinc-800 h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-yellow-400 mb-6">Create User</h1>
      <form onSubmit={handleSubmit} className="bg-black p-6 rounded-xl shadow-md w-[40vw]">
          
          <input className="shadow bg-gray-800 mb-2 appearance-none border border-gray-300 rounded w-full py-4 px-3 text-gray-200 leading-tight focus:outline-none focus:ring focus:ring-blue-500" type="text" placeholder="user_name" name="username" required onChange={handleChange} />
          
          <input className="shadow bg-gray-800 mb-2 appearance-none border border-gray-300 rounded w-full py-3 px-3 text-gray-200 leading-tight focus:outline-none focus:ring focus:ring-blue-500" type="text" placeholder="email" name="email" required onChange={handleChange} />
          
          <input className="shadow bg-gray-800 mb-2 appearance-none border border-gray-300 rounded w-full py-3 px-3 text-gray-200 leading-tight focus:outline-none focus:ring focus:ring-blue-500" type="password" placeholder="pass.." name="password" required onChange={handleChange} />
          
          <input type="submit" value="create" className="bg-green-500 hover:bg-green-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" />

      </form>
      <a href="/login" className="fixed top-4 right-4 bg-blue-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          Login
      </a>
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
}

export default Create;