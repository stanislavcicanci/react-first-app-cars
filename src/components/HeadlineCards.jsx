import React from 'react'

const HeadlineCards = () => {
return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
        {/* Card */}
        <div className='rounded-xl relative'>
            {/* Overlay */}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-4'>Aston Martin DB11</p>
                <p className='px-2'>Through 8/26</p>
                <button className='border-white bg-white text-black mx-2 absolute bottom-4'>See now</button>
            </div>
            <img 
            className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' 
            src="https://images.pexels.com/photos/17084778/pexels-photo-17084778/free-photo-of-luxurious-fast-car.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="" />
        </div>
        {/* Card */}
        <div className='rounded-xl relative'>
            {/* Overlay */}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-4'>New Cars</p>
                <p className='px-2'>Added Daily</p>
                <button className='border-white bg-white text-black mx-2 absolute bottom-4'>See now</button>
            </div>
            <img 
            className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' 
            src="https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="" />
        </div>
        {/* Card */}
        <div className='rounded-xl relative'>
            {/* Overlay */}
            <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-4'>We Sell Minicars Too</p>
                <p className='px-2'>Cool cars</p>
                <button className='border-white bg-white text-black mx-2 absolute bottom-4'>See now</button>
            </div>
            <img 
            className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' 
            src="https://a.d-cd.net/Ifjy4raL7OP32u95Aw_r28JeUDQ-1920.jpg"
            alt="" />
        </div>
    </div>
)
}

export default HeadlineCards
