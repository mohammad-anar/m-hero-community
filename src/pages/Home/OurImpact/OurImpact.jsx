import { LuMoveDown } from "react-icons/lu";

const OurImpact = () => {
  return (
    <div
      id="impact"
      className="my-12 space-y-16 w-full mt-20"
    >
      <div className="text-left md:text-right">
        <h3 className="text-2xl mb-3 font-medium">
          Largets <br /> Community
        </h3>
        <h2 id="gradientText" className="text-7xl font-bold">
          Our Impact_
        </h2>
      </div>
      {/* stat  */}
      <div className="flex flex-col lg:flex-row w-full items-center gap-5 justify-between">
        <div className="h-full flex-1 w-full text-center">
          <LuMoveDown
            className="h-full font-light text-[#561fee] mx-auto"
            size={100}
          />
          <p className="text-xl mt-8 text-[#ef4bf5]">Scroll down</p>
        </div>
        <div className="rounded-xl flex-1 w-full order-first lg:order-last text-white flex flex-col md:flex-row items-center justify-end py-6 md:py-12 md:px-20 text-center  gap-12 bg-gradient-to-r from-[#ef4bf5] to-[#561fee]">
          <div className="space-y-2 w-full">
            <h1 className="text-5xl font-bold">3000+</h1>
            <p className="text-xl font-medium">
              Job placement <br />
              worldwide
            </p>
          </div>
          <div className="space-y-2 w-full  border-y-2  md:border-y-0 py-4 md:border-x-2">
            <h1 className="text-5xl font-bold">1200+</h1>
            <p className="text-xl font-medium">
              Connected <br />
              companies
            </p>
          </div>
          <div className="space-y-2 w-full">
            <h1 className="text-5xl font-bold">14+</h1>
            <p className="text-xl font-medium">
              Dedicated Job <br />
              Placement Executives
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurImpact;
