import { dummyJsonUrl } from "@/lib/menus";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dummyjson",
  description: "Description dummyjson",
};

export default async function DummyjsonPage() {
  const response = await fetch(`${dummyJsonUrl}/posts?limit=10`);
  const data = await response.json();
  const posts = data.posts as { id: string; title: string; body: string }[];

  return (
    <div className="min-h-screen flex items-center justify-center flex-col">
      <h1>Dummyjson</h1>
      <div>
        {posts.map((item, i) => (
          <div key={i}>
            <Link href={`/dummyjson/${item.id}`} className="py-2 inline-block hover:underline">
              {item.title}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
