"use client";

import { useEffect, useState } from "react";

export default function NewsletterBanner() {
  const [email, setEmail] = useState("");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <div className="flex w-full flex-col items-center bg-white">
      <div className="w-full max-w-center py-24 md:px-40">
        <div className="relative h-[600px] w-full max-w-center overflow-hidden bg-mountain-sunset bg-cover bg-center bg-no-repeat md:rounded-[3rem]">
          <div className="absolute inset-0 z-0 h-full w-full bg-gradient-to-r from-black from-30% to-transparent to-70% opacity-40" />

          <div className="z-10 flex h-full w-full flex-col items-end justify-end gap-4 text-center md:items-start md:justify-center md:gap-12 lg:mx-8 lg:ml-20 lg:w-1/2 lg:text-left">
            <div className="z-10 flex flex-col gap-4">
              <h1 className="z-10 text-4xl font-bold text-white">
                Join Our Newsletter
              </h1>
              <p className="z-10 w-full text-base font-bold text-white lg:w-[420px]">
                Sign-up for our newsletter. Be the first one to receive the
                latest news from Road Way Delivery.
              </p>
            </div>
            <form className="z-10 mb-8 flex w-full flex-row items-center gap-2 p-4 md:mb-0 md:p-0">
              <input
                type="email"
                name="email"
                placeholder="Enter your email..."
                value={email}
                className="w-2/3 max-w-[480px] rounded-full px-6 py-2 text-base font-medium focus:placeholder:italic md:w-full"
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                type="button"
                className="text-nowrap w-1/3 rounded-full bg-accent-1 px-6 py-2 text-center text-base font-medium text-white md:w-auto"
              >
                Join Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
