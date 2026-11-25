import React, { FC } from "react";
import Link from "next/link";
import { headerData } from "../Header/Navigation/menuData";
import { footerlabels } from "@/app/api/data";
import { Icon } from "@iconify/react";
import Logo from "../Header/Logo";
import { Separator } from "@/components/ui/separator";

const Footer: FC = () => {
  return (
    <footer className="pt-16 bg-background">
      <div className="container px-4">
        <div className="grid grid-cols-1 sm:grid-cols-11 lg:gap-20 md:gap-6 sm:gap-12 gap-6  pb-16">
          <div className="lg:col-span-5 md:col-span-6 col-span-6 flex flex-col gap-6">
            <Logo />
            <p className="text-white/60">
              HELIX TECH Ltd — a Colorado corporation building AI-powered
              products and digital infrastructure with clear governance and
              partner-ready delivery.
            </p>
            <div className="flex gap-6 items-center relative z-1">
              <Link href="https://www.linkedin.com/" className="group" aria-label="LinkedIn">
                <Icon
                  icon="fa6-brands:linkedin-in"
                  width="24"
                  height="24"
                  className="text-white group-hover:text-primary"
                />
              </Link>
              <Link href="https://www.twitter.com/" className="group" aria-label="X">
                <Icon
                  icon="fa6-brands:x-twitter"
                  width="24"
                  height="24"
                  className="text-white group-hover:text-primary"
                />
              </Link>
              <Link href="https://github.com/" className="group" aria-label="GitHub">
                <Icon
                  icon="fa6-brands:github"
                  width="24"
                  height="24"
                  className="text-white group-hover:text-primary"
                />
              </Link>
            </div>
          </div>
          <div className="lg:col-span-3 md:col-span-3 col-span-6">
            <h4 className="text-white mb-4 font-medium text-24">Links</h4>
            <ul>
              {headerData.map((item, index) => (
                <li key={index} className="pb-4">
                  <Link
                    href={item.href}
                    className="text-white/60 hover:text-primary text-17"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-3 md:col-span-3 col-span-6">
            <h4 className="text-white mb-4 font-medium text-24">Company</h4>
            <ul>
              {footerlabels.map((item, index) => (
                <li key={index} className="pb-4">
                  <Link
                    href={item.herf}
                    className="text-white/60 hover:text-primary text-17"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="text-white/40 text-sm mt-4">
              Colorado, United States
            </p>
          </div>
        </div>
        <Separator className="bg-white/10" />
        <p className="text-white/40 text-center py-8">
          © {new Date().getFullYear()} HELIX TECH Ltd. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
