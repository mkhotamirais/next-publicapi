import { siskoUrl } from "@/lib/menus";
import { SiskoProductType } from "@/lib/types";
import Image from "next/image";
// import { QueryPage } from "./product-query";

export default async function ProductList({ sp }: { sp: Record<string, string> }) {
  const params = new URLSearchParams(sp).toString();

  const response = await fetch(`${siskoUrl}/${sp.type || "hijja"}/product?${params}`);
  const data = await response.json();
  const aaData = data?.aaData as SiskoProductType[];

  return (
    <div>
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-2 py-3">
        {aaData.map((item, i) => (
          <div key={i} className="group flex flex-col relative rounded overflow-hidden shadow">
            <Image
              src={item.photo}
              width={500}
              height={500}
              alt="sisko image"
              className="object-center object-cover h-48"
              priority
            />
            <div className="p-3 grow flex flex-col">
              <h3 className="font-bold grow text-muted-foreground">{item.name}</h3>
              <h4 className="text-xl">Rp{item.price}</h4>
            </div>
            {/* <ProductCartBtnList item={item} /> */}
            {/* <ProductDetail id={item.id} /> */}
          </div>
        ))}
      </div>
      {/* <div className="mb-4 flex justify-end">
        <QueryPage total_page={data?.last_page} />
      </div> */}
    </div>
  );
}
