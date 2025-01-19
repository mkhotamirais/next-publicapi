import { menus } from "@/lib/menus";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex mt-24 items-center justify-center">
      <div>
        <h1>Next Publicapi</h1>
        <nav className="flex flex-col">
          {menus
            .sort((a, b) => a.label.toLowerCase().localeCompare(b.label.toLowerCase()))
            .map((item, i) => (
              <Link key={i} href={item.href} className="hover:underline  text-center py-2">
                {item.label}
              </Link>
            ))}
        </nav>
      </div>
    </div>
  );
}
