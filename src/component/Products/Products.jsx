import React, { use } from 'react';
import Card from './Card';

const Products = ({ datapromise }) => {
    const data = use(datapromise)
    return (
        console.log(datapromise),
        <div>
            <div className='text-center mt-10'>
                 <h1 className='text-4xl font-bold'>Premium Digital Tools</h1>
                 <p>Choose from our curated collection of premium digital products designed</p>
                 <p>to boost your productivity and creativity.</p>

            </div>
            <div className='flex justify-center align-center mt-10 gap-5'>
                <button className='btn '>Products</button>
                <button className='btn'>Cart(<span>0</span>)</button>

            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10'>

                {data.map(product => <Card key={product.id} product={product} />)}
               

            </div>
           

            
        </div>
    );
};

export default Products;