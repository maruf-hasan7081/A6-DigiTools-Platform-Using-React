import React from 'react';

const Banar_2 = () => {
    return (
        <div className='h-[487px] w-[100%] bg-[#9514FA] flex flex-col items-center mx-auto justify-center gap-5'>

            <div className='text-center text-white'>
                <h1 className='text-4xl font-bold m-5'>Ready to Transform Your Workflow?</h1>
                <p>Join thousands of professionals who are already using Digitools to work smarter.</p>
                <p>Start your free trial today.</p>
            </div>
            <div className='flex gap-5 mt-5'>
                <button className='btn rounded-2xl text-primary bg-white'>Explore Products</button>
                <button className='btn bg-transparent rounded-2xl text-white'>View Pricing</button>
            </div>
            <div>
                <ul className='flex gap-3 text-white'>
                    <li>14-day free trial</li>
                    <span>•</span>
                    <li>No Credit card required</li>
                    <span>•</span>
                    <li>Cancel anytime</li>
                </ul>
            </div>
            
        </div>
    );
};

export default Banar_2;