import OmdbList from "./omdb-list";
import { OmdbSearch, OmdbType } from "./omdb-query";
import { Suspense } from "react";
import Pending from "@/components/Pending";

// { params: Promise<{ id: string }> }

export default async function OmdbapiPage({ searchParams }: { searchParams: Promise<Record<string, string>> }) {
  const sp = await searchParams;
  const { s, type, y, plot } = sp;

  return (
    <div className="max-w-screen-xl mx-auto p-4">
      <h1>Omdbapi</h1>
      <div className="flex gap-2 flex-wrap">
        <OmdbSearch />
        <OmdbType />
      </div>
      <div>
        <Suspense key={`${s}-${type}-${y}-${plot}`} fallback={<Pending />}>
          <OmdbList sp={sp} />
        </Suspense>
      </div>
    </div>
  );
}
