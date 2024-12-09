import { AboutContent } from "@/constants";
import Image from "next/image";

export default function About() {
  return (
    <div className="sectionPadding flex flex-col gap-16 lg:gap-0">
      {AboutContent.map((content, index) => (
        <div
          key={index}
          className="flex flex-col items-center lg:flex-row even:lg:flex-row-reverse"
        >
          <div className="flex flex-col items-center justify-center pb-6 text-center lg:items-start lg:p-8 lg:text-left">
            <h1 className="sectionHeader">{content.title}</h1>
            <p className="font-medium text-gray-500 lg:text-justify">
              {content.description}
            </p>
          </div>
          <Image
            src={content.image}
            height={200}
            width={700}
            alt={content.alt}
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
}
