"use client";

import React from "react";
import { motion } from "motion/react";
import Image from "next/image";
import { OmdbSearchType } from "@/lib/types";

export default function OmdbCard({ item }: { item: OmdbSearchType }) {
  return (
    <motion.div
      style={{ background: `linear-gradient(to top, rgba(0,0,0,.9), rgba(0,0,0,.5)), url(${item?.Poster})` }}
      className="relative group rounded overflow-hidden"
      initial={{ scale: 0.7 }}
      animate={{ scale: 1 }}
    >
      <div className="z-10 -top-full opacity-0 group-hover:top-0 group-hover:opacity-100 absolute h-12 text-sm bg-gradient-to-b from-black to-[rgba(255,255,255,0)] w-full text-white flex justify-between p-2 transition-all duration-150">
        <div>{item?.Year}</div>
        <div className="border h-min px-2 rounded-full">{item?.Type}</div>
      </div>
      {/* <OmdbDetail imdbID={item.imdbID} /> */}
      <Image
        src={item.Poster.startsWith("https") ? item.Poster : "https://placehold.co/400x600.png"}
        width={500}
        height={500}
        alt={item.Title || "omdb image"}
        className="group-hover:object-contain group-hover:scale-95 h-72 w-full object-cover object-center transition-all duration-150"
        priority
      />
      <h3 className="text-white text-center p-2 min-h-20 flex items-center justify-center bg-gradient-to-t from-[rgba(0,0,0,.5)] to-[rgba(255,255,255,.1)]">
        {item.Title}
      </h3>
    </motion.div>
  );
}
