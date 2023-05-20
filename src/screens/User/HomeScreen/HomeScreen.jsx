import React from 'react';
import laptop from '../../../assets/laptop.jpg'

const HomeScreen = () => {
    return (
        <div>
            <main>
                <section className='text'>
                    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus at neque dignissimos perferendis sed adipisci tempora est ea quis earum recusandae, inventore quibusdam aperiam voluptatum corporis? Omnis, vitae id? Dolorem.</h1>
                </section>
                <section className='image'>
                    <img src={laptop} alt="" />
                </section>
            </main>
        </div>
    );
}

export default HomeScreen;
