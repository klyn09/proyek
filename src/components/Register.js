import React, { useState } from 'react';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    // Tambahkan logika pendaftaran di sini
    console.log('Register dengan', { name, email, password });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6">Register</h2>
        <form onSubmit={handleRegister} className="space-y-4">
          {/* Input Nama */}
          <div>
            <label htmlFor="name" className="block text-gray-700">Nama</label>
            <input
              type="text"
              id="name"
              className="w-full p-2 mt-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Masukkan nama"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

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

          {/* Tombol Register */}
          <div>
            <button
              type="submit"
              className="w-full bg-green-700 text-white py-2 px-4 rounded-md hover:bg-green-600 transition duration-300"
            >
              Register
            </button>
          </div>

          {/* Tautan ke halaman Login */}
          <div className="text-center">
            <p className="text-gray-700">Sudah punya akun?</p>
            <button
              type="button"
              className="mt-2 text-blue-500 hover:underline"
              onClick={() => console.log('Navigasi ke halaman login')}
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
