import React from "react";
import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";
import { copyrightSign } from "../assets/icons";

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="/">
            <img
              src={footerLogo}
              width={150}
              height={46}
              alt="footerLogo`"
            />
          </a>
          <p className="text-base mt-6 leading-7 text-white-400 font-montserrat sm:max-w-sm">
            Get shoes ready for the new term at your neares Nike store. Find
            your perfect size in store. Get Rewards
          </p>
          <div className="flex items-center gap-5 mt-8 ">
            {socialMedia.map((social) => (
              <div className="bg-white hover:cursor-pointer w-12 h-12 rounded-full items-center flex justify-center">
                <img
                  src={social.src}
                  alt={social.alt}
                  width={24}
                  height={24}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
          {footerLinks.map((section) => {
            return (
              <div key={section}>
                <h4 className="text-white font-montserrat text-2xl font-medium leading-normal">
                  {section.title}
                </h4>
                <ul className="text-slate-400 mt-6">
                  {section.links.map((link) => (
                    <li
                      key={link.name}
                      className="mt-3 text-white text-base font-montserrat leading-normal hover:text-slate-gray"
                    >
                      <a
                        href={link.link}
                        className="py-2"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center">
        <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
          <img
            src={copyrightSign}
            alt="Copyright"
            width={20}
            height={20}
            className="rounded-full m-0"
          />
          <p>Copyright. All rights reserved.</p>
        </div>
        <p className="font-montserrat cursor-pointer">Terms & Conditions</p>
      </div>
    </footer>
  );
};

export default Footer;
