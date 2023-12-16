import { Button } from "@mui/material";

const ProjectsYouBuild = () => {
    return (
        <div>
        <h2
          id="gradientText"
          className="text-5xl md:text-6xl lg:text-7xl font-bold text-center mb-20"
        >
          Projects You Will Build_
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          
          {/* card 1  */}
          <div className="flex items-center justify-around flex-col lg:flex-row gap-5 bg-slate-400 hover:bg-teal-600 duration-300 hover:scale-105 p-12 rounded-xl">
            <div>
              <h2 id="gradientText" className="text-5xl font-bold">Ranking <br/> Board</h2>
            </div>
            <div>
              <img className="max-w-[250px] rounded-xl"
                src="https://web.programming-hero.com/home/_next/image?url=https%3A%2F%2Fd3lhjpscbhcyrv.cloudfront.net%2Fproject%2FProject-2-Leaderboard.jpg&w=256&q=75"
                alt=""
              />
            </div>
          </div>
          {/* card 1  */}
          <div className="flex items-center justify-around flex-col lg:flex-row gap-5 bg-slate-400 hover:bg-teal-600 duration-300 hover:scale-105 p-12 rounded-xl">
            <div>
              <h2 id="gradientText" className="text-5xl font-bold">Shopping <br/> Cart</h2>
            </div>
            <div>
              <img className="max-w-[250px] rounded-xl"
                src="https://web.programming-hero.com/home/_next/image?url=https%3A%2F%2Fd3lhjpscbhcyrv.cloudfront.net%2Fproject%2FProject-2-Leaderboard.jpg&w=256&q=75"
                alt=""
              />
            </div>
          </div>
          {/* card 1  */}
          <div className="flex items-center justify-around flex-col lg:flex-row gap-5 bg-slate-400 hover:bg-teal-600 duration-300 hover:scale-105 p-12 rounded-xl">
            <div>
              <h2 id="gradientText" className="text-5xl font-bold">Hot <br/> Gadgets</h2>
            </div>
            <div>
              <img className="max-w-[250px] rounded-xl"
                src="https://web.programming-hero.com/home/_next/image?url=https%3A%2F%2Fd3lhjpscbhcyrv.cloudfront.net%2Fproject%2FProject-2-Leaderboard.jpg&w=256&q=75"
                alt=""
              />
            </div>
          </div>
          {/* card 1  */}
          <div className="flex items-center justify-around flex-col lg:flex-row gap-5 bg-slate-400 hover:bg-teal-600 duration-300 hover:scale-105 p-12 rounded-xl">
            <div>
              <h2 id="gradientText" className="text-5xl font-bold">Ema <br/> Jhon</h2>
            </div>
            <div>
              <img className="max-w-[250px] rounded-xl"
                src="https://web.programming-hero.com/home/_next/image?url=https%3A%2F%2Fd3lhjpscbhcyrv.cloudfront.net%2Fproject%2FProject-2-Leaderboard.jpg&w=256&q=75"
                alt=""
              />
            </div>
          </div>
          {/* card 1  */}
          <div className="flex items-center justify-around flex-col lg:flex-row gap-5 bg-slate-400 hover:bg-teal-600 duration-300 hover:scale-105 p-12 rounded-xl">
            <div>
              <h2 id="gradientText" className="text-5xl font-bold">Genous <br/> Car</h2>
            </div>
            <div>
              <img className="max-w-[250px] rounded-xl"
                src="https://web.programming-hero.com/home/_next/image?url=https%3A%2F%2Fd3lhjpscbhcyrv.cloudfront.net%2Fproject%2FProject-2-Leaderboard.jpg&w=256&q=75"
                alt=""
              />
            </div>
          </div>
          {/* card 1  */}
          <div className="flex items-center justify-around flex-col lg:flex-row gap-5 bg-slate-400 hover:bg-teal-600 duration-300 hover:scale-105 p-12 rounded-xl">
            <div>
              <h2 id="gradientText" className="text-5xl font-bold">Doctors <br/> Portal</h2>
            </div>
            <div>
              <img className="max-w-[250px] rounded-xl"
                src="https://web.programming-hero.com/home/_next/image?url=https%3A%2F%2Fd3lhjpscbhcyrv.cloudfront.net%2Fproject%2FProject-2-Leaderboard.jpg&w=256&q=75"
                alt=""
              />
            </div>
          </div>
        </div>
        <Button  sx={{fontWeight:"600", color: "#561fee", border: "1px solid #561fee", textTransform:"capitalize", margin: "30px auto", display:"block"}} variant="outlined" size="large">All Projects</Button>
      </div>
    );
};

export default ProjectsYouBuild;