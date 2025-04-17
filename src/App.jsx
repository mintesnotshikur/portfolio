import { useState } from "react";
import profilePicture from "./assets/images/profile-picture.jpg";
import instagramIcon from "./assets/icons/instagram.svg";
import telegramIcon from "./assets/icons/telegram.svg";
import githubIcon from "./assets/icons/github.svg";
import projectData from "./projectData.js";

function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [index, setIndex] = useState(0);

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

  const LinkButton = ({ href, icon }) => {
    return (
      <button className="flex items-center border border-[#dedcdc] rounded-[10px] shadow-lg bg-[#f1f1f1] text-black text-lg font-semibold cursor-pointer hover:bg-[#d6d4d4] ">
        <a
          href={href}
          target="_blank"
          className="flex items-center p-1.5 gap-1"
        >
          <img src={icon} className="w-[25px] h-[25px]" />
        </a>
      </button>
    );
  };

  const TalkButton = ({ customStyle }) => {
    return (
      <button
        className={`font-secondary bg-primary text-white lg:text-lg font-light px-[10px] lg:px-[30px] py-[8px] lg:py-[11px] border rounded-[10px] shadow-lg cursor-pointer hover:bg-secondary ${customStyle}`}
      >
        <a href="mailto:mintesnotshikur2@gamil.com" target="_blank">
          Talk with me
        </a>
      </button>
    );
  };

  const ProjectCard = ({ id, title, image, link, description }) => {
    return (
      <div
        className="flex flex-col flex-shrink-0 gap-4 p-[15px] bg-white border border-[#dedcdc] rounded-[10px] shadow-lg cursor-pointer"
        onClick={() => setSelectedProject({ title, image, link, description })}
        id={id}
      >
        <div
          // href="#"
          className="flex flex-col justify-center items-center gap-4 decoration-0 overflow-hidden rounded-[10px]"
        >
          <img
            src={image[0]}
            alt={title}
            className={`${
              title === "Rosary Prayer App" ? "w-[75px]" : "w-[300px]"
            } h-auto rounded-[10px] hover:scale-[1.05]`}
          />
          <p className="text-[1rem] font-normal">{title}</p>
        </div>
      </div>
    );
  };

  const MoreImages = ({ images, title }) => {
    return (
      <div className="w-full flex overflow-x-auto gap-4 p-4 ">
        {images.map((image, index) => {
          return (
            <div
              key={index}
              className="flex flex-col flex-shrink-0 gap-4  bg-white border border-[#dedcdc] rounded-[10px] shadow-lg"
            >
              <div
                // href="#"
                className="flex flex-col justify-center items-center gap-4 decoration-0 overflow-hidden"
              >
                <img
                  src={image}
                  className={`${
                    title === "Rosary Prayer App"
                      ? "w-[100px] h-auto"
                      : "w-[300px] lg:w-[500px] h-auto"
                  } rounded-[10px]`}
                />
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  const ProjectOverview = ({ project, onClose }) => {
    if (!project) return null;

    const { title, description, image, link } = project;

    return (
      <div className="fixed inset-0  bg-opacity-50 flex justify-center items-center z-50 backdrop-blur-lg">
        <div className="flex flex-col p-4 bg-white border border-[#dedcdc] rounded-[10px] shadow-lg w-[90%] lg:w-[50%]">
          <button
            onClick={onClose}
            className="self-end text-black font-bold text-lg cursor-pointer"
          >
            ✕
          </button>
          <div className="flex flex-col font-secondary justify-center items-center gap-2 decoration-0 overflow-hidden">
            <div className="flex gap-4">
              <MoreImages images={image} title={title} />
            </div>
            {/* )} */}
            <div className="w-full flex justify-between items-center">
              <p className="text-[1.5rem] font-bold">{title}</p>
              {link && (
                <a
                  href={link}
                  target="_blank"
                  className="text-[1rem] text-secondary underline font-semibold"
                >
                  View Project
                </a>
              )}
            </div>
            <p className="text-[1rem] font-normal text-justify w-full lg:max-h-[180px] h-[250px] overflow-auto">
              {description}
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="w-full bg-[#f1f1f1] flex flex-col justify-center items-center pt-8 font-primary">
        <header className="bg-white p-2.5 flex justify-between items-center text-center w-[90%] lg:w-[80%] border border-gray-500 rounded-xl shadow-lg sticky top-[2%] z-10">
          <div className="flex items-center gap-2">
            <img
              src={profilePicture}
              alt="profile picture"
              className="w-[40px] lg:w-[50px] h-[40px] lg:h-[50px] rounded-xl "
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
        <section className="flex flex-col gap-8 w-[90%] lg:w-[80%] pt-[7%]">
          <p>👋 Hey there, nice to meet you</p>
          <p className="text-[2rem] lg:text-[4rem] font-extrabold leading-[1]">
            I am a{" "}
            <span className="text-secondary font-secondary">website</span> and{" "}
            <span className="text-secondary font-secondary">mobile app</span>{" "}
            developer
          </p>
          <p className="w-full text-justify lg:w-[70%]">
            I have a Computer Science degree and skills in HTML, CSS,
            JavaScript, React, React Native . I am eager to contribute to
            innovative projects and further develop my professional skills.
          </p>
          <TalkButton customStyle={"w-max"} />
        </section>
        <section
          id="my-works"
          className="w-full mt-[7%] flex flex-col gap-6 relative"
        >
          <div className="flex w-full items-center gap-1">
            <h1 className="text-4xl pl-4 font-semibold">My Works</h1>
            <div className="h-[5px] w-40 bg-black"></div>
          </div>
          <div className="w-full flex overflow-x-auto gap-4 p-4 [scrollbar-width:none] [-ms-overflow-style:none] ">
            {projectData.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
          <a
            onClick={() => decIndex(index)}
            href={index <= 0 ? `#1` : `#${index}`}
            className="absolute hidden lg:flex items-center p-2 left-5 top-[50%] bg-white rounded-full shadow-lg cursor-pointer hover:bg-[#f1f1f1]"
          >
            <span class="material-symbols-outlined">arrow_back</span>
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
            <span class="material-symbols-outlined">arrow_forward</span>
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
