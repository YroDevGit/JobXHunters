'use client'

import React from 'react'
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import Link from 'next/link';

type Card = {
  id: number;
  title: string;
  jobsCount: number;
  imageUrl: string;
  link: string;
};

interface CarouselProps {
  cards: Card[];

}

export default function Carousel({cards} : CarouselProps){

const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: 'free-snap',
    slides: {
      perView: 1,
      spacing: 15,
    },
    breakpoints: {
      '(min-width: 640px)': {
        slides: { perView: 2, spacing: 20 },
      },
      '(min-width: 1024px)': {
        slides: { perView: 3, spacing: 25 },
      },
    },
  });

  return (
   <>
   <div className='w-full flex flex-col justify-start mt-5'>
     <h2 className='text-[26px] text-gray-100'>Find your next Employer</h2>
    <h2 className='text-base text-gray-400 text-wrap'>Explore company profiles to find the right workplace for you. Learn about jobs, reviews, company culture, perks and benefits.</h2>
   </div>
    <div className='relative max-w-7xl w-full mt-2 md:mt-4'>
       <div ref={sliderRef} className="keen-slider" style={{ padding: '0 1rem' }}>
        {cards.map(({ id, title, jobsCount, imageUrl,link }) => (
            <div key={id} className="keen-slider__slide" style={{ cursor: 'grab' }}>
            <Link href={link} passHref legacyBehavior>
            <a href="">
            <div
                style={{
                background: '#fff',
                borderRadius: 12,
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                overflow: 'hidden',
                userSelect: 'none',
                }}
                
            >
                <img
                src={imageUrl}
                alt={title}
                style={{height: 180, objectFit: 'cover' }}
                loading="lazy"
                draggable={false}
                className='-mt-5 w-[30%] md:w-[40%]'
                
                />
                <div style={{ padding: '1rem' }}>
                    <h3 className='text-gray-950 text-wrap' style={{ margin: 0, fontSize: '1.125rem', fontWeight: 600 }}>{title}</h3>
                    <p className='inline-block py-1 px-2 text-base/6  text-gray-900 shadow-lg rounded-md bg-gray-300 mt-1'><strong className='font-semibold'>{jobsCount}</strong> Jobs</p>
                </div>
            </div>
            </a>
           </Link>
        </div>
        ))}
        </div> 
        <div className='mt-6'>
            <button className='
             rounded-md border border-white px-6 py-2 cursor-pointer hover:bg-pink-600
            '>Read more...</button>
        </div>
    </div>
   </>
  );
}
