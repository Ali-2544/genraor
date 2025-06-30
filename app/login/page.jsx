import React from 'react';

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-100">
      <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-xl">
        <h1 className="text-3xl font-bold text-center mb-8 text-blue-700">Login to GENROAR</h1>
        <form className="space-y-6">
          <div>
            <label className="block text-gray-700 font-medium mb-2">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your email"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-2">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your password"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow hover:from-blue-700 hover:to-purple-700 transition"
          >
            Login
          </button>
        </form>
        <div className="my-6 flex items-center justify-center">
          <span className="h-px w-16 bg-gray-300" />
          <span className="mx-4 text-gray-400 font-medium">or</span>
          <span className="h-px w-16 bg-gray-300" />
        </div>
        <div className="flex flex-col space-y-3">
          <button className="flex items-center justify-center w-full py-2 px-4 border border-gray-300 rounded-lg bg-white hover:bg-gray-50 transition font-medium text-gray-700">
            <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5 mr-2" />
            Login with Google
          </button>
          <button className="flex items-center justify-center w-full py-2 px-4 border border-gray-300 rounded-lg bg-white hover:bg-gray-50 transition font-medium text-gray-700">
            <img src="https://www.svgrepo.com/show/157810/facebook.svg" alt="Facebook" className="w-5 h-5 mr-2" />
            Login with Facebook
          </button>
          <button className="flex items-center justify-center w-full py-2 px-4 border border-gray-300 rounded-lg bg-white hover:bg-gray-50 transition font-medium text-gray-700">
            <img src="https://www.svgrepo.com/show/452229/instagram-1.svg" alt="Instagram" className="w-5 h-5 mr-2" />
            Login with Instagram
          </button>
        </div>
      </div>
    </div>
  );
} 