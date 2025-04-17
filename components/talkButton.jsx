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

export default TalkButton;
