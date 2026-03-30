import React from 'react';


const SeletedCart = ({ buyCart }) => {
    return (
        <div>
            SeletedCart {buyCart.length}
            <div className="flex flex-col items-center justify-center">
                <div className="card w-[70%] bg-base-100 card-md shadow-sm">
                    <div className="card-body">
                        <p>Your cart</p>
                        <div className="bg-[#f9fafc] px-8 py-4 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <h1>img</h1>
                                <div className="">
                                    <h1 className='text-xl text-black font-semibold'>Ai wiriting pro</h1>
                                    <p className='text-[#627382]'>$29</p>
                                </div>
                            </div>
                            <div className="">
                                <p className='text-red-500'>Remove</p>
                            </div>
                        </div>
                        <div className="justify-end card-actions">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SeletedCart;