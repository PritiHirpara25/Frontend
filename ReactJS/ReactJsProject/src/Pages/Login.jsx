import React from 'react'
import { GoArrowUpRight } from "react-icons/go";


const Login = () => {
    return (
        <div>
            <div className=" bg-light-gray w-[640px] flex min-h-full flex justify-center px-6 py-12 lg:px-8">

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form action="#" method="POST" className="space-y-6">
                        <div className="mt-2 relative">
                            <input
                                type="email"
                                required
                                autoComplete="email"
                                className="block w-full rounded-md h-12  border-0 border-solid border-light-gray text-gray-900 shadow-sm  sm:text-sm sm:leading-6"
                            />
                            <label className='absolute top-4 left-3 text-light-gray text-xs'>Email*</label>
                        </div>

                        <div>

                            <div className="mt-2 relative">
                                <input
                                    type="password"
                                    required
                                    autoComplete="current-password"
                                    className="block w-full rounded-md h-12  border-0 border-solid border-light-gray text-gray-900 shadow-sm  sm:text-sm sm:leading-6 "
                                />
                                <label className='absolute top-4 left-3 text-light-gray text-xs'>Password*</label>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="text-sm mt-8">
                                    <a href="#" className="underline text-mid-gray font-500 hover:text-light-radium">
                                        Forgot your password?
                                    </a>
                                </div>
                            </div>
                        </div>

                    <div className='flex gap-7 h-2'>
                        <div className='w-100%'>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md px-3 py-1.5 font-semibold leading-6 shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Log in
                            </button>
                        </div>
                        <div className="flex items-center justify-between w-100">
                            <div className="text-sm mt-8 underline">
                                <a href="#" className=" text-sm font-semibold hover:text-light-radium flex">
                                    New customer? Create your account'<div className='pt-1'><GoArrowUpRight /></div>
                                </a>
                            </div>
                        </div>
                    </div>
                    </form>


                </div>
            </div>
        </div>
    )
}

export default Login