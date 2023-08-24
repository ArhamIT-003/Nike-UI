import { footerLogo } from "../assets/images";
import { socialMedia, footerLinks } from "../constants/index";
import { copyrightSign } from "../assets/icons";

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-center flex-wrap max-lg:flex-col gap-20">
        <div className="flex items-start flex-col ">
          <a href="">
            <img src={footerLogo} alt="" width={150} height={40} />
          </a>
          <p className="mt-6 text-white leading-7 font-montserrat text-base sm:max-w-sm">
            Get shoes ready for the new term at your nearest Nike store. Find
            Your perfect Size In Store. Get Rewards
          </p>
          <div className="flex items-center gap-5 mt-8">
            {socialMedia.map((media, index) => (
              <div
                key={index}
                className="flex items-center justify-center w-12 h-12 bg-white rounded-full"
              >
                <img src={media.src} alt={media.alt} width={24} height={24} />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
          {footerLinks.map((links, index) => (
            <div className="" key={index}>
              <h4 className="text-white font-montserrat text-2xl leading-normal font-medium mb-6">
                {links.title}
              </h4>
              <ul>
                {links.links.map((link, index) => (
                  <li
                    key={index}
                    className="text-white font-montserrat text-base mt-3 leading-normal hover:text-slate-gray"
                  >
                    <a href="">{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center">
        <div className="flex flex-1 justify-start gap-2 font-montserrat cursor-pointer">
          <img
            src={copyrightSign}
            alt="copy-right sign"
            width={20}
            height={20}
            className="rounded-full m-0"
          />
          <p>Copyright. All right reserved</p>
        </div>
        <p className=" font-montserrat cursor-pointer">Terms & Conditions</p>
      </div>
    </footer>
  );
};

export default Footer;
