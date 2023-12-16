import Successgellary from "../../components/shared/Home/Successgellary";
import Banner from "./Banner/Banner";

const Home = () => {
  return (
    <div>
    {/* banner section  */}
      <section
        id="banner"
        className="h-[85vh] flex items-center justify-evenly"
      >
        <Banner/>
      </section>
      {/* success gallery  */}
      <div className="my-12">
      <Successgellary/>
      </div>
    </div>
  );
};

export default Home;
