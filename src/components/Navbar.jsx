import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <nav className='h-24 flex justify-between items-center px-3'>
                <div className="logo">
                    <h1 className='text-3xl text-cyan-600 font-bold'>Laptopify</h1>
                </div>
                <div className="links text-lg">
                    <NavLink to='' className='pr-2'>Home</NavLink>
                    <NavLink to='' className='px-2'>About</NavLink>
                    <NavLink to='' className='pl-2'>Products</NavLink>
                </div>
                <div className="buttons">
                    <NavLink className='text-xl font-medium'>Login <i className="fa-solid fa-right-to-bracket"></i></NavLink>
                </div>
            </nav>
            <Outlet />
            <footer className='h-40 bg-cyan-900 flex justify-center items-center'>
                <p className='text-gray-50 font-semibold text-xl'>© 2023 Laptopify All rights reserved</p>
            </footer>
        </>
    );
}

export default Navbar;
