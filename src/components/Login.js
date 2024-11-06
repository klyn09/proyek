import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();  // Hook untuk navigasi

  const handleLogin = (e) => {
    e.preventDefault();
    // Tambahkan logika login di sini
    console.log('Login dengan', { email, password });
  };

  const handleRegisterClick = () => {
    navigate('/register');  // Pindah ke halaman Register
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          {/* Input Email */}
          <div>
            <label htmlFor="email" className="block text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              className="w-full p-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Masukkan email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Input Password */}
          <div>
            <label htmlFor="password" className="block text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              className="w-full p-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Masukkan password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Tombol Login */}
          <div>
            <button
              type="submit"
              className="w-full bg-green-700 text-white py-2 px-4 rounded-md hover:bg-green-600 transition duration-300"
            >
              Login
            </button>
          </div>
        </form>

        {/* Tombol Register */}
        <div className="mt-4">
          <button
            onClick={handleRegisterClick}
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-400 transition duration-300"
          >
            Belum punya akun? Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
