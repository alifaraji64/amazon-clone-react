import React from 'react';
import laptop from '../../../assets/laptop.png'
import { NavLink } from 'react-router-dom';
const HomeScreen = () => {
    return (
        <div>
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
            <div class="custom-shape-divider-bottom-1684792324">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
                </svg>
            </div>
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
            <section className='h-screen relative'>
                <div class="custom-shape-divider-top-1684793208">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
                    </svg>
                </div>
            </section>
        </div>
    );
}

export default HomeScreen;
