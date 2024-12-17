"use client";

import { Marquee } from "@devnomic/marquee";
import Image from "next/image";
import DownloadBtns from "./Downloads/DownloadBtns";

export default function Hero() {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <div className="spacing-horizontal flex h-full w-full max-w-center flex-col items-center justify-between gap-40 overflow-hidden px-0 md:flex-row">
        <div className="flex flex-row items-center justify-center gap-8">
          <div className="h-full max-h-[1000px] w-[320px]">
            <Marquee
              fade={false}
              direction="up"
              reverse={false}
              pauseOnHover={false}
              className="animate-marquee-up [--duration:20s]"
              innerClassName=""
            >
              {MockupsData1.map(({ src, alt }, index) => (
                <div
                  key={index}
                  className="h-[673px] w-[320px] overflow-hidden rounded-[40px] border-8 border-black bg-gray-100"
                >
                  <Image src={src} alt={alt} width={1000} height={1000} />
                </div>
              ))}
            </Marquee>
          </div>
          <div className="h-full max-h-[1000px] w-[320px]">
            <Marquee
              fade={false}
              direction="up"
              reverse={false}
              pauseOnHover={false}
              className="animate-marquee-up gap-[1rem] [--duration:40s]"
              innerClassName="gap-[1rem] [--gap:1rem]"
            >
              {MockupsData2.map(({ src, alt }, index) => (
                <div
                  key={index}
                  className="h-[673px] w-[320px] overflow-hidden rounded-[40px] border-8 border-black bg-gray-100"
                >
                  <Image src={src} alt={alt} width={1000} height={1000} />
                </div>
              ))}
            </Marquee>
          </div>
        </div>

        <div className="flex w-full max-w-[730px] flex-col gap-12">
          <h1 className="text-5xl font-bold">
            Where There’s A Road,
            <br />
            <span className="text-accent-1">There’s A Way</span>
          </h1>
          <div className="flex flex-col gap-6">
            <p className="w-full max-w-[570px]">
              Have your package delivered safe and sound to any location
              connected with a road. Available on Android.
            </p>
          </div>
          <DownloadBtns />
        </div>
      </div>
    </div>
  );
}

const MockupsData1 = [
  {
    src: "/rwd-splash.jpg",
    alt: "Splash Screen",
  },
  {
    src: "/rwd-splash.jpg",
    alt: "Home Screen",
  },
  {
    src: "/rwd-splash.jpg",
    alt: "Cart Screen",
  },
];
const MockupsData2 = [
  {
    src: "/rwd-splash.jpg",
    alt: "Splash Screen",
  },
  {
    src: "/rwd-splash.jpg",
    alt: "Home Screen",
  },
  {
    src: "/rwd-splash.jpg",
    alt: "Cart Screen",
  },
];
