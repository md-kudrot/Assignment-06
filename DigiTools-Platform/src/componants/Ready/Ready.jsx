import React from 'react';

const Ready = () => {
    return (
        <div>
            <div className="text-center py-16 mt-20 space-y-6 bg-gradient-to-r from-[#4F39F6] to-[#9514FA]">
                <h1 className='text-6xl font-semiboldbold text-white'>Ready to Transform Your Workflow?</h1>
                <p className='text-white'>Join thousands of professionals who are already using Digitools to work smarter.Start your free trial today.</p>
                <div className="space-x-8">
                    <button className={`btn bg-white text-[#4F39F6]  rounded-2xl`} >Explore Products</button>
                    <button className={`btn bg-gradient-to-r from-[#4F39F6] to-[#9514FA] text-white  rounded-2xl w-[10rem]`} >Products</button>
                </div>
                <p className='text-white'>14-day free trial • No credit card required • Cancel anytime</p>
            </div>
        </div>
    );
};

export default Ready;