"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

export const QuerySearch = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const onChage = useDebouncedCallback((e: string) => {
    const params = new URLSearchParams(searchParams);
    if (e) {
      params.set("search_name", e);
    } else params.delete("search_name");
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <input
      defaultValue={searchParams?.get("search_name") as string}
      placeholder="Search here.."
      onChange={(e) => onChage(e.target.value)}
      className="py-2 px-4 border border-slate-500 rounded-md focus:outline-none"
    />
  );
};

export function QuerySorting() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const onChange = (e: string) => {
    const params = new URLSearchParams(searchParams);
    if (e) {
      if (e === "none") {
        params.delete("sorting");
      } else params.set("sorting", e);
    } else params.delete("sorting");
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <select
      name="siskosorting"
      id="siskosorting"
      title="siskosorting"
      defaultValue={searchParams.get("sorting") ?? ""}
      onChange={(e) => onChange(e.target.value)}
      className="py-2 px-4 border border-slate-500 rounded-md focus:outline-none"
    >
      <option value="none">Sort</option>
      <option value="Lates">Latest</option>
      <option value="cheapest">Cheapest</option>
      <option value="expensive">Expensive</option>
    </select>
  );
}

export function QueryType() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const onChange = (e: string) => {
    const params = new URLSearchParams(searchParams);
    if (e) {
      if (e === "none") {
        params.delete("type");
      } else params.set("type", e);
    } else params.delete("type");
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <select
      name="siskotype"
      id="siskotype"
      title="siskotype"
      defaultValue={searchParams.get("type") ?? ""}
      onChange={(e) => onChange(e.target.value)}
      className="py-2 px-4 border border-slate-500 rounded-md focus:outline-none"
    >
      <option value="none">Type</option>
      <option value="hijja">Hijja</option>
      <option value="demo">Demo</option>
    </select>
  );
}

export function QueryPage({ total_page }: { total_page: string }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const onChange = (e: string) => {
    const params = new URLSearchParams(searchParams);
    if (e) {
      if (e === "none") {
        params.delete("page");
      } else params.set("page", e);
    } else params.delete("page");
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <select
      name="siskopage"
      id="siskopage"
      title="siskopage"
      defaultValue={searchParams.get("page") ?? ""}
      onChange={(e) => onChange(e.target.value)}
      className="py-2 px-4 border border-slate-500 rounded-md focus:outline-none"
    >
      {[...Array(total_page)].map((_, i) => (
        <option key={i} value={i + 1}>
          Page {i + 1}
        </option>
      ))}
    </select>
  );
}
