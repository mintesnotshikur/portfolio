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
                    : "w-[257px] lg:w-[500px] h-auto"
                } rounded-[10px]`}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MoreImages;
