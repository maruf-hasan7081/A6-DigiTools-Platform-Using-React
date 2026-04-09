import React from 'react';

const Steps = () => {
    return (
        <div>
            <div className='text-center mt-20 mb-10 px-4'>
                <h1 className='text-3xl md:text-4xl font-bold m-3'>Get Started in 3 Steps</h1>
                <p>Start using premium digital tools in minutes, not hours.</p>
            </div>

            <div className='flex flex-col lg:flex-row justify-center items-center gap-10 px-4 sm:px-6 md:px-10 lg:px-20'>
                <div className="h-[380px] w-full max-w-[380px] bg-base-300 rounded-2xl text-center">

                    <div className='flex justify-end m-5'>
                        <p className='bg-primary rounded-full h-6 w-6'>01</p>
                    </div>

                    <img className="mx-auto mt-20 rounded-full" src="/user.png" alt="" />

                    <h1 className="mt-4 font-bold text-xl">Create Account</h1>

                    <p className="mt-2">
                        Sign up for free in seconds. No credit card
                    </p>
                    <p>required to get started.</p>

                </div>

                <div className="h-[380px] w-full max-w-[380px] bg-base-300 rounded-2xl text-center">

                    <div className='flex justify-end m-5'>
                        <p className='bg-primary rounded-full h-6 w-6'>02</p>
                    </div>

                    <img className="mx-auto mt-20 rounded-full" src="/package.png" alt="" />

                    <h1 className="mt-4 font-bold text-xl">Choose Products</h1>

                    <p className="mt-2">
                        Browse our catalog and select the tools
                    </p>
                    <p>that fit your needs.</p>

                </div>

                <div className="h-[380px] w-full max-w-[380px] bg-base-300 rounded-2xl text-center">

                    <div className='flex justify-end m-5'>
                        <p className='bg-primary rounded-full h-6 w-6'>03</p>
                    </div>

                    <img className="mx-auto mt-20 rounded-full" src="/rocket.png" alt="" />

                    <h1 className="mt-4 font-bold text-xl">Start Creating</h1>

                    <p className="mt-2">
                        Download and start using your premium .
                    </p>
                    <p>tools immediately.</p>

                </div>
            </div>
        </div>
    );
};

export default Steps;