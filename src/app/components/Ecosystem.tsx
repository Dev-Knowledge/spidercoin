import Image from "next/image";

function Ecosystem() {
  return (
    <section
      className="relative h-screen flex items-center justify-center bg-[url('/images/eco-bg.png')] bg-cover bg-no-repeat bg-[top_right] py-10 md:py-20 2xl:pb-[100px]"
      id="Ecosystem"
    >
      <div className="h-10 xl:h-32 bg-gradient-to-b from-black absolute top-0 left-0 w-full"></div>

      <div className="lg:max-w-4xl xl:max-w-6xl md:max-w-2xl max-w-[380px] mx-auto text-white">
        <div className="w-full flex justify-center items-center -mx-3 ">
          <div className="w-full  text-center ">
            <h2
              data-aos="zoom-in"
              className="text-3xl md:text-4xl xl:text-5xl 2xl:text-[64px] font-bold mb-5 xl:mb-10"
            >
              Big Frog Ecosystem
            </h2>
            <p
              data-aos="zoom-in"
              className="lg:text-xl !leading-[1.3] mb-4 md:mb-7"
            >
              Pepefine is a Pepe theme meme coin designed to offer the benefits
              that other meme coins don’t give to its community.
            </p>
            <div
              data-aos="zoom-in"
              className="flex md: flex-wrap items-center justify-center md:justify-center gap-3 xl:gap-5"
            >
              <a
                href="#"
                className="text-sm sm:text-base xl:text-xl 2xl:text-2xl font-semibold !leading-tight capitalize bg-linear-bg text-white px-3 sm:px-6 py-4 rounded-md lg:rounded-[10px]"
              >
                Buy NFTs
              </a>
              <a
                href="#"
                className="text-sm sm:text-base xl:text-xl 2xl:text-2xl font-semibold !leading-tight capitalize bg-linear-bg text-white px-3 sm:px-6 py-4 rounded-md lg:rounded-[10px]"
              >
                Buy Gaming
              </a>
              <a
                href="#"
                className="text-sm sm:text-base xl:text-xl 2xl:text-2xl font-semibold !leading-tight capitalize bg-linear-bg text-white px-3 sm:px-6 py-4 rounded-md lg:rounded-[10px]"
              >
                Buy Decentralized Finance
              </a>
              <a
                href="#"
                className="text-sm sm:text-base xl:text-xl 2xl:text-2xl font-semibold !leading-tight capitalize bg-linear-bg text-white px-3 sm:px-6 py-4 rounded-md lg:rounded-[10px]"
              >
                Buy Governance
              </a>
              <a
                href="#"
                className="text-sm sm:text-base xl:text-xl 2xl:text-2xl font-semibold !leading-tight capitalize bg-linear-bg text-white px-3 sm:px-6 py-4 rounded-md lg:rounded-[10px]"
              >
                Buy Blockchain
              </a>
              <a
                href="#"
                className="text-sm sm:text-base xl:text-xl 2xl:text-2xl font-semibold !leading-tight capitalize bg-linear-bg text-white px-3 sm:px-6 py-4 rounded-md lg:rounded-[10px]"
              >
                Buy Community
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="h-10 xl:h-32 bg-gradient-to-t from-black absolute bottom-0 w-full"></div>
    </section>
  );
}

export default Ecosystem;
