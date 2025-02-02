import React from "react";

const Login = () => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white w-screen max-w-lg mx-4 p-8  rounded-lg shadow-lg relative">
                <button className="absolute top-4 right-4 text-black text-2xl font-bold">
                    &times;
                </button>

                <h2 className="text-2xl font-semibold mb-6">Log in</h2>

                <form>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">
                            Email *
                        </label>
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:border-gray-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">
                            Password *
                        </label>
                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:border-gray-500"
                        />
                    </div>

                    <div>
                        <a href="#" className="text-sm text-gray-500 underline hover:text-red-500">
                            Forgot your password?
                        </a>
                    </div>

                    <div className="flex">
                        <div className="text justify-around">
                            <button className='bg-gray-800  text-white px-20 py-2 rounded hover:bg-gray-900 mt-6' type="submit">Log In</button>
                        </div>
                        <div className="underline mt-7">
                            <a href="#" className="ml-2 text-sm text-gray-700  hover:text-red-500">New customer?Create your account</a>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;