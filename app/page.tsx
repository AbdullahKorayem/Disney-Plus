import CarouselBannerWrapper from "@/components/CarouselBannerWrapper";
import MoviesCarousel from "@/components/MoviesCarousel";
import { getPopularMovies, getTopRatedMovies, getUpComingMovies } from "@/lib/getMovies";
import { SpeedInsights } from "@vercel/speed-insights/next"


export default async function Home() {

  const upComingMovies = await getUpComingMovies()
  const topRatedMovies = await getTopRatedMovies()
  const popularMovies = await getPopularMovies()


  return (
    <main className=" mb-52">

      <CarouselBannerWrapper id="" />



      <MoviesCarousel title="Upcoming" movies={upComingMovies} />
      <MoviesCarousel title="Top Rated" movies={topRatedMovies} />
      <MoviesCarousel title="Popular" movies={popularMovies} />

      <SpeedInsights />
    </main>
  );
}
