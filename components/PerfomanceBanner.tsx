import { BannerContent } from "@/constants";
import Image from "next/image";

export default function PerformanceBanner() {
  return (
    <main className="w-full bg-slate-100 bg-cover bg-bottom py-20 lg:h-[350px] lg:py-0">
      <div className="grid h-full w-full grid-cols-1 place-content-center gap-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-0">
        {BannerContent.map((block) => (
          <div
            key={block.id}
            className="linear flex aspect-video h-[180px] flex-row flex-wrap items-center justify-center place-self-center rounded-xl bg-white p-8 text-center shadow-2xl transition duration-100 hover:scale-105 lg:h-[220px] lg:w-[250px]"
          >
            <Image
              src={block.icon}
              height={150}
              width={100}
              alt={block.alt}
            ></Image>
            <h1 className="w-full text-lg font-semibold capitalize">
              {block.title}
            </h1>
          </div>
        ))}
      </div>
    </main>
  );
}
