import Successgellary from "../../components/shared/Home/Successgellary";
import Banner from "./Banner/Banner";
import MeetOurTeam from "./MeetOurTeam/MeetOurTeam";
import OurImpact from "./OurImpact/OurImpact";
import ProjectsYouBuild from "./ProjectsYouBuild/ProjectsYouBuild";
import WhatToLearn from "./WhatToLearn/WhatToLearn";
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
      <div className="my-20 mt-28">
        <WhatToLearn />
      </div>
      {/* projects you build */}
      <div>
      <ProjectsYouBuild />
      </div>

      {/* meet out team  */}
      <div className="mt-20">
      <MeetOurTeam/>
      </div>
    </div>
  );
};

export default Home;
