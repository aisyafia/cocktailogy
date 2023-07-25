import Link from "next/link";
import Image from "next/image";
import { footerLinks } from "@/constants";

const Footer = () => {
  return (
    <footer className="flex flex-col text-black-100 mt-5 border-t border-gray-100">
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
        <div className="flex fles-col justify-start items-start gap-4">
          <Image
            src="/cocklogo.svg"
            alt="website logo"
            width={77}
            height={7}
            className="object-contain"
          />
          <p className="text-base text-gray-800">
            Cocktailogy 2023 <br />
            All rights reserved &copy;
          </p>
        </div>
        <div className="footer__links">
          {footerLinks.map((link) => {
            return (
              <div className="footer__link" key={link.title}>
                <h3 className="font-bold">{link.title}</h3>
                {link.links.map((item) => (
                  <Link
                    key={item.title}
                    href={item.url}
                    className="text-grey-600"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex justify-between items-center flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10">
        <p>@2023 Cocktailogy. All Rights Reserved</p>

        <div className="footer__copyrights-link">
          <Link href="/" className="text-grey-500">
            Privacy Policy
          </Link>
          <Link href="/" className="text-grey-500">
            Terms of Use
          </Link>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
