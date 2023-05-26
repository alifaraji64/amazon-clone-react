import React from 'react';
import { NavLink } from 'react-router-dom';
const Featured = () => {
    return (
        <section className='bg-cyan-600 h-screen relative text-center'>
                <div>
                    <h1 className='text-4xl font-semibold text-gray-100'>Featured Products</h1>
                    <div className='w-16 h-2 bg-gray-200 mx-auto mt-3'></div>
                </div>
                <div className='flex justify-evenly mx-auto my-20'>
                    <div>
                        <img width={330} src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6477/6477889_sd.jpg;maxHeight=2000;maxWidth=2000" alt="" />
                        <div className='flex justify-between text-gray-100 font-semibold'>
                            <p>HP-15-dy2073dx</p>
                            <p>399$</p>
                        </div>
                    </div>
                    <div>
                        <img width={330} src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6477/6477889_sd.jpg;maxHeight=2000;maxWidth=2000" alt="" />
                        <div className='flex justify-between text-gray-100 font-semibold'>
                            <p>HP-15-dy2073dx</p>
                            <p>399$</p>
                        </div>
                    </div>
                    <div>
                        <img width={330} src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6477/6477889_sd.jpg;maxHeight=2000;maxWidth=2000" alt="" />
                        <div className='flex justify-between text-gray-100 font-semibold'>
                            <p>HP-15-dy2073dx</p>
                            <p>399$</p>
                        </div>
                    </div>
                </div>
                <NavLink to='/' className='text-cyan-600 p-2 mt-16 bg-gray-100 text-center rounded-md transition-all hover:bg-cyan-600 hover:text-gray-100 hover:border hover:border-gray-100'>
                    ALL PRODUCTS
                </NavLink>
            </section>
    );
}

export default Featured;
