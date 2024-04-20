import MoviesCarousel from "@/components/MoviesCarousel";
import { getPopularMovies, getSearchMovies } from "@/lib/getMovies";
import { notFound } from "next/navigation";
import React from "react";

type Props = {
  params: {
    term: string;
  };
};

export default async function SearchPage({ params: { term } }: Props) {

  if (!term) notFound();

  const termToUse = decodeURI(term)
  const movies = await getSearchMovies(termToUse)
  const popularMovies = await getPopularMovies()

  return (
    <div className="max-w-7xl mx-auto" >
      <div className="flex flex-col space-y-4 mt-32 xl:mt-42" >
        <h1 className="text-6xl font-semibold  px-10"> Search Resaults For</h1>
        <MoviesCarousel title="Movies" movies={movies} isVertical />
        <MoviesCarousel title="You May Also Like" movies={popularMovies} />
      </div>
    </div>
  );
}
