import Image from "next/image";
import React from "react";

function Partners() {
  return (
    <section
      className="relative  overflow-hidden py-14 xl:py-[100px] bg-black"
      id="Partners"
    >
      <div className="h-10 xl:h-32 bg-gradient-to-b from-black absolute top-0 left-0 w-full"></div>

      <div
        data-aos="zoom-out-up"
        className="lg:max-w-4xl xl:max-w-6xl md:max-w-2xl max-w-[380px] mx-auto"
      >
        <div className="flex flex-wrap gap-y-3 -mx-2 md:-mx-3">
          <div className="w-6/12 md:w-3/12 px-2 md:px-3">
            <div className="h-full bg-linear-bg p-[1px] rounded-[10px] transition hover:-translate-y-1">
              <div className="h-full bg-[#0F0F0F] grid place-content-center rounded-[10px] py-5 md:py-7 px-2">
                <Image
                  src="/images/brand-1.png"
                  alt="brand-logo"
                  width={80}
                  height={80}
                />
              </div>
            </div>
          </div>
          <div data-aos="zoom-out-up" className="w-6/12 md:w-3/12 px-2 md:px-3">
            <div className="h-full bg-linear-bg p-[1px] rounded-[10px] transition hover:-translate-y-1">
              <div className="h-full bg-[#0F0F0F] grid place-content-center rounded-[10px] py-5 md:py-7 px-2">
                <Image
                  src="/images/brand-2.png"
                  alt="brand-logo"
                  width={80}
                  height={80}
                />
              </div>
            </div>
          </div>
          <div data-aos="zoom-out-up" className="w-6/12 md:w-3/12 px-2 md:px-3">
            <div className="h-full bg-linear-bg p-[1px] rounded-[10px] transition hover:-translate-y-1">
              <div className="h-full bg-[#0F0F0F] grid place-content-center rounded-[10px] py-5 md:py-7 px-2">
                <Image
                  src="/images/brand-3.png"
                  alt="brand-logo"
                  width={80}
                  height={80}
                />
              </div>
            </div>
          </div>
          <div data-aos="zoom-out-up" className="w-6/12 md:w-3/12 px-2 md:px-3">
            <div className="h-full bg-linear-bg p-[1px] rounded-[10px] transition hover:-translate-y-1">
              <div className="h-full bg-[#0F0F0F] grid place-content-center rounded-[10px] py-5 md:py-7 px-2">
                <Image
                  src="/images/brand-4.png"
                  alt="brand-logo"
                  width={80}
                  height={80}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Partners;
