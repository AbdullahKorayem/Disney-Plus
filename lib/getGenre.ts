import { Genres } from "@/Typings";


export async function getGenres() {
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

    return data

}