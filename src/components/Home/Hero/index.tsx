"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import CardSlider from "./slider";
import BrandLogo from "../BrandLogo";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { asset } from "@/lib/asset";
import SimplePanel from "../SimplePanel";

const Hero = () => {
  const leftAnimation = {
    initial: { x: "-100%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "-100%", opacity: 0 },
    transition: { duration: 0.6 },
  };

  const rightAnimation = {
    initial: { x: "100%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "100%", opacity: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <section
      className="relative py-24 pt-48 overflow-hidden z-1"
      id="main-banner"
    >
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <motion.div
            {...leftAnimation}
            className="flex flex-col items-center lg:items-start gap-10"
          >
            <div className="flex flex-col gap-4 text-center lg:text-left">
              <div className="flex gap-6 items-center lg:justify-start justify-center">
                <Badge
                  variant="outline"
                  className="text-base py-1.5 px-4 bg-primary/10 rounded-full border border-white/10 text-primary font-medium h-9"
                >
                  Colorado · AI Technology
                </Badge>
              </div>
              <p className="text-primary text-lg md:text-xl font-semibold tracking-[0.12em] uppercase">
                HELIX TECH
              </p>
              <h1 className="font-medium xl:text-[64px] md:text-6xl sm:text-5xl text-4xl text-white leading-tight">
                Intelligent technology for the next digital era
              </h1>
              <p className="text-white/80 text-lg max-w-xl">
                HELIX TECH Ltd builds AI-powered products and digital
                infrastructure—secure, practical, and ready for partners who
                want clarity over hype.
              </p>
            </div>
            <div className="flex items-center md:justify-start justify-center gap-4 flex-wrap">
              <Button
                nativeButton={false}
                render={<Link href="/#work" />}
                className="text-base bg-primary hover:bg-primary/80 flex items-center gap-2 border border-primary rounded-lg font-semibold text-background py-6 px-7 cursor-pointer h-12"
              >
                Explore capabilities
                <Image
                  src={asset("/images/icons/icon-arrow.svg")}
                  alt="arrow-icon"
                  width={20}
                  height={20}
                />
              </Button>
              <Button
                nativeButton={false}
                render={<Link href="/#contact" />}
                variant="outline"
                className="text-base border-white/20 text-white hover:bg-white/10 rounded-lg py-6 px-7 h-12"
              >
                Contact us
              </Button>
            </div>
          </motion.div>
          <motion.div
            {...rightAnimation}
            className="flex justify-center lg:justify-end"
          >
            <SimplePanel variant="hero" />
          </motion.div>
        </div>
        <BrandLogo />
        <CardSlider />
      </div>
    </section>
  );
};

export default Hero;
