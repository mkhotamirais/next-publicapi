import { OmdbSearchType } from "@/lib/types";
import OmdbCard from "./omdb-card";
import { omdbApiUrl } from "@/lib/menus";
const apiKey = process.env.OMDB_API_KEY;

export default async function OmdbList({ sp }: { sp: Record<string, string> }) {
  const params = new URLSearchParams(sp).toString();

  const response = await fetch(`${omdbApiUrl}/?apikey=${apiKey}&${params || "s=naruto"}`);
  const data = await response.json();
  const result = data?.Search as OmdbSearchType[];

  return (
    <div>
      {result ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-1 py-2">
          {result.map((item, i) => (
            <OmdbCard key={i} item={item} />
          ))}
        </div>
      ) : (
        <div>not found</div>
      )}
    </div>
  );
}
