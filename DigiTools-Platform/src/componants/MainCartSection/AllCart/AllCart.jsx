import React from 'react';

const AllCart = () => {
    return (
        <div className='grid gap-16 py-10  grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
            <div className="card w-96 bg-base-100 shadow-sm">
                <div className="card-body">
                    <div className="flex justify-end">
                        <span className="badge badge-xs badge-warning">Most Popular</span>
                    </div>

                    <div className="bg-amber-100 rounded-full w-8 h-8 flex items-center justify-center">🚀</div>

                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold">Premium</h2>
                        <p>Generate high-quality content, blogs, and marketing copy in seconds with advanced AI.</p>
                        <span className="text-xl">$29/mo</span>
                    </div>
                    <ul className="mt-6 flex flex-col gap-2 text-xs">
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span>High-resolution image generation</span>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span>Customizable style templates</span>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span>Batch processing capabilities</span>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span>AI-driven image enhancements</span>
                        </li>
                        <li className="opacity-50">
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-base-content/50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span className="line-through">Seamless cloud integration</span>
                        </li>
                        <li className="opacity-50">
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-base-content/50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span className="line-through">Real-time collaboration tools</span>
                        </li>
                    </ul>
                    <div className="mt-6">
                        <button className="btn btn-primary bg-[#4f39f6] text-white rounded-full btn-block">Buy Now</button>
                    </div>
                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-sm">
                <div className="card-body">
                    <div className="flex justify-end">
                        <span className="badge badge-xs badge-warning">Most Popular</span>
                    </div>

                    <div className="bg-amber-100 rounded-full w-8 h-8 flex items-center justify-center">🚀</div>

                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold">Premium</h2>
                        <p>Generate high-quality content, blogs, and marketing copy in seconds with advanced AI.</p>
                        <span className="text-xl">$29/mo</span>
                    </div>
                    <ul className="mt-6 flex flex-col gap-2 text-xs">
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span>High-resolution image generation</span>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span>Customizable style templates</span>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span>Batch processing capabilities</span>
                        </li>
                        <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span>AI-driven image enhancements</span>
                        </li>
                        <li className="opacity-50">
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-base-content/50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span className="line-through">Seamless cloud integration</span>
                        </li>
                        <li className="opacity-50">
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-base-content/50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span className="line-through">Real-time collaboration tools</span>
                        </li>
                    </ul>
                    <div className="mt-6">
                        <button className="btn btn-primary bg-[#4f39f6] text-white rounded-full btn-block">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllCart;