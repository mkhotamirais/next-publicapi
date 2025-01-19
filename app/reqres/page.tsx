import { reqresUrl } from "@/lib/menus";
import { ReqresUserType } from "@/lib/types";
import Image from "next/image";

export default async function ReqresPage() {
  const response = await fetch(`${reqresUrl}/users`);
  const data = await response.json();
  const users = data.data as ReqresUserType[];

  return (
    <div className="max-w-screen-lg mx-auto">
      <h1>Reqres</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        {users.map((user) => (
          <div key={user.id} className="">
            <Image src={user.avatar} alt={user.first_name} width={200} height={200} />
            <h3>
              {user.first_name} {user.last_name}
            </h3>
            {/* <p>{user.email}</p> */}
          </div>
        ))}
      </div>
    </div>
  );
}
