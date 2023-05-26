import React from 'react';

const Future = () => {
    return (
        <section className='h-screen relative'>
                <div className='flex justify-between px-8 mt-8'>
                    <h2 className='text-cyan-600 text-2xl font-semibold'>Custom Furniture <br /> Built Only For You</h2>
                    <h2 className='text-cyan-800'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe dolorum debitis <br /> consectetur reprehenderit non aliquam voluptates dolore aut vero consequuntur</h2>
                </div>
                <br />
                <br />
                <div className='box-container flex justify-evenly items-center'>
                    <section className='w-72 h-72 bg-cyan-300 text-center p-2'>
                        <i class="fa-regular fa-compass text-6xl text-cyan-900 mb-4"></i>
                        <h2 className='text-cyan-950 text-xl font-bold mb-2'>Mission</h2>
                        <p className='text-cyan-900'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi</p>
                    </section>
                    <section className='w-72 h-72 bg-cyan-300 text-center p-2'>
                        <i class="fa-solid fa-laptop text-6xl text-cyan-900 mb-4"></i>
                        <h2 className='text-cyan-950 text-xl font-bold mb-2'>Vision</h2>
                        <p className='text-cyan-900'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi</p>
                    </section>
                    <section className='w-72 h-72 bg-cyan-300 text-center p-2'>
                        <i class="fa-solid fa-timeline text-6xl text-cyan-900 mb-4"></i>
                        <h2 className='text-cyan-950 text-xl font-bold mb-2'>Mission</h2>
                        <p className='text-cyan-900'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi</p>
                    </section>
                </div>
            </section>
    );
}

export default Future;
