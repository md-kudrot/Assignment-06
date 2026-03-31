import React from 'react';
import User from "../../assets/pic/user.png"
import Package from "../../assets/pic/package.png"
import rocket from "../../assets/pic/rocket.png"

const GetStart = () => {
    return (
        <div>
            <div className="text-center mt-10 md:mt-20 space-y-6">
                <h1 className='text-3xl md:text-5xl lg:text-6xl font-semibold'>Get Started in 3 Steps</h1>
                <p className='text-[#627382]'>Start using premium digital tools in minutes, not hours.</p>
                <div className="bg-[#f9fafc] flex flex-wrap gap-4 items-center justify-center p-4 md:p-8">
                    <div className="bg-white p-6 rounded-2xl ">
                        <div className="flex justify-end">
                            <span className='bg-[#4f39f6]rounded-full h-8 w-8 text-center flex items-center justify-center bg-[#4F39F6] rounded-full text-white'>01</span>
                        </div>
                        <div className="flex justify-center items-center flex-col">
                            <div className="flex items-center justify-center rounded-full h-28 w-28">

                                <img src={User} alt="" />

                            </div>
                            <h1 className='text-2xl font-semiboldbold '>Create Account</h1>
                            <p className='text-[#627382]'>Sign up for free in seconds. No credit card <br /> required to get started.</p>
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-2xl">
                        <div className="flex justify-end">
                            <span className='bg-[#4f39f6]rounded-full h-8 w-8 text-center flex items-center justify-center bg-[#4F39F6] rounded-full text-white'>02</span>
                        </div>
                        <div className="flex justify-center items-center flex-col">
                            <div className="flex items-center justify-center rounded-full h-28 w-28">

                                <img src={Package} alt="" />

                            </div>
                            <h1 className='text-2xl font-semiboldbold '>Choose Products</h1>
                            <p className='text-[#627382]'>Browse our catalog and select the tools <br />
                                that fit your needs.</p>
                        </div>
                    </div>
                    <div className="bg-white p-6 rounded-2xl">
                        <div className="flex justify-end">
                            <span className='bg-[#4f39f6]rounded-full h-8 w-8 text-center flex items-center justify-center bg-[#4F39F6] rounded-full text-white'>03</span>
                        </div>
                        <div className="flex justify-center items-center flex-col">
                            <div className="flex items-center justify-center rounded-full h-28 w-28">

                                <img src={rocket} alt="" />

                            </div>
                            <h1 className='text-2xl font-semiboldbold '>Start Creating</h1>
                            <p className='text-[#627382]'>Download and start using your premium <br />
                                tools immediately.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GetStart;