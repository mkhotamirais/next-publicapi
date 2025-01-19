import { PiSpinner } from "react-icons/pi";
import OmdbList from "./omdb-list";
import { OmdbSearch } from "./omdb-query";
import { Suspense } from "react";

// { params: Promise<{ id: string }> }

export default async function OmdbapiPage({ searchParams }: { searchParams: Promise<Record<string, string>> }) {
  const sp = await searchParams;
  const { s, type, y, plot } = sp;

  return (
    <div className="max-w-screen-xl mx-auto p-4">
      <h1>Omdbapi</h1>
      <div>
        <OmdbSearch />
      </div>
      <div>
        <Suspense
          key={`${s}-${type}-${y}-${plot}`}
          fallback={
            <div className="flex items-center justify-center mt-24">
              <PiSpinner size={48} className="animate-spin" />
            </div>
          }
        >
          <OmdbList sp={sp} />
        </Suspense>
      </div>
    </div>
  );
}
