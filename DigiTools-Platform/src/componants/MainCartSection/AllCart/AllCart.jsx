import React from 'react';

const AllCart = ({ item, handleBusCart }) => {
    // console.log(item)
    return (
        <div className=''>
            <div className="card bg-base-100 shadow-sm">
                <div className="card-body">
                    <div className="flex justify-end">
                        <span className="badge badge-xs badge-warning">{item.tagType}</span>
                    </div>

                    <div className="bg-amber-100 rounded-full w-8 h-8 flex items-center justify-center">{item.icon}</div>

                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold">{item.name}</h2>
                        <p className='line-clamp-2'>{item.description}</p>
                        <span className="text-xl">${item.price}/mo</span>
                    </div>
                    <ul className="mt-6 flex flex-col gap-2 text-xs basis-1">
                        
                        {
                            item.features.map(f => <li key={f}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span >{f}</span>
                            </li>)
                        }
                       
                    </ul>
                    <div className="mt-6">
                        <button className="btn btn-primary bg-[#4f39f6] text-white rounded-full btn-block" onClick={() => handleBusCart(item)}>Buy Now</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AllCart;