import { jikanAnimeUrl } from "@/lib/menus";
import { AnimeListData } from "@/lib/types";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Jikananime",
  description: "Description jikananime",
};

export default async function JikananimePage() {
  const response = await fetch(`${jikanAnimeUrl}/top/anime`);
  const data = await response.json();
  // console.log(data);

  return (
    <div className="max-w-screen-xl mx-auto p-4">
      <h1>Jikananime</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-6 gap-2">
        {data?.data?.map((item: AnimeListData) => (
          <div key={item.mal_id} className="border rounded">
            <figure className="h-72">
              <Image
                src={item.images.jpg.image_url}
                width={500}
                height={500}
                alt="jikan image"
                className="w-full h-full object-cover object-center"
                priority
              />
            </figure>
            <div className="px-2 text-center">
              <h3>{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
