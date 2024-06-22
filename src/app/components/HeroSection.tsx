import Image from "next/image";
import Header from "./Header";

function HeroSection() {
  return (
    <section className="overflow-hidden h-[600px]  xl:h-[700px] bg-[url('/images/hero-bg-2.jpg')] bg-cover bg-center bg-no-repeat">
      <Header />
      <article
        data-aos="fade-up"
        className="z-10 h-screen lg:max-w-4xl xl:max-w-6xl md:max-w-2xl max-w-[380px] mx-auto text-white flex md:flex-row flex-col items-start justify-between py-10"
      >
        <div className="flex flex-col items-center justify-center gap-y-1 w-full md:w-1/2">
          <p className="text-lg lg:text-xl w-full text-white/80 md:text-left text-center ">
            {"Contract Address : 0xaa078...e4964"}
          </p>
          <h2 className="text-[40px] md:text-5xl lg:text-6xl xl:text-[80px] font-bold !leading-[1.2] md:text-left text-center  ">
            {"LET'$ MAKE MEMES GREAT AGAIN"}
          </h2>
          <p className="text-lg lg:text-xl !leading-[160%] md:text-left text-center ">
            SPIDERCOIN is a community made and owned Cryptocurrency project.
          </p>
          <div className="w-full flex items-center justify-center md:justify-start gap-5">
            <a
              href="#"
              className="text-lg md:text-xl 2xl:text-2xl font-semibold !leading-tight capitalize bg-linear-bg text-white px-4 py-2.5 sm:px-6 sm:py-4 rounded-md lg:rounded-[10px] border-0"
            >
              Buy Now
            </a>
            <a
              href="#"
              className="text-lg md:text-xl 2xl:text-2xl font-semibold !leading-tight capitalize bg-black border border-white text-white px-4 py-2.5 sm:px-6 sm:py-4 rounded-md lg:rounded-[10px]"
            >
              Join Telegram
            </a>
          </div>
        </div>
        <div
          data-aos="fade-right"
          className="w-full md:w-1/2 flex justify-center items-center md:items-start h-screen "
        >
          <Image
            className="md:hidden"
            src="/images/hero-spiderman.png"
            alt="hero"
            width={200}
            height={220}
          />
          <Image
            className="lg:hidden hidden md:block"
            src="/images/hero-spiderman.png"
            alt="hero"
            width={300}
            height={220}
          />
          <Image
            className="hidden lg:block"
            src="/images/hero-spiderman.png"
            alt="hero"
            width={350}
            height={220}
          />
        </div>
      </article>
      <div className="h-10 xl:h-32 bg-gradient-to-t from-black absolute xl:-bottom-24 md:bottom-0 -bottom-20 left-0 w-full"></div>
    </section>
  );
}

export default HeroSection;
