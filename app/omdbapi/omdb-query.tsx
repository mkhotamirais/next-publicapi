"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

export const OmdbSearch = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const onChange = useDebouncedCallback((e: string) => {
    const params = new URLSearchParams(searchParams);
    if (e) {
      params.set("s", e);
    } else params.delete("s");
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <input
      defaultValue={searchParams?.get("s") as string}
      placeholder="Search movie.."
      onChange={(e) => onChange(e.target.value)}
      className="py-2 px-4 border border-slate-500 rounded-md focus:outline-none"
    />
  );
};

export const OmdbType = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const onChange = useDebouncedCallback((e: string) => {
    const params = new URLSearchParams(searchParams);
    if (e) {
      if (e === "none") {
        params.delete("type");
      } else params.set("type", e);
    } else params.delete("type");
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <select
      name="obdbtype"
      id="omdbtype"
      title="omdbtype"
      defaultValue={searchParams.get("type") ?? ""}
      onChange={(e) => onChange(e.target.value)}
      className="py-2 px-4 border border-slate-500 rounded-md focus:outline-none"
    >
      <option value="none">Type</option>
      <option value="movie">Movie</option>
      <option value="series">Series</option>
      <option value="episode">Episode</option>
    </select>
  );
};
