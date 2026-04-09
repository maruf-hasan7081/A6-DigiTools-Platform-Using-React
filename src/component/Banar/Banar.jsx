import React from 'react';

const Banar = () => {
    return (
        <div className='flex flex-col-reverse lg:flex-row justify-between items-center px-10 sm:px-6 md:px-10 lg:px-20 py-8 md:py-10 gap-10'>

            <div className='text-center lg:text-left'>

                <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold'>Supercharge Your</h1>
                <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold'>Digital Workflow</h1>

                <p className='text-sm sm:text-base md:text-lg mt-3'>
                    Access premium AI tools, design assets, templates, and productivity <br className='hidden md:block' />
                    software—all in one place. Start creating faster today.
                </p>

                <p className='mt-3'>Explore Products</p>

                <div className='flex flex-col sm:flex-row justify-center lg:justify-start gap-3 sm:gap-5 mt-5'>
                    <button className='btn btn-primary rounded-2xl w-full sm:w-auto'>Explore Products</button>

                    <button className='btn rounded-2xl btn-outline-primary w-full sm:w-auto flex items-center justify-center gap-2'>
                        <img className='w-5 h-5' src="/src/assets/Play.png" alt="" />
                        Watch Demo
                    </button>
                </div>

            </div>

            <div className='w-full flex justify-center'>
                <img className='w-full max-w-md lg:max-w-lg' src="/src/assets/banner.png" alt="" />
            </div>

        </div>
    );
};

export default Banar;