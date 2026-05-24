import React from "react";

export default function VideoCta() {
  return (
    <div className="relative w-full h-[70vh] overflow-hidden container-site mb-20 rounded-2xl">
      <video
        className="absolute inset-0 h-full object-cover w-full"
        src="https://res.cloudinary.com/dq9ckspti/video/upload/v1779598624/preview_5_rgfngh.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="absolute inset-0 flex flex-col text-center items-center justify-end z-10 py-28">
        <h2 style={{ color: "white" }} className="text-neutral-50 heading-2 md:heading-1 max-w-2xl text-center">
          Escape to stillness, privacy and soul
        </h2>
        <button className="btn btn-primary"> Find Yourself a Room </button>
      </div>
    </div>
  );
}
