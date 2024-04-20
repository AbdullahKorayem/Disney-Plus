import { Genres } from "@/Typings";
import React from "react";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import Link from "next/link";
import Image from "next/image";
import { ChevronDown } from "lucide-react";



export default async function GenreDropdown() {
	const url = "https://api.themoviedb.org/3/genre/movie/list?language=en";

	const options: RequestInit = {
		method: "GET",
		headers: {
			accept: "application/json",
			Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
		},
		next: {
			revalidate: 60 * 60 * 24,
		},
	};

	const response = await fetch(url, options);
	const data = (await response.json()) as Genres;

	
	return <>
		<DropdownMenu>
			<DropdownMenuTrigger className="text-white flex justify-center items-center">
				Genre <Image className="ml-1" src="chevron-small-down.svg" alt="arrow-down" width={28} height={28} />
			</DropdownMenuTrigger>

			<DropdownMenuContent>
				<DropdownMenuLabel>Select Genre</DropdownMenuLabel>
				<DropdownMenuSeparator/>
					{data.genres.map((genre) => (<DropdownMenuItem key={genre.id}><Link href={`/genre/${genre.id}?genre=${genre.name}`}>{genre.name}</Link></DropdownMenuItem>))}
				
			</DropdownMenuContent>
		</DropdownMenu>
	</>
}
