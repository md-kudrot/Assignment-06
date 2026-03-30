import React from 'react';
import Cart from './Cart';


const SeletedCart = ({ buyCart }) => {
    return (
        <div>
            SeletedCart {buyCart.length}
            <div className="flex flex-col items-center justify-center">
                <div className="card w-[70%] bg-base-100 card-md shadow-sm p-4">
                    <p>Your cart</p>
                    <div className="flex flex-col gap-4">
                        {
                            buyCart.map(item => <Cart key={item.id} item={item}></Cart>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SeletedCart;