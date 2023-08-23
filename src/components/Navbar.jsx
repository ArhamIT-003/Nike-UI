import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants/index";

const Navbar = () => {
  return (
    <header className="padding-x py-10 absolute z-10 w-full">
      <nav className="flex justify-between max-container items-center">
        <a href="/">
          <img src={headerLogo} alt="logo" width={130} height={29} />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className=" font-montserrat text-lg leading-normal text-slate-gray"
            >
              {link.label}
            </a>
          ))}
        </ul>
        <div className="hidden max-lg:block">
          <img src={hamburger} alt="hamburger" width={20} height={20}/>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
