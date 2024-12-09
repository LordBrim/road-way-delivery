import Image from "next/image";

export default function Steps() {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <div className="spacing-horizontal spacing-vertical w-full max-w-center flex-col items-center justify-center gap-24">
        <h1 className="text-center text-4xl font-bold">
          Roadway Delivery
          <br />
          <span className="text-accent-1">Step-by-Step</span>
        </h1>
        <div className="flex w-full flex-col justify-center gap-8 md:flex-row md:gap-12">
          {StepsData.map(({ number, title, desc, src, alt }, index) => (
            <Step
              key={index}
              number={number}
              title={title}
              desc={desc}
              src={src}
              alt={alt}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

type StepProps = {
  number: number;
  title: string;
  desc: string;
  src: string;
  alt: string;
};

function Step({ number, title, desc, src, alt }: StepProps) {
  return (
    <div className="flex w-full max-w-[420px] flex-col gap-4 md:gap-16 md:[&:nth-of-type(2)]:mt-[100px] md:[&:nth-of-type(3)]:mt-[200px]">
      <div className="relative w-full max-w-[420px] rounded-2xl bg-gray-500 shadow-lg">
        <div className="h-full w-full overflow-hidden rounded-2xl">
          <Image src={src} alt={alt} width={1000} height={1000} />
        </div>
        <div className="-bottom-10 -left-10 hidden h-20 w-20 items-center justify-center rounded-t-full rounded-bl-full bg-accent-1 md:absolute md:flex">
          <p className="text-4xl font-bold text-white">{number}</p>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex h-10 w-10 items-center justify-center rounded-t-full rounded-bl-full bg-accent-1 md:hidden">
          <p className="text-lg font-bold text-white">{number}</p>
        </div>
        <h1 className="text-xl font-bold">{title}</h1>
        <p className="text-xl">{desc}</p>
      </div>
    </div>
  );
}

const StepsData = [
  {
    number: 1,
    title: "Set Pickup & Destination",
    desc: "Just enter your pickup and delivery locations, and we’ll find the fastest, most cost-effective route for your items.",
    src: "/rwd-step-1.jpg",
    alt: "Step 1",
  },
  {
    number: 2,
    title: "Track in Real Time",
    desc: "Stay updated with real-time tracking, from pickup to drop-off. Never lose sight of your delivery again.",
    src: "/rwd-step-2.jpg",
    alt: "Step 2",
  },
  {
    number: 3,
    title: "Confirm Delivery",
    desc: "Once delivered, you'll receive instant confirmation and proof of delivery right in the app.",
    src: "/rwd-step-3.jpg",
    alt: "Step 3",
  },
];
