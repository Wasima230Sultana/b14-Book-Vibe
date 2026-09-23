import Image from 'next/image';
import React from 'react';
import bannerImg from "@/app/assets/hero_img.jpg"
const Banner = () => {
    return (
        <div className='max-w-6xl mx-auto my-4'>
            <div className=' bg-olive-300 flex justify-between items-center space-y-4 p-5 rounded-lg'>
                 <div>
                <h2 className='font-extrabold text-4xl'>Books to freshen up your bookshelf</h2>
                <button className='btn btn-success font-extrabold p-2'>View the List</button>
            </div>
            <div>
                <Image className='rounded-lg' src={bannerImg} width={800} height={800} alt='book image'></Image>
            </div>
            </div>
           
        </div>
    );
};

export default Banner;