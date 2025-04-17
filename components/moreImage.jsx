import ViewImage from "./viewImage.jsx";
import { useState } from "react";

const MoreImages = ({ images, title }) => {
  const [viewImage, setViewImage] = useState(null);
  const [isMobileApp, setIsMobileApp] = useState(false);
  return (
    <div className="w-full flex overflow-x-auto gap-4 p-4 ">
      {viewImage && (
        <ViewImage
          isMobileApp={isMobileApp}
          image={viewImage}
          onClose={() => setViewImage(null)}
        />
      )}
      {images.map((image, index) => {
        return (
          <div
            key={index}
            className="flex flex-col flex-shrink-0 gap-4  bg-white border border-[#dedcdc] rounded-[10px] shadow-lg"
          >
            <div className="w-full flex flex-col justify-center items-center gap-4 decoration-0 overflow-hidden">
              <img
                src={image}
                className={`${
                  title === "Rosary Prayer App"
                    ? "w-[100px] h-auto"
                    : "w-[257px] lg:w-[500px] h-auto"
                } rounded-[10px]`}
                onClick={() => {
                  setIsMobileApp(title === "Rosary Prayer App");
                  setViewImage(image);
                }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MoreImages;
