import React from 'react';

const Banar = () => {
    return (
        <div className='flex justify-between items-center px-20 py-10'>


            <div>

                <h1 className='text-4xl font-bold'>Supercharge Your</h1>
                <h1 className='text-4xl font-bold'>Digital Workflow</h1>
                <p className='text-lg'>
                    Access premium AI tools, design assets, templates, and productivity <br />
                    software—all in one place. Start creating faster today.
                    
                </p>
                <p className=''>Explore Products</p>
                  <div className='flex gap-5 mt-5'>
                    <button className='btn btn-primary rounded-2xl'>Explore Products</button>
                <button className='btn rounded-2xl btn-outline-primary'> <img src="/src/assets/Play.png" alt="" />Watch Demo</button>

                  </div>

            </div>
            <div>
                <img src="/src/assets/banner.png" alt="" />
            </div>

        </div>
    );
};

export default Banar;