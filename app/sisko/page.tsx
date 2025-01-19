import { Suspense } from "react";
import ProductList from "./product-list";
import { QuerySearch, QuerySorting, QueryType } from "./product-query";
import Pending from "@/components/Pending";

export default async function SiskoPage({ searchParams }: { searchParams: Promise<Record<string, string>> }) {
  const sp = await searchParams;
  return (
    <div>
      <div className="my-2 flex gap-2 flex-wrap">
        <QuerySearch />
        <QuerySorting />
        <QueryType />
      </div>
      <Suspense key={`${sp.search_name}-${sp.sorting}-${sp.type}`} fallback={<Pending />}>
        <ProductList sp={sp} />
      </Suspense>
    </div>
  );
}
