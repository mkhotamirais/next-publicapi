import React from "react";
import CartBtn from "./cart-btn";
import Link from "next/link";

export default function SiskoLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className="h-16 sticky top-0 border-b z-50 bg-white">
        <div className="container h-full flex items-center justify-between">
          <Link href="/sisko" className="font-semibold text-xl">
            SISKO
          </Link>
          <nav>
            <CartBtn />
          </nav>
        </div>
      </header>
      <main className="container">{children}</main>
    </>
  );
}
