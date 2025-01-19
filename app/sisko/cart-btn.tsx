import Link from "next/link";
import React from "react";
import { FaCartShopping } from "react-icons/fa6";

export default function CartBtn() {
  return (
    <div>
      <Link href="/sisko/cart" className="relative">
        <FaCartShopping size={24} />
        <div className="absolute text-xs bg-red-500/80 rounded-xl text-white -top-2 -right-2 px-1">10</div>
      </Link>
    </div>
  );
}
