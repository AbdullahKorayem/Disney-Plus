import { geDiscoverMovies } from "@/lib/getMovies";
import CarouselsBanner from "./CarouselsBanner";

type Props = {
    id: string;
    keywords?: string
}


export default async function CarouselBannerWrapper({ id, keywords }: Props) {
    const movies = await geDiscoverMovies(id, keywords)

    return <CarouselsBanner movies={movies}  />
}

