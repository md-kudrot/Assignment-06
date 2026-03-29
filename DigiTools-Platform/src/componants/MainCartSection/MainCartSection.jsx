import React from 'react';

const MainCart = () => {
    return (
        <div className='mx-auto container'>
            <div className="text-center mt-20 space-y-6">
                <h1 className='text-6xl font-semiboldbold '>Premium Digital Tools</h1>
                <p className='text-[#627382]'>Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>
                <div className="flex items-center justify-center">
                    <button className="btn bg-[#4f39f6] text-white rounded-2xl">Products</button>
                    <button className="btn bg-[#4f39f6] text-white rounded-2xl">Cart(2)</button>
                </div>
            </div>

        

        </div>
    );
};

export default MainCart;