import React from 'react';

const Stat = () => {
  return (
    <div className="bg-primary  py-12">

      <div className="flex justify-around items-center text-center text-white">

        <div>
          <h2 className="text-4xl font-bold">50K+</h2>
          <p className="text-sm mt-2 opacity-80">Active users</p>
        </div>

       
        <div className="h-16 w-[1px] bg-white/30"></div>

        <div>
          <h2 className="text-4xl font-bold">200+</h2>
          <p className="text-sm mt-2 opacity-80">Premium Tools</p>
        </div>

        
        <div className="h-16 w-[1px] bg-white/30"></div>

        <div>
          <h2 className="text-4xl font-bold">4.9</h2>
          <p className="text-sm mt-2 opacity-80">Rating</p>
        </div>

      </div>

    </div>
  );
};

export default Stat;