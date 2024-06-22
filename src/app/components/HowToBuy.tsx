import Image from "next/image";

function HowToBuy() {
  return (
    <section
      id="HowToBuy"
      className="relative overflow-hidden lg:h-[850px] md:h-[900px] bg-[url('/images/HTB-bg.jpg')] bg-cover bg-no-repeat bg-[top_right] py-10 md:py-20 2xl:pb-[100px]"
    >
      <div className="h-10 xl:h-32 bg-gradient-to-b from-black absolute top-0 left-0 w-full"></div>

      <div className="flex  items-center justify-center text-white lg:max-w-4xl xl:max-w-6xl md:max-w-2xl max-w-[380px] mx-auto">
        <div className="flex lg:flex-row flex-col justify-between items-center -mx-3 gap-y-4 ">
          <div
            data-aos="zoom-in"
            className="w-full lg:w-6/12 xl:w-5/12 md:w-[300px] px-3"
          >
            <div className="about-c-img">
              <Image
                src="/images/HTB-hero.png"
                className="mx-auto w-3/5 lg:w-auto"
                alt=""
                width={500}
                height={500}
              />
            </div>
          </div>
          <div data-aos="zoom-in" className="w-full lg:w-6/12 xl:w-7/12 px-3">
            <h2 className="text-3xl md:text-4xl xl:text-5xl 2xl:text-[64px] font-bold mb-5 xl:mb-10">
              How to Buy
            </h2>
            <p className="lg:text-xl !leading-[1.3] mb-4 md:mb-7">
              The Trump token Trump Meme Coin is easy to buy
            </p>
            <p className="lg:text-xl !leading-[1.3] mb-4 lg:mb-10">
              We&apos;ve created YouTube tutorials to show you can buy Trump on
              Pancakeswap, but we are also available on several great crypto
              exchanges!
            </p>
            <h6 className="text-xl md:text-2xl xl:text-[28px] !leading-[1.3] mb-4 lg:mb-9 text-[#ff7a00]">
              {"6% Buy pr % Sell Silppage for PancakeSwap."}
            </h6>
            <div className="grid gap-4 md:gap-6 mb-4 md:mb-10 xl:mb-12">
              <div className="bg-linear-bg p-0.5 rounded-[10px]">
                <div className="flex items-center gap-5 bg-[#1F1F1D] rounded-[10px] px-3 md:px-6 py-3.5 md:py-[18px]">
                  <div className="flex-shrink-0">
                    <Image
                      src="/images/guide-1.png"
                      alt=""
                      width={30}
                      height={30}
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="md:text-xl xl:text-2xl font-semibold !leading-none uppercase text-white">
                      Buy with Trust wallet (Video)
                    </h3>
                  </div>
                </div>
              </div>
              <div className="bg-linear-bg p-0.5 rounded-[10px]">
                <div className="flex items-center gap-5 bg-[#1F1F1D] rounded-[10px] px-3 md:px-6 py-3.5 md:py-[18px]">
                  <div className="flex-shrink-0">
                    <Image
                      src="/images/guide-2.png"
                      alt=""
                      width={30}
                      height={30}
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="md:text-xl xl:text-2xl font-semibold !leading-none uppercase text-white">
                      Buy with Metamask (Video)
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3 sm:gap-5">
              <a
                href="#"
                className="text-sm sm:text-base xl:text-xl 2xl:text-2xl font-semibold !leading-tight capitalize bg-linear-bg text-white px-4 py-3 md:px-6 md:py-4 rounded-md lg:rounded-[10px]"
              >
                Buy PancakeSwap
              </a>
              <a
                href="#"
                className="text-sm sm:text-base xl:text-xl 2xl:text-2xl font-semibold !leading-tight capitalize bg-linear-bg text-white px-4 py-3 md:px-6 md:py-4 rounded-md lg:rounded-[10px]"
              >
                Buy Gate.io
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="h-10 xl:h-32 bg-gradient-to-t from-black absolute bottom-0 w-full"></div>
    </section>
  );
}

export default HowToBuy;
