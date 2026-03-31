import React from 'react';
import buttonCercle from "../../assets/pic/button-cercle.png"
import play from "../../assets/pic/Play.png"
import banner from "../../assets/pic/banner.png"

const Hero = () => {
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen w-full overflow-hidden mt-18">
                <div className="hero-content gap-32 flex-col items-center justify-center lg:flex-row-reverse">
                    <img
                        src={banner}
                        className="w-full max-w-xs md:max-w-sm rounded-lg shadow-2xl"
                    />

                    <div className="part-1 flex flex-col gap-8">
                        <div className="bg-[#E1E7FF] flex gap-1 items-center w-[80%] md:w-[70%]  px-4 py-2 rounded-2xl text-[#9514FA]">
                            <img src={buttonCercle} alt="cercle" />
                            New: AI-Powered Tools Available
                        </div>
                        <div className="space-y-4">
                            <h1 className='md:text-6xl text-5xl font-bold text-black'>
                                Supercharge Your <br />Digital Workflow
                            </h1>
                            <p className='text-[#627382]'>
                                Access premium AI tools, design assets, templates, and productivity <br />
                                software—all in one place. Start creating faster today. <br />

                                Explore Products
                            </p>
                            <div className="space-x-4">
                                <a className="btn bg-[#4f39f6] text-white rounded-2xl">Explore Products</a>
                                <button className="btn btn-outline  rounded-2xl text-[#4f39f6] border-[#4f39f6]"> <img src={play} alt="" /> Watch Demo</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="py-16 bg-[#4f39f6] flex items-center justify-center">
                <div className="flex  items-center justify-center flex-wrap gap-8 md:gap-16">
                    <div className=" md:border-r border-white pr-0 md:pr-24 text-center">
                        <h1 className='text-6xl text-white font-bold'>50K+</h1>
                        <h1 className='text-[#ffffff] '>Active Users</h1>
                    </div>
                    <div className=" md:border-r border-white pr-0 md:pr-24 text-center">
                        <h1 className='text-6xl text-white font-bold'>200+</h1>
                        <h1 className='text-[#ffffff] '>Premium Tools</h1>
                    </div>
                    <div className="pr-0 md:pr-24 text-center">
                        <h1 className='text-6xl text-white font-bold'>4.9</h1>
                        <h1 className='text-[#ffffff] '>Rating</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;