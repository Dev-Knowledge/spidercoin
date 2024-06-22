"use client";
import React, { useState } from "react";

function RoadMap() {
  const [openTab, setOpenTab] = useState(1);

  return (
    <section
      id="roadmap"
      className="relative overflow-hidden text-white flex flex-col bg-[url('/images/roadmap-bg.png')] bg-cover bg-center bg-no-repeat gap-y-[100px] items-center justify-center h-[800px]   "
    >
      <div className="h-10 xl:h-32 bg-gradient-to-b from-black absolute top-0 left-0 w-full"></div>

      <div className="lg:max-w-4xl xl:max-w-6xl md:max-w-2xl max-w-[300px] mx-auto w-full">
        <div
          data-aos="zoom-out-down"
          className="text-center me-auto mb-14 xl:mb-32 2xl:mb-64"
        >
          <h2 className="text-3xl md:text-4xl xl:text-5xl 2xl:text-[64px] font-bold block">
            The Meme
          </h2>
          <h2 className="text-3xl md:text-4xl xl:text-5xl 2xl:text-[64px] font-bold inline-block rounded-xl border-t-[4px] border-r-[4px] border-primary px-4 py-1 md:py-3 lg:ml-[280px] xl:ml-[400px] 2xl:ml-[480px]">
            Spider Roadmap
          </h2>
        </div>
        <div className="flex lg:flex-row flex-col items-center gy-3 justify-center xl:justify-between gap-y-4">
          <div className="w-full max-w-[530px] pe-auto pe-lg-5">
            <div
              data-aos="zoom-out-down"
              className="bg-linear-bg p-[1px] rounded-[10px] shadow-[0_0_80px_0_rgba(255,255,255,0.4),0_0_20px_0_rgba(255,255,255,0.5)]"
            >
              <ul className="bg-[#040303] rounded-[10px] px-5 sm:px-[30px]">
                {[1, 2, 3, 4].map((tab) => (
                  <li
                    key={tab}
                    onClick={() => setOpenTab(tab)}
                    className={`cursor-pointer flex items-center justify-between py-4 xl:py-6 group border-b border-white ${
                      openTab === tab ? "active" : ""
                    }`}
                  >
                    <h5 className="text-xl md:text-2xl xl:text-[34px] font-bold !leading-[1.3] group-hover:text-[#ff7a00]  group-[.active]:text-[#ff7a00]">
                      Phase {tab}
                    </h5>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20.007 6.81607L4.23463 22.5884C3.45504 23.368 2.19108 23.368 1.41149 22.5884C0.631932 21.8089 0.631895 20.545 1.41141 19.7654L17.1819 3.99301H4.03494C2.9323 3.99301 2.03843 3.09915 2.03843 1.99651C2.03843 0.893866 2.9323 0 4.03494 0L21.5598 0C22.9075 0 24 1.0925 24 2.44017V19.9651C24 21.0677 23.1061 21.9616 22.0035 21.9616C20.9008 21.9616 20.007 21.0677 20.007 19.9651V6.81607Z"
                        className={`fill-white group-hover:"#ff7a00" ${
                          openTab === tab ? "#ff7a00" : ""
                        }`}
                      ></path>
                    </svg>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="w-full max-w-[430px]" data-aos="zoom-out-down">
            <div className="bg-linear-bg p-[1px] rounded-[10px] shadow-[0_0_80px_0_rgba(255,255,255,0.4),0_0_20px_0_rgba(255,255,255,0.5)]">
              {[1, 2, 3, 4].map((tab) => (
                <div
                  key={tab}
                  className={`bg-[#040303] rounded-[10px] p-5 md:p-[30px] ${
                    openTab === tab ? "block" : "hidden"
                  }`}
                >
                  <h4 className="text-xl md:text-2xl xl:text-[40px] text-[#FF7A00] font-bold border-b border-[#FF7A00] mb-4 md:mb-7 pb-3 md:pb-5">
                    Phase {tab}
                  </h4>
                  <ul className="list-disc ps-4">
                    {[
                      "Build websites",
                      "Build Social (Telegram, X, Channel)",
                      tab === 3 || tab === 4
                        ? "Build Dapp & INO Trump Meme Coin"
                        : null,

                      "Audit Smart Contract",
                      tab === 2 || tab === 3 || tab === 4
                        ? "Presale on PinkSale"
                        : null,
                    ]
                      .filter(Boolean)
                      .map((task, index) => (
                        <li
                          key={index}
                          className="text-lg md:text-xl xl:text-[30px] !leading-[1.3] mb-3"
                        >
                          {task}
                        </li>
                      ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="h-10 xl:h-32 bg-gradient-to-t from-black absolute bottom-0 left-0 w-full"></div>
    </section>
  );
}

export default RoadMap;
