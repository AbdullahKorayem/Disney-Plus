import Link from "next/link";
import React from "react";
import Image from "next/image";
import getBase64 from "@/lib/getBase64";
import { ThemeToggle } from "./ThemeToggle";
import SearchInput from "./SearchInput";
import GenreDropdown from "./GenreDropdown";
// import getBase64 from "@/lib/getbase64";

export default async function Header() {
	const blurDataUrl = await getBase64("disney.svg");

	return (
		<header className="fixed w-full z-20 top-0 flex items-center justify-between p-5 bg-gradient-to-t from-gray-200/0 via-gray-900/25 to-gray-900 ">
			<Link href="/" className="mr-10">
				<Image
					quality={80}
					src={"disney.svg"}
					alt="Disney Logo"
					width={120}
					height={100}
					className="cursor-pointer invert dark:invert-0"
					placeholder="blur"
					blurDataURL={"blurDataUrl"}
				
				/>
			</Link>

			<section className="flex space-x-2">
				<GenreDropdown />
				<SearchInput />
				<ThemeToggle />
			</section>
		</header>
	);
}
