import { FaFacebook, FaGoogle, FaDiscord } from "react-icons/fa";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="overflow-hidden text-center py-5 md:py-10 2xl:py-12 bg-black">
      <div className="container">
        <div
          data-aos="zoom-out"
          className="row justify-between items-center gap-y-4 -mx-3"
        >
          <div className="w-full text-center px-3 relative before:absolute before:w-[289px] before:bottom-0 before:left-1/2 before:-translate-x-1/2 pb-5 before:h-px before:bg-[linear-gradient(to_right,#d87400_-2%,#f89955_47%,#aa4700_100%),linear-gradient(to_bottom,#fff,#fff)]">
            <a
              href="#"
              className="inline-block mx-auto text-white text-4xl font-bold"
            >
              SPIDERCOIN
            </a>
          </div>
          <div className="w-full relative before:absolute before:w-[289px] before:bottom-0 before:left-1/2 before:-translate-x-1/2 pb-5 before:h-px before:bg-[linear-gradient(to_right,#d87400_-2%,#f89955_47%,#aa4700_100%),linear-gradient(to_bottom,#fff,#fff)]">
            <ul className="flex flex-col sm:flex-row flex-wrap sm:gap-2.5 xl:gap-4 justify-center">
              <li>
                <a
                  href="#aboutUs"
                  className="inline-block sm:text-lg text-white uppercase p-2.5"
                >
                  ABOUT US
                </a>
              </li>
              <li>
                <a
                  href="#Features"
                  className="inline-block sm:text-lg text-white uppercase p-2.5"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#Partners"
                  className="inline-block sm:text-lg text-white uppercase p-2.5"
                >
                  Partners
                </a>
              </li>
              <li>
                <a
                  href="#roadmap"
                  className="inline-block sm:text-lg text-white uppercase p-2.5"
                >
                  Road map
                </a>
              </li>
              <li>
                <a
                  href="#HowToBuy"
                  className="inline-block sm:text-lg text-white uppercase p-2.5"
                >
                  How to buy
                </a>
              </li>
              <li>
                <a
                  href="#Ecosystem"
                  className="inline-block sm:text-lg text-white uppercase p-2.5"
                >
                  Ecosystem
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full pt-5">
            <ul className="flex flex-wrap gap-2.5 xl:gap-4 justify-center">
              <li>
                <a
                  href="#"
                  className="text-2xl bg-linear-bg h-12 w-12 rounded-full grid place-content-center text-white transition hover:-translate-y-1"
                >
                  <FaFacebook />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-2xl bg-linear-bg h-12 w-12 rounded-full grid place-content-center text-white transition hover:-translate-y-1"
                >
                  <FaInstagram />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-2xl bg-linear-bg h-12 w-12 rounded-full grid place-content-center text-white transition hover:-translate-y-1"
                >
                  <FaDiscord />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-2xl bg-linear-bg h-12 w-12 rounded-full grid place-content-center text-white transition hover:-translate-y-1"
                >
                  <FaGoogle />
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-2xl bg-linear-bg h-12 w-12 rounded-full grid place-content-center text-white transition hover:-translate-y-1"
                >
                  <FaXTwitter />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
