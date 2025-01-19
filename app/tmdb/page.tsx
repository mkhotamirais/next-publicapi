const imagePrefix = "https://image.tmdb.org/t/p/original";
const apiKey = process.env.TMDB_API_KEY;
import { tmdbUrl } from "@/lib/menus";
import { TmdbMovie } from "@/lib/types";
import Image from "next/image";

export default async function TmdbPage() {
  const response = await fetch(`${tmdbUrl}/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  const results: TmdbMovie[] = await data.results;

  return (
    <div className="max-w-screen-xl mx-auto p-4">
      <h1>Tmdb</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
        {results.map((item) => (
          <div key={item.id} className="border rounded">
            <Image
              src={`${imagePrefix}${item?.backdrop_path || item?.poster_path}`}
              width={500}
              height={500}
              alt="tmdb image"
              className="h-48 object-cover object-center"
              priority
            />
            <h3 className="text-center py-2 text-primary">{item.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
