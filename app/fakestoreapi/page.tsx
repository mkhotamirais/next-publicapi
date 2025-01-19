import { fakeStoreApiUrl } from "@/lib/menus";
import { FsaProductType } from "@/lib/types";
import { Metadata } from "next";
import Image from "next/image";
import React from "react";

export const metadata: Metadata = {
  title: "Fakestoreapi",
  description: "Description fakestoreapi",
};

export default async function FakestoreapiPage() {
  const response = await fetch(`${fakeStoreApiUrl}/products`);
  const data = (await response.json()) as FsaProductType[];

  return (
    <div className="max-w-screen-xl mx-auto px-4 mb-12">
      <h1>Fakestoreapi</h1>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {data.map((item, i) => (
          <div key={i} className="shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-all">
            <figure className="h-64 border-b overflow-hidden p-6">
              <Image
                src={item.image}
                alt={item.title}
                width={200}
                height={200}
                className="w-full h-full object-center object-contain"
                priority
              />
            </figure>
            <div className="p-8">
              <h2>{item.title}</h2>
              <p>${item.price}</p>
              {/* <p>{item.description}</p> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
