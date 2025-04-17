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
  const [index, setIndex] = useState(0);
  const [image, setImage] = useState(null);

  const incIndex = (index) => {
    if (index > projectData.length) {
      setIndex(projectData.length);
    } else if (index < 0) {
      setIndex(0);
    } else {
      setIndex(index + 4);
    }
  };
  const decIndex = (index) => {
    if (index > projectData.length) {
      setIndex(projectData.length);
    } else if (index < 0) {
      setIndex(0);
    } else {
      setIndex(index - 4);
    }
  };

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
              // src={
              //   "http://192.168.149.193:8080/file_0000000083885230b041ced01a827d1e_conversation_id=67eb9cc2-82e8-8002-adcb-e6c9c8469733&message_id=6ca90614-146c-46fb-a5d3-d50d2e9c34ff.PNG"
              // }
              alt="profile picture"
              className="w-[40px] lg:w-[50px] h-[40px] lg:h-[50px] rounded-xl"
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
          className="w-full mt-[7%] flex flex-col gap-6 relative"
        >
          <div className="flex w-full items-center gap-1">
            <h1 className="text-4xl pl-4 font-semibold">My Works</h1>
            <div className="h-[4px] w-35 lg:w-40 bg-black"></div>
          </div>
          <div className="w-full flex overflow-x-auto gap-4 p-4 [scrollbar-width:none] [-ms-overflow-style:none] animate-fade-in-main">
            {projectData.map((project, index) => (
              <ProjectCard
                key={index}
                {...project}
                onClick={() =>
                  setSelectedProject({
                    title: project.title,
                    image: project.image,
                    link: project.link,
                    description: project.description,
                  })
                }
              />
            ))}
          </div>
          <a
            onClick={() => decIndex(index)}
            href={index <= 0 ? `#1` : `#${index}`}
            className="absolute hidden lg:flex items-center p-2 left-5 top-[50%] bg-white rounded-full shadow-lg cursor-pointer hover:bg-[#f1f1f1]"
          >
            <span className="material-symbols-outlined">arrow_back</span>
          </a>
          <a
            href={
              index >= projectData.length
                ? `#${projectData.length}`
                : `#${index}`
            }
            onClick={() => incIndex(index)}
            className="absolute hidden lg:flex items-center p-2 right-5 top-[50%] bg-white rounded-full shadow-lg cursor-pointer hover:bg-[#f1f1f1]"
          >
            <span className="material-symbols-outlined">arrow_forward</span>
          </a>
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
          <p className="footer-text">Made with ❤️ by Mintesnot Shikur</p>
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
