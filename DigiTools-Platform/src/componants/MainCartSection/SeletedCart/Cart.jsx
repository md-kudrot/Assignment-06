import React from 'react';

const Cart = ({ item, removeCart }) => {
    // console.log(item)
    return (
        <div>
            <div className="">
                <div className="bg-[#f9fafc] md:px-8 px-2 py-4 flex gap-4 items-center justify-between">
                    <div className="flex items-center gap-2">
                        <p className="text-2xl">
                            {item.icon}
                        </p>
                        <div className="">
                            <h1 className='md:text-xl text-sm text-black font-semibold'>{item.name}</h1>
                            <p className='text-[#627382]'>$ {item.price}</p>
                        </div>
                    </div>
                    <div className="">
                        <p className='text-red-500 cursor-pointer' onClick={() => removeCart(item)}>Remove</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;