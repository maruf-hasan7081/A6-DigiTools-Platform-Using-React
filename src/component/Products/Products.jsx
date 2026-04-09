import React, { use, useState } from 'react';
import Card from './Card';
import Cart from './Cart';

const Products = ({ datapromise }) => {
    const data = use(datapromise);
    const [selectedTab, setSelectedTab] = useState('Products');
    const [cart, setCart] = useState([]);

    const handleAddToCart = (product) => {
        const exists = cart.find(item => item.id === product.id);

        if (!exists) {
            setCart([...cart, product]);
        }
    };

    const handleRemoveFromCart = (id) => {
        const remainingProducts = cart.filter(item => item.id !== id);
        setCart(remainingProducts);
    };

    const handleCheckout = () => {
        setCart([]);
    };

    return (
        <div>
            <div className='text-center mt-10 px-4'>
                <h1 className='text-4xl font-bold'>Premium Digital Tools</h1>
                <p>Choose from our curated collection of premium digital products designed</p>
                <p>to boost your productivity and creativity.</p>
            </div>

            <div className='flex justify-center items-center mt-10 gap-5'>
                <button
                    className={`btn rounded-full px-6 ${selectedTab === 'Products' ? 'btn-primary' : ''}`}
                    onClick={() => setSelectedTab('Products')}
                >
                    Products
                </button>

                <button
                    className={`btn rounded-full px-6 ${selectedTab === 'Cart' ? 'btn-primary' : ''}`}
                    onClick={() => setSelectedTab('Cart')}
                >
                    Cart ({cart.length})
                </button>
            </div>

            {selectedTab === 'Products' && (
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 px-4 sm:px-6 md:px-10 lg:px-20'>
                    {data.map(product => (
                        <Card
                            key={product.id}
                            product={product}
                            cart={cart}
                            handleAddToCart={handleAddToCart}
                        />
                    ))}
                </div>
            )}

            {selectedTab === 'Cart' && (
                <Cart
                    cart={cart}
                    handleRemoveFromCart={handleRemoveFromCart}
                    handleCheckout={handleCheckout}
                />
            )}
        </div>
    );
};

export default Products;