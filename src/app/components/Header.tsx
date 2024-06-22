import Humberger from "./ui/Humberger";

function Header() {
  return (
    <header className="lg:max-w-4xl xl:max-w-6xl md:max-w-2xl max-w-[400px] mx-auto flex justify-between items-center py-3  text-white bg-gradient-to-b from-black ">
      <h1 className="text-3xl font-bold">SPIDERCOIN</h1>
      <nav className="hidden lg:block">
        <ul className="flex justify-center items-center gap-3 text-lg">
          <li>
            <a href="#aboutUs">ABOUT US</a>{" "}
          </li>
          <li>
            <a href="#Features">FEATURES</a>
          </li>
          <li>
            <a href="#Partners">PARTNERS</a>
          </li>
          <li>
            <a href="#roadmap">ROADMAP</a>
          </li>
          <li>
            <a href="#HowToBuy">HOW TO BUY</a>
          </li>
          <li>
            <a href="#Ecosystem">ECOSYSTEM</a>
          </li>
        </ul>
      </nav>
      <Humberger />
    </header>
  );
}

export default Header;
