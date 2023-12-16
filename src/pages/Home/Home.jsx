import Successgellary from "../../components/shared/Home/Successgellary";
import Banner from "./Banner/Banner";
import OurImpact from "./OurImpact/OurImpact";


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
      <div className="flex items-center justify-center md:justify-end">
      
      <OurImpact/>
      </div>
    </div>
  );
};

export default Home;
