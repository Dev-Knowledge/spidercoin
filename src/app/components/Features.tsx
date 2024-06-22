import Image from "next/image";
import React from "react";

function Features() {
  return (
    <section
      id="Features"
      className="relative lg:h-[1050px] h-[1600px] md:h-[1200px] bg-[url('/images/feature-bg.jpg')] bg-cover bg-no-repeat text-white "
    >
      <div className="h-10 xl:h-32 bg-gradient-to-b from-black absolute left-0 w-full"></div>

      <div className="lg:max-w-4xl xl:max-w-6xl md:max-w-2xl max-w-[380px] mx-auto py-10">
        <div className="flex lg:flex-row flex-col md:justify-between items-center -mx-3 gap-y-4">
          <div className="relative w-full lg:w-[60%] px-3 text-center sm:text-start">
            <h2
              data-aos="zoom-in-left"
              className="absolute top-5 text-3xl md:text-4xl xl:text-5xl 2xl:text-[64px] font-bold mb-5 xl:mb-10"
            >
              Features
            </h2>
            <p
              data-aos="zoom-in-left"
              className="mt-24 lg:text-xl !leading-[1.3] mb-6 md:mb-10"
            >
              Now, let me tell you the truth about this token. It’s entirely
              worthless, and that’s a fact. We’re not even trying to pretend
              that this is a serious investment opportunity.
            </p>
            <div className="flex flex-col jucstify-center items-center gap-4 md:gap-6">
              <div
                data-aos="zoom-in-right"
                className="group bg-linear-bg p-[1px] rounded-[10px] transition hover:-translate-y-1"
              >
                <div className="text-center  sm:text-start flex flex-col sm:flex-row items-center gap-3 md:gap-5 bg-[#1F1F1D] rounded-[10px] p-3.5 md:px-6 md:py-5">
                  <div className="flex-shrink-0">
                    <Image
                      src="/images/feat-1.png"
                      className="transition"
                      alt=""
                      width={80}
                      height={80}
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl xl:text-2xl font-semibold !leading-none uppercase text-white mb-3">
                      BUy
                    </h3>
                    <p className="!leading-[1.3]">
                      Trump Meme Coin Team has proven experience delivering safe
                      crypto projects with the marketing connections that can
                      rocket us to the moon.
                    </p>
                  </div>
                </div>
              </div>
              <div
                data-aos="zoom-in-right"
                className="group bg-linear-bg p-[1px] rounded-[10px] transition hover:-translate-y-1"
              >
                <div className="text-center sm:text-start flex flex-col sm:flex-row items-center gap-3 md:gap-5 bg-[#1F1F1D] rounded-[10px] p-3.5 md:px-6 md:py-5">
                  <div className="flex-shrink-0">
                    <Image
                      src="/images/feat-1.png"
                      className="transition"
                      alt=""
                      width={80}
                      height={80}
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl xl:text-2xl font-semibold !leading-none uppercase text-white mb-3">
                      Staking
                    </h3>
                    <p className="!leading-[1.3]">
                      Trump Meme Coin Team has proven experience delivering safe
                      crypto projects with the marketing connections that can
                      rocket us to the moon.
                    </p>
                  </div>
                </div>
              </div>
              <div
                data-aos="zoom-in-right"
                className="group bg-linear-bg p-[1px] rounded-[10px] transition hover:-translate-y-1"
              >
                <div className="text-center sm:text-start flex flex-col sm:flex-row items-center gap-3 md:gap-5 bg-[#1F1F1D] rounded-[10px] p-3.5 md:px-6 md:py-5">
                  <div className="flex-shrink-0">
                    <Image
                      src="/images/feat-1.png"
                      className="transition"
                      alt=""
                      width={80}
                      height={80}
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl xl:text-2xl font-semibold !leading-none uppercase text-white mb-3">
                      NFTS
                    </h3>
                    <p className="!leading-[1.3]">
                      Trump Meme Coin Team has proven experience delivering safe
                      crypto projects with the marketing connections that can
                      rocket us to the moon.
                    </p>
                  </div>
                </div>
              </div>
              <div
                data-aos="zoom-in-right"
                className="group bg-linear-bg p-[1px] rounded-[10px] transition hover:-translate-y-1"
              >
                <div className="text-center sm:text-start flex flex-col sm:flex-row items-center gap-3 md:gap-5 bg-[#1F1F1D] rounded-[10px] p-3.5 md:px-6 md:py-5">
                  <div className="">
                    <Image
                      src="/images/feat-1.png"
                      className="transition"
                      alt=""
                      width={80}
                      height={80}
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl xl:text-2xl font-semibold !leading-none uppercase text-white mb-3">
                      YouTube
                    </h3>
                    <p className="!leading-[1.3]">
                      Trump Meme Coin Team has proven experience delivering safe
                      crypto projects with the marketing connections that can
                      rocket us to the moon.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div data-aos="zoom-in-right" className="w-full lg:w-6/12">
            <div className="">
              <Image
                src="/images/feature-hero.png"
                className="mx-auto lg:w-[300px]"
                alt=""
                width={350}
                height={300}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="h-10 xl:h-32 bg-gradient-to-t from-black absolute bottom-0 left-0 w-full"></div>
    </section>
  );
}

export default Features;
