import Successgellary from "../../components/shared/Home/Successgellary";
import Banner from "./Banner/Banner";
import OurImpact from "./OurImpact/OurImpact";
import XFactor from "./xFactor/XFactor";

const Home = () => {
  return (
    <div>
      {/* banner section  */}
      <section
        id="banner"
        className="h-[85vh] flex items-center justify-evenly"
      >
        <Banner />
      </section>
      {/* success gallery  */}
      <section className="my-20 ">
        <Successgellary />
      </section>
      {/* our impact section  */}
      <div className="flex items-center justify-center md:justify-end mb-40">
        <OurImpact />
      </div>
      {/* x-factor  */}
      <div>
        <XFactor />
      </div>
      {/* you will learn */}
      <div className="mt-20">
        <div className="max-w-[850px] mx-auto text-center">
          <h2
            id="gradientText"
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-center mb-4"
          >
            What Will You Learn?_
          </h2>
          <p className="text-2xl">
            The web course consists of 80+ modules, 25+ course projects, 15+
            practice projects and 12 assignments.
          </p>
        </div>
        <div className="flex items-center flex-wrap gap-12 justify-center mt-12">
          <div className="p-6 pt-10 pb-2 bg-gradient-to-tr from-[#ef4bf5] to-[#561fee]  rounded-2xl">
            <img
              className="w-[80px]"
              src="https://cdn-icons-png.flaticon.com/512/732/732212.png"
              alt="html"
            />
            <h2 className="text-xl font-bold text-white mt-2 text-center">
              html
            </h2>
          </div>
          <div className="p-6 pt-10 pb-2 bg-gradient-to-tr from-[#ef4bf5] to-[#561fee]  rounded-2xl">
            <img
              className="w-[80px]"
              src="https://cdn-icons-png.flaticon.com/512/5968/5968242.png"
              alt="html"
            />
            <h2 className="text-xl font-bold text-white mt-2 text-center">
              css
            </h2>
          </div>

          <div className="p-6 pt-10 pb-2 bg-gradient-to-tr from-[#ef4bf5] to-[#561fee]  rounded-2xl">
            <img
              className="w-[80px]"
              src="https://cdn.iconscout.com/icon/free/png-256/free-javascript-2038874-1720087.png"
              alt="html"
            />
            <h2 className="text-xl font-bold text-white mt-2 text-center">
              Js
            </h2>
          </div>
          <div className="p-6 pt-10 pb-2 bg-gradient-to-tr from-[#ef4bf5] to-[#561fee]  rounded-2xl">
            <img
              className="w-[80px]"
              src="https://cdn-icons-png.flaticon.com/512/732/732212.png"
              alt="html"
            />
            <h2 className="text-xl font-bold text-white mt-2 text-center">
              html
            </h2>
          </div>
          <div className="p-6 pt-10 pb-2 bg-gradient-to-tr from-[#ef4bf5] to-[#561fee]  rounded-2xl">
            <img
              className="w-[80px]"
              src="https://cdn-icons-png.flaticon.com/512/732/732212.png"
              alt="html"
            />
            <h2 className="text-xl font-bold text-white mt-2 text-center">
              html
            </h2>
          </div>
          <div className="p-6 pt-10 pb-2 bg-gradient-to-tr from-[#ef4bf5] to-[#561fee]  rounded-2xl">
            <img
              className="w-[80px]"
              src="https://cdn-icons-png.flaticon.com/512/732/732212.png"
              alt="html"
            />
            <h2 className="text-xl font-bold text-white mt-2 text-center">
              html
            </h2>
          </div>
          <div className="p-6 pt-10 pb-2 bg-gradient-to-tr from-[#ef4bf5] to-[#561fee]  rounded-2xl">
            <img
              className="w-[80px]"
              src="https://cdn-icons-png.flaticon.com/512/732/732212.png"
              alt="html"
            />
            <h2 className="text-xl font-bold text-white mt-2 text-center">
              html
            </h2>
          </div>
          <div className="p-6 pt-10 pb-2 bg-gradient-to-tr from-[#ef4bf5] to-[#561fee] inline-block rounded-2xl">
            <img
              className="w-[80px]"
              src="https://cdn-icons-png.flaticon.com/512/732/732212.png"
              alt="html"
            />
            <h2 className="text-xl font-bold text-white mt-2 text-center">
              html
            </h2>
          </div>
          <div className="p-6 pt-10 pb-2 bg-gradient-to-tr from-[#ef4bf5] to-[#561fee]  rounded-2xl">
            <img
              className="w-[80px]"
              src="https://cdn-icons-png.flaticon.com/512/732/732212.png"
              alt="html"
            />
            <h2 className="text-xl font-bold text-white mt-2 text-center">
              html
            </h2>
          </div>
          <div className="p-6 pt-10 pb-2 bg-gradient-to-tr from-[#ef4bf5] to-[#561fee]  rounded-2xl">
            <img
              className="w-[80px]"
              src="https://cdn-icons-png.flaticon.com/512/732/732212.png"
              alt="html"
            />
            <h2 className="text-xl font-bold text-white mt-2 text-center">
              html
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
