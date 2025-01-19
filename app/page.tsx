import { menus } from "@/lib/menus";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <nav className="flex flex-col">
        {menus.map((item, i) => (
          <Link key={i} href={item.href} className="hover:underline  text-center py-2">
            {item.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
