import { upgradeData } from "@/app/api/data";
import { Icon } from "@iconify/react";
import SimplePanel from "../SimplePanel";

const Upgrade = () => {
  return (
    <section className="py-20" id="upgrade">
      <div className="container px-4">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-white font-medium">
              Why <span className="text-primary">HELIX TECH</span>
            </p>
            <h2 className="text-white sm:text-5xl text-3xl  font-medium mb-5">
              A company built for serious technology work
            </h2>
            <p className="text-muted/60 text-lg mb-7">
              We combine an AI product focus with formal US corporate structure,
              so partners know who they are working with.
            </p>
            <div className="grid sm:grid-cols-2  text-nowrap gap-5">
              {upgradeData.map((item, index) => (
                <div key={index} className="flex gap-5">
                  <div>
                    <Icon
                      icon="la:check-circle-solid"
                      width="24"
                      height="24"
                      className="text-white group-hover:text-primary"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg text-muted/60">{item.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center">
            <SimplePanel variant="company" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Upgrade;
