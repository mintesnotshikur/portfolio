const LinkButton = ({ href, icon }) => {
  return (
    <button className="flex items-center border border-[#dedcdc] rounded-[10px] shadow-lg bg-[#f1f1f1] text-black text-lg font-semibold cursor-pointer hover:bg-[#d6d4d4] ">
      <a href={href} target="_blank" className="flex items-center p-1.5 gap-1">
        <img src={icon} className="w-[25px] h-[25px]" />
      </a>
    </button>
  );
};

export default LinkButton;
