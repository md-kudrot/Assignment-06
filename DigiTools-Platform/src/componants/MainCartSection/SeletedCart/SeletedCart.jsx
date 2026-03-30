import Cart from './Cart';


const SeletedCart = ({ buyCart, removeCart, Proceed }) => {

    const mot = buyCart.reduce((acc, item) => {
        return acc + item.price
    }, 0)

    return (
        <div>
            <div className="flex flex-col items-center justify-center mt-10">
                <div className="card w-[70%] bg-base-100 card-md shadow-sm p-4">
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
                    <button className="btn btn-active w-full mt-6 btn-primary" onClick={()=> Proceed()}>Proceed to Checkout</button>
                </div>
            </div>
        </div>
    );
};

export default SeletedCart;