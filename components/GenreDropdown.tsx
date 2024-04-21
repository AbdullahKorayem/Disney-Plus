
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
import { getGenres } from "@/lib/getGenre";




export default async function GenreDropdown() {

	const data = await getGenres()



	return <div>
		<DropdownMenu>
			<DropdownMenuTrigger className="text-white flex justify-center items-center">
				Genre <Image className="ml-1" src="chevron-small-down.svg" alt="arrow-down" width={28} height={28} />
			</DropdownMenuTrigger>

			<DropdownMenuContent>
				<DropdownMenuLabel>Select Genre</DropdownMenuLabel>
				<DropdownMenuSeparator />
				{data.genres?.map((genre) => (<DropdownMenuItem key={genre.id}><Link href={`/genre/${genre.id}?genre=${genre.name}`}>{genre.name}</Link></DropdownMenuItem>))}

			</DropdownMenuContent>
		</DropdownMenu>
	</div>
}
