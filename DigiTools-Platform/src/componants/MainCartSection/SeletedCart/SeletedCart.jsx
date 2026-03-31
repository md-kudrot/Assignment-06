import { ShoppingCart } from 'lucide-react';
import Cart from './Cart';


const SeletedCart = ({ buyCart, removeCart, Proceed }) => {

    const mot = buyCart.reduce((acc, item) => {
        return acc + item.price
    }, 0)

    return (
        <div>
            <div className="flex flex-col items-center justify-center mt-10">

                {buyCart.length === 0 && (
                    <div className="flex flex-col items-center justify-center py-20 gap-4">
                        <ShoppingCart className="w-16 h-16 text-gray-300" />
                        <h2 className="text-2xl font-semibold text-gray-500">Your cart is empty</h2>
                        <p className="text-gray-400">Looks like you haven't added anything yet.</p>
                    </div>
                )}

                {
                    buyCart.length > 0 && <div className="card w-[70%] bg-base-100 card-md shadow-sm p-4">
                        <p className='pb-6'>Your cart</p>
                        <div className="flex flex-col gap-4">
                            {
                                buyCart.map(item => <Cart key={item.id} item={item} removeCart={removeCart}></Cart>)
                            }
                        </div>
                        <div className="flex items-center justify-between mt-10">
                            <div className="">
                                <p>Total:</p>
                            </div>
                            <div className="">
                                <p>$ {mot.toFixed(2)}</p>
                            </div>

                        </div>
                        <button className="btn btn-active w-full mt-6 btn-primary" onClick={() => Proceed()}>Proceed to Checkout</button>
                    </div>
                }

               

               
            </div>
        </div>
    );
};

export default SeletedCart;