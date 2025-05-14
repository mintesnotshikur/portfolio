const ProjectCard = ({ id, title, image, link, description, onClick }) => {
  return (
    <div
      className="min-w-[325px] flex flex-col flex-shrink-0 gap-4 p-[15px] bg-white border border-[#dedcdc] rounded-[10px] shadow-lg cursor-pointer"
      onClick={onClick}
      id={id}
    >
      <div className="flex flex-col justify-center items-center gap-4 decoration-0 overflow-hidden rounded-[5px]">
        <img
          src={image[0]}
          alt={title}
          className={`${
            title === "Rosary Prayer App" ? "w-[75px]" : "w-[300px]"
          } h-auto rounded-[5px] hover:scale-[1.05]`}
        />
        <p className="text-[1rem] font-normal">{title}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
