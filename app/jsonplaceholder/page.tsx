import { jsonPlaceholderUrl } from "@/lib/menus";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jsonplaceholder",
  description: "Description jsonplaceholder",
};

export default async function JsonplaceholderPage() {
  const responseUsers = await fetch(`${jsonPlaceholderUrl}/users`);
  const users = (await responseUsers.json()) as { id: number; name: string }[];

  const responsePosts = await fetch(`${jsonPlaceholderUrl}/posts`);
  const posts = (await responsePosts.json()) as { id: number; title: string }[];

  const responseTodos = await fetch(`${jsonPlaceholderUrl}/todos`);
  const todos = (await responseTodos.json()) as { id: number; title: string }[];

  return (
    <div className="max-w-screen-xl mx-auto p-4">
      <h1>Jsonplaceholder</h1>
      <div>
        <h2>Users List</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-6 gap-2">
          {users.map((item, i) => (
            <div key={i} className="border rounded p-2">
              <h4>{item.name}</h4>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h2>Posts List</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-6 gap-2">
          {posts.map((item, i) => (
            <div key={i} className="border rounded p-2">
              <h4 className="text-sm">{item.title}</h4>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h2>Todo List</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-6 gap-2">
          {todos.map((item, i) => (
            <div key={i} className="border rounded p-2">
              <h4 className="text-sm">{item.title}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
