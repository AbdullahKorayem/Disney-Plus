"use client"

import { Movie } from "@/Typings"

import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Image from "next/image"
import getImagePath from "@/lib/getImagePath"

Autoplay.globalOptions = { delay: 8000 }

function CarouselsBanner({ movies }: { movies: Movie[] }) {

    const [emblaRef] = useEmblaCarousel({ loop: true, duration: 100 }, [Autoplay()])
    return (
        <div className='overflow-hidden relative lg:mt-100 cursor-pointer' ref={emblaRef}>
            <div className='flex'>
                {movies.map((movie) => (
                    <div key={movie.id} className='min-w-0 relative flex-[0_0_100%]'>
                        <Image
                            quality={80}
                            src={getImagePath(movie.backdrop_path, true)}
                            alt={movie.title}
                            width={1920}
                            height={1080}
                            className="cursor-pointer"
                            placeholder="blur"
                            blurDataURL={getImagePath(movie.backdrop_path, true)}

                        />
                        <div className='hidden lg:inline absolute mt-0 top-0 pt-40 xl:pt-52 left-0 lg:mt-40 bg-transparent z-20 h-full w-full bg-gradient-to-r from-gray-900/90 via-transparent to-transparent p-10 space-y-5 text-white '>
                            <h2 className='font-bold text-5xl max-w-xl z-50'>{movie.title}</h2>
                            <p className='line-clamp-3'>{movie.overview}</p>
                        </div>

                    </div>
                ))}
            </div>
            <div className="lg:mt-100 absolute inset-0 bg-gradient-to-b from-gray-200/0 via-gray-900/25 to-gray-300 dark:to-[#1A1C29]" />

        </div>
    )
}



export default CarouselsBanner
