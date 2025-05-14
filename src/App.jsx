import { useState } from "react";
import profilePicture from "./assets/images/profile-picture.jpg";
import instagramIcon from "./assets/icons/instagram.svg";
import telegramIcon from "./assets/icons/telegram.svg";
import githubIcon from "./assets/icons/github.svg";
import projectData from "./projectData.js";

import LinkButton from "../components/linkButton.jsx";
import TalkButton from "../components/talkButton.jsx";
import ProjectCard from "../components/projectCard.jsx";
import ProjectOverview from "../components/projectOverview.jsx";
import ViewImage from "../components/viewImage.jsx";

function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [image, setImage] = useState(null);

  const [showMore, setShowMore] = useState(false); // State to control visible projects

  return (
    <>
      <div className="w-full bg-[#f1f1f1] flex flex-col justify-center items-center pt-8 font-primary">
        {image && (
          <ViewImage
            isProfile={true}
            image={image}
            onClose={() => setImage(null)}
          />
        )}
        <header className="bg-white p-2.5 flex justify-between items-center text-center w-[90%] lg:w-[80%] border border-gray-500 rounded-xl shadow-lg sticky top-[2%] z-10 animate-header">
          <div className="flex items-center gap-2">
            <img
              src={profilePicture}
              alt="profile picture"
              className="w-[40px] lg:w-[50px] h-[40px] lg:h-[50px] rounded-lg cursor-pointer"
              onClick={() => {
                setImage(profilePicture);
              }}
            />
            <p className="text-[1rem] lg:text-[1.5rem] font-semibold">
              Mintesnot Shikur
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden lg:flex items-center gap-4">
              <LinkButton
                href="https://www.instagram.com/mintesnot_shikur"
                icon={instagramIcon}
              />
              <LinkButton
                href="https://t.me/mintesnot_shikur"
                icon={telegramIcon}
              />
              <LinkButton
                href="https://github.com/mintesnotshikur"
                icon={githubIcon}
              />
            </div>
            <TalkButton />
          </div>
        </header>
        <section className="flex flex-col gap-8 w-[90%] lg:w-[80%] pt-[7%] ">
          <p className="animate-fade-in-main">👋 Hey there, nice to meet you</p>
          <p className="text-[2rem] lg:text-[4rem] font-extrabold leading-[1] animate-fade-in-main">
            I am a{" "}
            <span className="text-secondary font-secondary">website</span> and{" "}
            <span className="text-secondary font-secondary">mobile app</span>{" "}
            developer
          </p>
          <p className="w-full text-justify lg:w-[70%] animate-fade-in-main">
            I have a Computer Science degree and skills in{" "}
            <span className="font-bold underline text-secondary font-secondary">
              React
            </span>
            ,{" "}
            <span className="font-bold underline text-secondary font-secondary">
              React Native
            </span>
            ,{" "}
            <span className="font-bold underline text-secondary font-secondary">
              PHP
            </span>{" "}
            and{" "}
            <span className="font-bold underline text-secondary font-secondary">
              MySQL
            </span>
            . I am eager to contribute to innovative projects and further
            develop my professional skills.
          </p>
          <TalkButton customStyle={"w-max"} />
        </section>
        <section
          id="my-works"
          className="w-full mt-[7%] flex flex-col gap-4 relative"
        >
          <div className="flex w-full items-center gap-1">
            <h1 className="text-4xl pl-4 font-semibold">My Works</h1>
            <div className="h-[4px] w-35 lg:w-40 bg-black"></div>
          </div>
          <div
            className={`w-full flex flex-wrap items-center justify-center ${
              showMore ? "max-h-[100000px]" : "max-h-[270px]"
            } overflow-hidden gap-4 p-4`}
          >
            {projectData.map((project) => (
              <ProjectCard
                key={project.id}
                {...project}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </div>
          <p
            onClick={() => setShowMore(!showMore)}
            className="self-center text-secondary underline cursor-pointer"
          >
            Show More
          </p>
        </section>
        <footer className="flex flex-col items-center gap-4 my-[3%]">
          <div className="flex lg:hidden items-center justify-center gap-12">
            <LinkButton
              href="https://www.instagram.com/mintesnot_shikur?igsh=MWRzZTZmN2U2ZDkydA=="
              icon={instagramIcon}
            />
            <LinkButton
              href="https://t.me/mintesnot_shikur"
              icon={telegramIcon}
            />
            <LinkButton
              href="https://github.com/mintesnotshikur"
              icon={githubIcon}
            />
          </div>
          <p className="footer-text">Made by Mintesnot Shikur</p>
        </footer>
      </div>
      {/* Render ProjectOverview */}
      <ProjectOverview
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}

export default App;
