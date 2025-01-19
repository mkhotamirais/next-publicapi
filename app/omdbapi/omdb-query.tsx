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

// export const OmdbType = () => {
//   const searchParams = useSearchParams();
//   const pathname = usePathname();
//   const { replace } = useRouter();

//   const onChange = useDebouncedCallback((e: string) => {
//     const params = new URLSearchParams(searchParams);
//     if (e) {
//       if (e === "none") {
//         params.delete("type");
//       } else params.set("type", e);
//     } else params.delete("type");
//     replace(`${pathname}?${params.toString()}`);
//   }, 300);

//   return (
//     <select name="obdbtype" id="omdbtype" title="omdbtype" defaultValue={searchParams.get("type") ?? ""}>
//       <option value="none">Type</option>
//       <option value="movie">Movie</option>
//       <option value="series">Series</option>
//       <option value="episode">Episode</option>
//     </select>
//   );
// };

// export const OmdbY = () => {
//   const searchParams = useSearchParams();
//   const pathname = usePathname();
//   const { replace } = useRouter();

//   const onChange = useDebouncedCallback((e: string) => {
//     const params = new URLSearchParams(searchParams);
//     if (e) {
//       if (e === "none") {
//         params.delete("y");
//       } else params.set("y", e);
//     } else params.delete("y");
//     replace(`${pathname}?${params.toString()}`);
//   }, 300);

//   const tahun = [];
//   const tahunIni = new Date().getFullYear();
//   for (let i = tahunIni; i >= 1990; i--) {
//     tahun.push(i.toString());
//   }
//   return (
//     <Select onValueChange={onChange}>
//       <SelectTrigger className="bg-slate-500 border-none">
//         <SelectValue placeholder="Year" />
//       </SelectTrigger>
//       <SelectContent>
//         <SelectItem value="none">Year</SelectItem>
//         {tahun.map((item, i) => (
//           <SelectItem key={i} value={item}>
//             {item}
//           </SelectItem>
//         ))}
//       </SelectContent>
//     </Select>
//   );
// };

// export const OmdbPlot = () => {
//   const searchParams = useSearchParams();
//   const pathname = usePathname();
//   const { replace } = useRouter();

//   const onChange = useDebouncedCallback((e: string) => {
//     const params = new URLSearchParams(searchParams);
//     if (e) {
//       if (e === "none") {
//         params.delete("plot");
//       } else params.set("plot", e);
//     } else params.delete("plot");
//     replace(`${pathname}?${params.toString()}`);
//   }, 300);

//   return (
//     <Select onValueChange={onChange}>
//       <SelectTrigger className="bg-slate-500 border-none">
//         <SelectValue placeholder="Plot" />
//       </SelectTrigger>
//       <SelectContent>
//         <SelectItem value="none">Plot</SelectItem>
//         <SelectItem value={"short"}>Short</SelectItem>
//         <SelectItem value={"full"}>Full</SelectItem>
//       </SelectContent>
//     </Select>
//   );
// };
