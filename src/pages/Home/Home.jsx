import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import Successgellary from "../../components/shared/Home/Successgellary";
import Banner from "./Banner/Banner";
import MeetOurTeam from "./MeetOurTeam/MeetOurTeam";
import OurImpact from "./OurImpact/OurImpact";
import ProjectsYouBuild from "./ProjectsYouBuild/ProjectsYouBuild";
import WhatToLearn from "./WhatToLearn/WhatToLearn";
import XFactor from "./xFactor/XFactor";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Home = () => {
  return (
    <div>
      {/* banner section  */}
      <section
        id="banner"
        className="h-[85vh] flex items-center justify-evenly mt-4"
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
        <MeetOurTeam />
      </div>
      {/* faq section */}
      <div className="flex items-center flex-col lg:flex-row my-32 p-10">
        <div className="min-w-[350px] order-last md:order-first">
          <h2 id="gradientText" className="text-8xl font-bold mb-12 lg:mb-0">
            FA&Q
          </h2>
        </div>
        <div className="flex-1">
          <Accordion
            sx={{ backgroundColor: "#561fee", color: "white", p: "20px" }}
          >
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon sx={{ color: "white" }} size="large" />
              }
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="h4">For whome is this course?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                This Course Is Created For Those Who Want To Learn Web
                Development From Scratch And Build A Career As A Web Developer
                In Software Companies. Even Those Who Studied CSE For Four Years
                But Didn’t Learn Much And Couldn’t Decide What To Do, Can
                Complete Web Development From This Course And Apply For Jobs. 😀
              </Typography>
            </AccordionDetails>
          </Accordion>
          {/* accordion 2  */}
          <Accordion
            sx={{ backgroundColor: "#561fee", color: "white", p: "20px" }}
          >
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon sx={{ color: "white" }} size="large" />
              }
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="h4">For whome is this course?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                This Course Is Created For Those Who Want To Learn Web
                Development From Scratch And Build A Career As A Web Developer
                In Software Companies. Even Those Who Studied CSE For Four Years
                But Didn’t Learn Much And Couldn’t Decide What To Do, Can
                Complete Web Development From This Course And Apply For Jobs. 😀
              </Typography>
            </AccordionDetails>
          </Accordion>
          {/* accordion 2  */}
          <Accordion
            sx={{ backgroundColor: "#561fee", color: "white", p: "20px" }}
          >
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon sx={{ color: "white" }} size="large" />
              }
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="h4">For whome is this course?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                This Course Is Created For Those Who Want To Learn Web
                Development From Scratch And Build A Career As A Web Developer
                In Software Companies. Even Those Who Studied CSE For Four Years
                But Didn’t Learn Much And Couldn’t Decide What To Do, Can
                Complete Web Development From This Course And Apply For Jobs. 😀
              </Typography>
            </AccordionDetails>
          </Accordion>
          {/* accordion 2  */}
          <Accordion
            sx={{ backgroundColor: "#561fee", color: "white", p: "20px" }}
          >
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon sx={{ color: "white" }} size="large" />
              }
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="h4">For whome is this course?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                This Course Is Created For Those Who Want To Learn Web
                Development From Scratch And Build A Career As A Web Developer
                In Software Companies. Even Those Who Studied CSE For Four Years
                But Didn’t Learn Much And Couldn’t Decide What To Do, Can
                Complete Web Development From This Course And Apply For Jobs. 😀
              </Typography>
            </AccordionDetails>
          </Accordion>
          {/* accordion 2  */}
          <Accordion
            sx={{ backgroundColor: "#561fee", color: "white", p: "20px" }}
          >
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon sx={{ color: "white" }} size="large" />
              }
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="h4">For whome is this course?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                This Course Is Created For Those Who Want To Learn Web
                Development From Scratch And Build A Career As A Web Developer
                In Software Companies. Even Those Who Studied CSE For Four Years
                But Didn’t Learn Much And Couldn’t Decide What To Do, Can
                Complete Web Development From This Course And Apply For Jobs. 😀
              </Typography>
            </AccordionDetails>
          </Accordion>
          {/* accordion 2  */}
          <Accordion
            sx={{ backgroundColor: "#561fee", color: "white", p: "20px" }}
          >
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon sx={{ color: "white" }} size="large" />
              }
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="h4">For whome is this course?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                This Course Is Created For Those Who Want To Learn Web
                Development From Scratch And Build A Career As A Web Developer
                In Software Companies. Even Those Who Studied CSE For Four Years
                But Didn’t Learn Much And Couldn’t Decide What To Do, Can
                Complete Web Development From This Course And Apply For Jobs. 😀
              </Typography>
            </AccordionDetails>
          </Accordion>
          {/* accordion 2  */}
          <Accordion
            sx={{ backgroundColor: "#561fee", color: "white", p: "20px" }}
          >
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon sx={{ color: "white" }} size="large" />
              }
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="h4">For whome is this course?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                This Course Is Created For Those Who Want To Learn Web
                Development From Scratch And Build A Career As A Web Developer
                In Software Companies. Even Those Who Studied CSE For Four Years
                But Didn’t Learn Much And Couldn’t Decide What To Do, Can
                Complete Web Development From This Course And Apply For Jobs. 😀
              </Typography>
            </AccordionDetails>
          </Accordion>
          {/* accordion 2  */}
          <Accordion
            sx={{ backgroundColor: "#561fee", color: "white", p: "20px" }}
          >
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon sx={{ color: "white" }} size="large" />
              }
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="h4">For whome is this course?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                This Course Is Created For Those Who Want To Learn Web
                Development From Scratch And Build A Career As A Web Developer
                In Software Companies. Even Those Who Studied CSE For Four Years
                But Didn’t Learn Much And Couldn’t Decide What To Do, Can
                Complete Web Development From This Course And Apply For Jobs. 😀
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Home;
