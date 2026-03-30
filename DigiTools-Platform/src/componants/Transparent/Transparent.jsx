import React from 'react';

const Transparent = () => {
    return (
        <div>
            <div className="text-center mt-20 space-y-6">
                <h1 className='text-6xl font-semiboldbold '>Simple, Transparent Pricing</h1>
                <p className='text-[#627382]'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>

                <div className="flex gap-4 items-center justify-center py-6">
                    <div className="card w-96  bg-[#F9FAFC] shadow-sm">
                        <div className="card-body">
                            <div className="flex flex-col items-start">
                                <h2 className="text-3xl font-bold">Premium</h2>
                                <p className='text-[#627382]'>Perfect for getting started</p>

                                <span className="text-xl mt-8 "><span className='text-4xl font-bold'>$0</span><span className='text-[#627382]'>/Month</span></span>
                            </div>
                            <ul className="flex flex-col items-start mt-4">
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>Access to 10 free tools</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>Basic templates</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>Community support</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>1 project per month</span>
                                </li>

                            </ul>
                            <div className="mt-16">
                                <button className="btn btn-primary btn-block rounded-full">Get Started Free</button>
                            </div>
                        </div>
                    </div>
                    <div className="card w-96  bg-[#4F39F6] shadow-sm">
                        <button className='absolute ml-28 -mt-5 btn w-[40%] rounded-full bg-[#FEF3C6] text-[#BB4D00]'>Most Popular</button>
                        <div className="card-body">
                            <div className="flex flex-col items-start">
                                <h2 className="text-3xl font-bold text-white">Pro</h2>
                                <p className='text-[#FFFFFF]'>Perfect for getting started</p>

                                <span className="text-xl mt-8 "><span className='text-4xl font-bold text-[#FFFFFF]'>$0</span><span className='text-[#FFFFFF]'>/Month</span></span>
                            </div>
                            <ul className="flex flex-col items-start mt-4 text-[#FFFFFF]">
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>Access to 10 free tools</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>Basic templates</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>Community support</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>1 project per month</span>
                                </li>

                            </ul>
                            <div className="mt-16">
                                <button className="btn btn-primary btn-block bg-white text-[#4F39F6]  rounded-full">Get Started Free</button>
                            </div>
                        </div>
                    </div>
                    <div className="card w-96  bg-[#F9FAFC] shadow-sm">
                        <div className="card-body">
                            <div className="flex flex-col items-start">
                                <h2 className="text-3xl font-bold">Enterprise</h2>
                                <p className='text-[#627382]'>For teams and businesses</p>

                                <span className="text-xl mt-8 "><span className='text-4xl font-bold'>$99</span><span className='text-[#627382]'>/Month</span></span>
                            </div>
                            <ul className="flex flex-col items-start mt-4">
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>Everything in Pro</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>Team collaboration</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>Custom integrations</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>Dedicated support</span>
                                </li>
          

                            </ul>
                            <div className="mt-16">
                                <button className="btn btn-primary btn-block rounded-full">Get Started Free</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Transparent;