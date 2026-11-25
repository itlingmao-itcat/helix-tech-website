"use client";
import Image from "next/image";
import { portfolioData } from "@/app/api/data";
import { motion } from "framer-motion";
import SimplePanel from "../SimplePanel";

const Portfolio = () => {
  return (
    <section className="pt-12" id="portfolio">
      <div className="container px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 items-center gap-20">
          <motion.div
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ y: "-100%", opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <SimplePanel variant="services" />
          </motion.div>

          <motion.div
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ y: "100%", opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-col gap-4">
              <p className="text-white font-medium">
                Services{" "}
                <span className="text-primary">built for partners</span>
              </p>
              <h2 className="text-white sm:text-5xl text-3xl mb-4 font-medium">
                From intelligent products to secure delivery
              </h2>
            </div>
            <p className="text-muted/60 text-lg">
              We help teams design, ship, and operate AI-enabled systems with
              the same discipline we apply to our own company governance.
            </p>

            <table className="w-full sm:w-[80%] mt-10">
              <tbody>
                {portfolioData.map((item, index) => (
                  <tr key={index} className="border-b border-border">
                    <td className="py-5">
                      <div className="bg-primary/20 p-3 rounded-full w-fit">
                        <Image
                          src={item.image}
                          alt={item.title}
                          width={24}
                          height={24}
                        />
                      </div>
                    </td>
                    <td className="py-5">
                      <h3 className="text-muted text-xl ml-5">{item.title}</h3>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
