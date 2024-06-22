import Image from "next/image";
import React from "react";

function AboutUs() {
  return (
    <section
      id="aboutUs"
      className="overflow-hidden relative h-[1000px] md:h-[1200px] lg:h-[900px] bg-[url('/images/about-bg.jpg')] bg-cover bg-center bg-no-repeat"
    >
      <div className="h-10 xl:h-32 bg-gradient-to-b from-black absolute left-0 w-full"></div>
      <div
        data-aos="zoom-in-down"
        className="flex lg:flex-row flex-col justify-between items-center gap-4 text-white lg:max-w-4xl xl:max-w-6xl md:max-w-2xl max-w-[350px] mx-auto py-10"
      >
        <div className="w-full lg:w-5/12 px-3">
          <div className="about-c-img">
            <Image
              src="/images/about-hero.png"
              className="mx-auto  lg:w-[300px]"
              alt=""
              width={500}
              height={500}
            />
          </div>
        </div>
        <div className=" relative w-full lg:w-6/12 px-3 text-center md:text-start">
          <h2 className="absolute top-5 text-3xl md:text-4xl xl:text-5xl 2xl:text-[64px] font-bold  xl:mb-10 ">
            About Us
          </h2>
          <p className="lg:text-xl !leading-[1.4] mb-4 md:mb-9 mt-24">
            First of all, let’s talk about taxes. Zero, nada, zilch. That’s
            right, there are NO TAXES on buying or selling the TRUMP ERC20
            token. You know who loves that? Everyone. Because nobody likes
            taxes.
          </p>
          <p className="lg:text-xl !leading-[1.4] mb-4 lg:mb-9">
            And let me tell you, we’re not stopping there. We renounced the
            token at launch and burned the liquidity tokens, so you know it’s
            the real deal. We’re not messing around here, folks.
          </p>
          <p className="lg:text-xl !leading-[1.4] mb-4 lg:mb-12">
            Now, some people might try to tell you that this token was stealth
            launched. And you know what I say to that? Fake news. We didn’t need
            to stealth launch this token because everyone already knows it’s the
            best.
          </p>
          <div className="flex gap-4 w-full justify-center md:justify-start">
            <button className="text-sm sm:text-base md:text-xl xl:text-2xl font-semibold leading-tight capitalize bg-linear-bg text-white px-3 sm:px-4 py-2 sm:py-2.5 md:px-6 md:py-4 rounded-md lg:rounded-[10px] border-0">
              Contract Address : 0xaa078...e4964
            </button>
          </div>
        </div>
      </div>
      <div className="h-10 xl:h-32 bg-gradient-to-t from-black absolute bottom-0 left-0 w-full"></div>
    </section>
  );
}

export default AboutUs;
