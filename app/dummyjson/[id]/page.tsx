import { dummyJsonUrl } from "@/lib/menus";

export default async function DummyJsonIdPage({ params }: { params: Promise<{ id: string }> }) {
  //   await new Promise((resolve) => setTimeout(resolve, 1000));
  const id = (await params).id;
  const response = await fetch(`${dummyJsonUrl}/posts/${id}`);
  const data = await response.json();

  return (
    <div className="min-h-screen max-w-lg mx-auto flex items-center justify-center px-2">
      <div className="text-center space-y-4">
        <h2>{data.title}</h2>
        <div className="mb-2 text-sm">
          <div>Tags: {data.tags.join(" - ")}</div>
          <div>
            Like: {data.reactions.likes} | Dislike: {data.reactions.dislikes}
          </div>
          <div>Views: {data.views}</div>
        </div>
        <p>{data.body}</p>
      </div>
    </div>
  );
}
