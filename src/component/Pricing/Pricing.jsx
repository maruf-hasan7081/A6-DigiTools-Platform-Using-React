import React from 'react';

const Pricing = () => {
    return (
        <div>
            <div className='text-center mt-20 mb-10'>
                <h1 className='text-4xl font-bold'>Simple, Transparent Pricing</h1>
                <p>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>

            </div>
            <div className='flex justify-center items-center gap-10 mb-20 px-20'>
                <div >
                    <div className="card h-[448px] w-96 bg-base-100 shadow-sm">
                        <div className="card-body flex flex-col">
                            {/* <span className="badge badge-xs badge-warning">Most Popular</span> */}
                            <div className="">
                                <h2 className="text-3xl font-bold">Starter</h2>
                                <p>Perfect for getting started</p>
                            </div>
                            <span className="text-xl"><span className='text-3xl font-bold'>$0</span>/month</span>
                            <ul className="mt-6 flex flex-col gap-2 text-xs">
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>Access to 10 free tools</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>Basic templates</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>Community support</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>1 project per month</span>
                                </li>

                            </ul>
                            <div className="mt-auto">
                                <button className="btn btn-primary btn-block rounded-2xl">Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="card relative h-[448px] w-96 shadow-sm bg-primary text-white">
                        <div className="card-body flex flex-col">
                            <span className="absolute -top-3 left-1/2 -translate-x-1/2 badge badge-warning px-4 py-2 rounded-full">
                                Most Popular
                            </span>
                            <div className="">
                                <h2 className="text-3xl font-bold">Pro</h2>
                                <h2 className="">Best for professionals</h2>


                            </div>
                            <span className="text-xl"><span className='text-3xl font-bold'>$29</span>/month</span>
                            <ul className="mt-6 flex flex-col gap-2 text-xs">
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>Access to all premium tools</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>Unlimited templates</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>Priority support</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>Unlimited projects</span>
                                </li>
                                <li >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>Cloud sync</span>
                                </li>
                                <li >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span >Advanced analytics</span>
                                </li>
                            </ul>
                            <div className="mt-auto">
                                <button className="btn btn-white btn-block rounded-2xl">Start Pro Trial</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="card h-[448px] w-96 bg-base-100 shadow-sm">
                        <div className="card-body flex flex-col">
                            {/* <span className="badge badge-xs badge-warning">Most Popular</span> */}
                            <div className="">
                                <h2 className="text-3xl font-bold">Enterprise</h2>
                                <p>For teams and businesses</p>

                            </div>
                            <span className="text-xl"><span className='text-3xl font-bold'>$99</span>/month</span>
                            <ul className="mt-6 flex flex-col gap-2 text-xs">
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>Everything in Pro</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>Team collaboration</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>Custom integrations</span>
                                </li>
                                <li>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span>Dedicated support</span>
                                </li>
                                <li >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-base-content/50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span >SLA guarantee</span>
                                </li>
                                <li >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-base-content/50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span >Custom branding</span>
                                </li>
                            </ul>
                            <div className="mt-auto">
                                <button className="btn btn-primary btn-block rounded-2xl outline-none">Contact Sales</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Pricing;