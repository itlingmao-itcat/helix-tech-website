"use client";
import Image from "next/image";
import { timelineData } from "@/app/api/data";
import { motion } from "framer-motion";

const TimeLine = () => {

  return (
    <section className="md:pt-40 pt-9" id="development">
      <div className="container lg:px-16 px-4">
        <div className="text-center">
          <motion.div
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ y: "-100%", opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-col gap-4">
              <p className="text-white font-medium">
                We deliver <span className="text-primary">clear outcomes</span>
              </p>
              <h2 className="text-white sm:text-5xl text-3xl font-medium lg:w-80% mx-auto mb-20">
                One engagement model—from discovery to scale
              </h2>
            </div>
          </motion.div>
          <motion.div
            whileInView={{ scale: 1, opacity: 1 }}
            initial={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {timelineData.map((item, index) => (
                <div key={index} className="flex items-center gap-6">
                  <div className="bg-primary/15 p-6 rounded-full">
                    <Image
                      src={item.icon}
                      alt={item.title}
                      width={44}
                      height={44}
                    />
                  </div>
                  <div className="text-start">
                    <h4 className="text-2xl text-muted mb-2">{item.title}</h4>
                    <p className="text-muted/60 text-lg">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TimeLine;
