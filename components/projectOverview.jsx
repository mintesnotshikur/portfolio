import MoreImages from "../components/moreImage.jsx";

const ProjectOverview = ({ project, onClose }) => {
  if (!project) return null;

  const { title, description, image, link } = project;

  return (
    <div
      className="fixed inset-0 bg-opacity-50 flex justify-center items-center z-50 backdrop-blur-lg font-secondary animate-fade-in-project"
      onClick={onClose}
    >
      <div
        className="flex flex-col p-4 bg-white border border-[#dedcdc] rounded-[10px] shadow-lg w-[90%] lg:w-[50%] h-max"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center">
          <p className="text-[1.5rem] font-bold">{title}</p>
          <button
            onClick={onClose}
            className="text-black font-bold text-lg cursor-pointer"
          >
            ✕
          </button>
        </div>
        <div className="flex flex-col justify-center items-center gap-2 decoration-0 overflow-hidden">
          <MoreImages images={image} title={title} />
          {link && (
            <a
              href={link}
              target="_blank"
              className="text-[1rem] self-end min-w-max text-secondary underline font-semibold"
            >
              View Project
            </a>
          )}
        </div>
        <p className="text-[1rem] font-normal w-full lg:max-h-[180px] h-[250px] overflow-auto">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ProjectOverview;
