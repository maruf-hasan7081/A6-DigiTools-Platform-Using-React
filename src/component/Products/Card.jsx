import React from 'react';
import { useState } from 'react';

const Card = ({ product, handleAddToCart }) => {
    const [selected, setSelected] = useState(false);
    const onclickhandler = () => {
        
        setSelected(true);
        handleAddToCart(product);
    }
    return (
        <div className="w-full max-w-[390px] rounded-[22px] border border-[#E8E8E8] bg-white p-6 shadow-[0_0_0_1px_rgba(0,0,0,0.02)] ">
            
            <div className="mb-6 flex items-start justify-between">
                <div className="flex h-[56px] w-[56px] items-center justify-center rounded-full border border-[#ECECEC] bg-white text-[28px]">
                    {product.icon}
                </div>

                <span className="rounded-full bg-[#FCEEBE] px-4 py-2 text-[14px] font-medium text-[#D97706]">
                    {product.tag}
                </span>
            </div>

            <h2 className="text-[28px] font-bold leading-none text-[#111827]">
                {product.name}
            </h2>

            <p className="mt-5 text-[16px] leading-[1.35] text-[#6B7280]">
                {product.description}
            </p>

            <div className="mt-5 flex items-end">
                <span className="text-[28px] font-bold leading-none text-[#111827]">
                    ${product.price}
                </span>
                <span className="ml-1 text-[16px] text-[#6B7280]">
                    {product.period === 'one-time'
                        ? ''
                        : product.period === 'yearly'
                        ? '/Yr'
                        : '/Mo'}
                </span>
            </div>

            <div className="mt-6 space-y-3">
                {product.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-base-content/50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                        <p className="text-[16px] leading-none text-[#667085]">
                            {feature}
                        </p>
                    </div>
                ))}
            </div>

            <button className={`mt-8 h-[54px] w-full rounded-full ${selected === true ? "bg-green-600" : 'bg-primary'} text-[18px] font-semibold text-white`} onClick={onclickhandler} disabled={selected}>
                {selected===true ? '✓ Add to Cart' : 'Buy Now'}
            </button>
        </div>
    );
};

export default Card;