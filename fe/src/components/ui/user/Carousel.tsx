'use client'

import React from 'react'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import Link from 'next/link'

type Card = {
  id: number
  title: string
  jobsCount: number
  imageUrl: string
  link: string
}

interface CarouselProps {
  cards: Card[]
}

export default function Carousel({ cards }: CarouselProps) {
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: 'free-snap',
    slides: {
    perView: 1.1, // mobile: slightly smaller so you see the next card peeking
    spacing: 12,
  },
    breakpoints: {
      '(min-width: 640px)': {
        slides: { perView: 2.2, spacing: 16 },
      },
      '(min-width: 1024px)': {
        slides: { perView: 3.06, spacing: 20 },
      },
    },
  })

  return (
    <div className="w-full">
      {/* Heading */}
      <div className="relative w-full flex flex-col justify-start mt-5">
        <h2 className="text-[26px] text-gray-100">Find your next Employer</h2>
        <p className="text-base text-gray-400">
          Explore company profiles to find the right workplace for you. Learn
          about jobs, reviews, company culture, perks and benefits.
        </p>
      </div>

      {/* Slider */}
      <div className="relative max-w-7xl w-full mt-4">
        <div ref={sliderRef} className="keen-slider px-4">
          {cards.map(({ id, title, jobsCount, imageUrl, link }) => (
            <div
              key={id}
              className="keen-slider__slide max-w-full cursor-grab"
              style={{ width: "300px" }}
            >
              <Link href={link}>
                <div className="bg-white rounded-lg shadow-md  overflow-hidden flex flex-col h-full">
                  {/* Image */}
                 <img
                    src={imageUrl}
                    alt={title}
                    loading="lazy"
                    draggable={false}
                    className="w-full sm:h-full md:h-80 object-cover"
                  />

                  {/* Content */}
                  <div className="p-4 flex flex-col justify-between">
                    <h3 className="text-gray-900 text-lg font-semibold break-words">
                      {title}
                    </h3>
                    <p className="inline-block text-black bg-gray-300 rounded-md px-2 py-0.5 w-fit ">
                      <strong>{jobsCount}</strong> Jobs
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Read More Button */}
        <div className="mt-6">
          <button className="rounded-md ml-4 border border-white px-6 py-2 cursor-pointer hover:bg-pink-600 text-white">
            Read more...
          </button>
        </div>
      </div>
    </div>
  )
}
