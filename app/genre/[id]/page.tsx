import MoviesCarousel from "@/components/MoviesCarousel";
import { geDiscoverMovies } from "@/lib/getMovies";
import React from "react";

type Props = {
	params: {
		id: string;
	};
	searchParams: {
		genre: string;
	};
};

export default async function GenrePage({
	params: { id },
	searchParams: { genre },
}: Props) {

	const movies = await geDiscoverMovies(id)

	return <div className="max-w-7xl mx-auto">
		<div className="flex flex-col space-y-5 mt-32 xl:mt-42" >
			<h1 className="text-6xl font-semibold px-10">Results for {genre}</h1>
		</div>

		<MoviesCarousel title={genre} movies={movies} isVertical />
	</div>;
}
