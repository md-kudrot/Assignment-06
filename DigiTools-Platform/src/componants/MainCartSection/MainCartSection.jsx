import React, { use, useState } from 'react';
import AllCart from './AllCart/AllCart';
import SeletedCart from './SeletedCart/SeletedCart';
import { toast } from 'react-toastify';

const MainCart = ({ dataPromise, buyCart, setBuyCart }) => {
    const data = use(dataPromise)
    // console.log(data)
    const [selected, setSelected] = useState("Products")

    // console.log(selected)
    // const [buyCart, setBuyCart] = useState([])

    const handleBusCart = (cart) => {
        setBuyCart([...buyCart.filter(i => i.name !== cart.name), cart])
        toast.success("added successfuly")
    }
    
    
    
    const removeCart = (cart) => {
        // console.log(cart)
        setBuyCart([...buyCart.filter(i => i.id !== cart.id)])
        toast.warning("Delete successfuly")
        
    }
    
    const Proceed = ()=>{
        setBuyCart([])
        toast.error("Delete all successfuly")
    }



    return (
        <div className='mx-auto container'>
            <div className="text-center mt-20 space-y-6">
                <h1 className='text-6xl font-semiboldbold '>Premium Digital Tools</h1>
                <p className='text-[#627382]'>Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>
                <div className="flex items-center justify-center">
                    <button className={`btn ${selected === "Products" ? "bg-[#4f39f6] text-white" : "bg-white text-black"}   rounded-2xl`} onClick={() => setSelected("Products")}>Products</button>
                    <button className={`btn ${selected === "Card" ? "bg-[#4f39f6] text-white" : "bg-white text-black"}  rounded-2xl`}
                        onClick={() => { setSelected("Card"); }}
                    >Cart({buyCart.length})</button>
                </div>
            </div>
            {
                selected === "Products" ?
                    <div className="grid grid-cols-2 md:grid-cols-3  gap-4 p-10">
                        {
                            data.map(item => <AllCart key={item.id} item={item} handleBusCart={handleBusCart}></AllCart>)
                        }
                    </div>
                    :

                    <SeletedCart buyCart={buyCart} removeCart={removeCart} Proceed={Proceed}></SeletedCart>
            }




        </div>
    );
};

export default MainCart;