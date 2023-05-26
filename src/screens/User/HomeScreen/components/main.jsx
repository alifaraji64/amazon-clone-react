import React from 'react';
import laptop from '../../../../assets/laptop.png'
import { NavLink } from 'react-router-dom';
const Main = () => {
    return (
        <main className='px-4 h-screen flex justify-center items-center'>
            <section className='text w-1/2'>
                <h1 className='text-gray-900 text-5xl font-bold mb-8'>
                    Get Yourself an <br /> Amazing Laptop
                </h1>
                <p className='leading-10 text-lg text-gray-600 font-medium'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus at neque dignissimos perferendis sed adipisci tempora est ea quis earum recusandae, inventore quibusdam aperiam voluptatum corporis? Omnis, vitae id? Dolorem.
                </p>
                <NavLink to='/' className='bg-cyan-600 p-2 mt-8 block w-28 text-center text-white rounded-md transition-all hover:bg-cyan-400 hover:text-gray-700'>
                    Shop Now
                </NavLink>
            </section>
            <section className='image w-1/2'>
                <img src={laptop} alt="" />
            </section>
        </main>
    );
}

export default Main;
