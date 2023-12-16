import logo from "../../../assets/logo.png";
const Banner = () => {
  return (
    <>
      <div className="hidden lg:block">
        <img className="w-72" src={logo} alt="logo" />
      </div>
      <div id="gradientText" className="text-8xl font-bold">
        <h2>Let&apos;s Code </h2>
        <h2>Your Career_</h2>
      </div>
    </>
  );
};

export default Banner;
