import React from "react";

function NewsLetter() {
  return (
    <section className="overflow-hidden relative bg-[url('/images/news-bg.png')] bg-cover bg-[top_center] py-24 text-white">
      <div className="h-10 xl:h-32 bg-gradient-to-b from-black absolute top-0 left-0 w-full"></div>

      <div className="lg:max-w-4xl xl:max-w-6xl md:max-w-2xl max-w-[380px] mx-auto">
        <div className="flex md:flex-row flex-col gap-2 items-center justify-center ">
          <div data-aos="fade-down" className="w-full lg:w-5/12 px-3">
            <h2 className="text-3xl md:text-4xl xl:text-5xl 2xl:text-[64px] font-bold ">
              Subscribe to our Newsletter
            </h2>
          </div>
          <div data-aos="fade-down" className="w-full lg:w-7/12 px-3">
            <div className="w-full">
              <div className="relative flex rounded-[10px] bg-black overflow-hidden">
                <input
                  type="text"
                  className="md:text-xl xl:text-2xl text-white bg-transparent w-full px-4"
                  placeholder="Email"
                />
                <button className="md:text-xl xl:text-2xl font-bold py-3 px-3 dm:px-[50px] xl:py-[22px] bg-linear-bg text-white">
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-6 xl:h-28 bg-gradient-to-t from-black absolute bottom-0 w-full"></div>
    </section>
  );
}

export default NewsLetter;
