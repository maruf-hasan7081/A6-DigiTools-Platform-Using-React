import React from 'react';

const Cart = ({ cart, handleRemoveFromCart, handleCheckout }) => {
    const total = cart.reduce((sum, item) => sum + item.price, 0);

    return (
        <div className='mt-10 px-4 sm:px-6 md:px-10 lg:px-20 mb-10'>
            <div className='rounded-[22px] border border-[#E8E8E8] bg-white p-6 md:p-8 shadow-sm'>
                <h2 className='text-[32px] font-bold text-[#111827] mb-8'>Your Cart</h2>

                {cart.length === 0 ? (
                    <p className='text-lg text-gray-500'>No product added</p>
                ) : (
                    <>
                        <div className='space-y-4'>
                            {cart.map(item => (
                                <div
                                    key={item.id}
                                    className='flex items-center justify-between rounded-2xl bg-[#F7F7FA] px-4 py-4'
                                >
                                    <div className='flex items-center gap-4'>
                                        <div className='flex h-[48px] w-[48px] items-center justify-center rounded-full bg-white text-2xl border border-[#ECECEC]'>
                                            {item.icon}
                                        </div>

                                        <div>
                                            <h3 className='text-xl font-semibold text-[#111827]'>
                                                {item.name}
                                            </h3>
                                            <p className='text-[#6B7280]'>${item.price}</p>
                                        </div>
                                    </div>

                                    <button
                                        onClick={() => handleRemoveFromCart(item.id)}
                                        className='text-pink-500 font-medium'
                                    >
                                        Remove
                                    </button>
                                </div>
                            ))}
                        </div>

                        <div className='mt-6 flex justify-between items-center'>
                            <p className='text-[#6B7280] text-lg'>Total:</p>
                            <h3 className='text-4xl font-bold text-[#111827]'>${total}</h3>
                        </div>

                        <button
                            onClick={handleCheckout}
                            className='btn mt-6 h-[56px] w-full rounded-full border-none bg-primary text-lg font-semibold text-white'
                        >
                            Proceed To Checkout
                        </button>
                    </>
                )}
            </div>
        </div>
    );
};

export default Cart;