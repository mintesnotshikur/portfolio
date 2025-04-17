import React from "react";

function ViewImage({ isProfile, isMobileApp, image, onClose }) {
  return (
    <div
      className={`fixed inset-0 flex justify-center items-center z-50 font-secondary w-full h-screen ${
        isProfile && "backdrop-blur-lg backdrop-brightness-50"
      }`}
      onClick={onClose}
    >
      <img
        src={image}
        alt="image"
        className={`${
          isProfile
            ? "w-[400px] lg:w-[600px]"
            : isMobileApp
            ? "w-[280px]"
            : "w-[1000px]"
        } rounded-lg animate-fade-in-project shadow-lg`}
      />
    </div>
  );
}

export default ViewImage;
