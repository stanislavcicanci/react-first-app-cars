import React from 'react'

const Hero = () => {
return (
    <div className='max-w-[1640px] mx-auto p-4'>
        <div className='max-h-[500px] relative'>
            {/* Overlay */}
            <div className='absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center'>
                <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'>The <span className='text-red-600'>Best</span></h1>
                <h1 className='px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold'><span className='text-red-600'>Car</span> Marketplace</h1>
            </div>
            <img 
            className='w-full max-h-[500px] object-cover'
            src="https://w.forfun.com/fetch/67/6734477217b7c15bf2960f8b30959f2f.jpeg?w=1470&r=0.5625" alt="/" />
        </div>        
    </div>
)
}

export default Hero
