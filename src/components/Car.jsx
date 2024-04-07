import React, {useState} from 'react';
import { data } from '../data/data.js';

const Car = () => {
const [cars, setCars] = useState(data);

// Filter Type cars
    const filterType =(category) =>{
        setCars(
            data.filter((item) => {
            return item.category === category;
            })
        )
    }

    // Filter by price
    const filterPrice = (price) => {
        setCars(
            data.filter((item) => {
            return item.price === price;
            })
        )
    }
return (
    <div className='max-w-[1620px] m-auto px-4 py-12'>
    <h1 className='text-red-600 font-bold text-4xl text-center'>Top Rated Cars</h1>

        {/* Filter Row */}
        <div className='flex flex-col lg:flex-row justify-between'>
            {/* Filter Type */}
            <div>
            <p className='font-bold text-gray-700'>Filter Type</p>
            <div className='flex justify-between flex-wrap'>
                <button onClick={() => setCars(data)} className='m-1 border-red-600 text-red-600 hover:bg-red-600 hover:text-white'>All</button>
                <button onClick={() => filterType('electric')} className='m-1 border-red-600 text-red-600 hover:bg-red-600 hover:text-white'>Electric</button>
                <button onClick={() => filterType('petrol')} className='m-1 border-red-600 text-red-600 hover:bg-red-600 hover:text-white'>Petrol</button>
            </div>
            </div>

            {/* Filter Price */}
            <div>
            <p className='font-bold text-gray-700'> Filter Price</p>
            <div className='flex justify-between max-w-[390px] w-full'>
                <button onClick={() => filterPrice(20000)} className='m-1 border-red-600 text-red-600 hover:bg-red-600 hover:text-white'>20000</button>
                <button onClick={() => filterPrice(30000)} className='m-1 border-red-600 text-red-600 hover:bg-red-600 hover:text-white'>30000</button>
                <button onClick={() => filterPrice(50000)} className='m-1 border-red-600 text-red-600 hover:bg-red-600 hover:text-white'>50000</button>
                <button onClick={() => filterPrice(250000)} className='m-1 border-red-600 text-red-600 hover:bg-red-600 hover:text-white'>250000</button>
            </div>
        </div>
    </div> 

    {/* Display cars */}
    <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
        {cars.map((car, index) => (
            <div key={index} className='border shadow-lg rounded-lg hover:scale-105 duration-300'>
                <img 
                className='w-full h-[200px] object-cover rounded-t-lg'
                src={car.image} alt={car.name} />
                <div className='flex justify-between px-3 py-4'>
                    <p className='font-bold'>{car.name}</p>
                    <p> 
                        <span className='bg-red-600 text-white rounded-full p-1 text-sm lg:text-lg'>{car.price} $ </span>
                    </p>
                </div>
            </div>
        )  
        )}
    </div>
    </div>
)
}

export default Car
