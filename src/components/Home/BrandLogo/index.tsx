"use client";
import Slider from "react-infinite-logo-slider";
import { brandList } from "./data";
import Image from "next/image";

function BrandLogo() {
  return (
    <section>
      <div className="2xl:py-20 py-11">
        <div className="container">
          <div className="gap-4">
            <div className="flex justify-center text-center py-4 relative">
              <p className="text-white font-medium">
                Built for modern{" "}
                <span className="text-primary">technology partners</span>
              </p>
            </div>

            <div className="py-3 Xsm:py-7">
              <Slider
                width="200px"
                duration={20}
                pauseOnHover={true}
                blurBorders={false}
              >
                                {brandList.map((items, index) => (
                  <Slider.Slide key={index}>
                    <div className="mr-10 flex h-[40px] w-[160px] items-center justify-center">
                      <Image
                        src={items?.image}
                        alt="partner mark"
                        width={135}
                        height={35}
                        className="h-8 w-auto max-w-[140px] object-contain opacity-80"
                        unoptimized
                      />
                    </div>
                  </Slider.Slide>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BrandLogo;
