import { mediaStackUrl } from "@/lib/menus";
import Link from "next/link";
import Image from "next/image";
import moment from "moment";
import { MsNewsType } from "@/lib/types";

export const apiKey = process.env.MEDIASTACK_API_KEY;

export default async function MediastackPage() {
  const response = await fetch(`${mediaStackUrl}?access_key=${apiKey}`);
  const data = await response.json();
  const news = data.data as MsNewsType[];

  return (
    <div className="max-w-screen-xl mx-auto p-4">
      <h1>Mediastack</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 gap-y-6 py-4">
        {news.map((item: MsNewsType, i: number) => (
          <div key={i} className="flex flex-col rounded overflow-hidden space-y-2">
            <Image
              src={item.image ?? "https://placehold.co/400x600/png"}
              width={500}
              height={500}
              alt="mediastack image"
              className="object-center object-cover h-48"
              priority
            />
            <div className="space-y-2 flex flex-col grow">
              <Link href={item.url} className="hover:underline">
                <h2 className="text-xl font-bold">
                  {item.title.substring(0, 50)}
                  {item.title.length > 75 ? ".." : ""}
                </h2>
              </Link>
              <div>
                <div className="text-xs bg-blue-500 py-1 px-3 rounded-xl text-white w-fit">{item.category}</div>
              </div>

              <div>
                <p className="text-xs text-muted-foreground">
                  Author: {item.author ?? ""} - {moment(item.published_at).fromNow()}
                </p>
                <p className="text-xs text-muted-foreground">
                  Source: {item.source} - {item.country} - {item.language}
                </p>
              </div>
              <p className="text-sm grow">{item.description.substring(0, 200)}</p>
              <Link href={item.url} className="text-blue-500 hover:underline">
                Read
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
