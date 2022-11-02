import React from "react";

const BannerItem = ({ slide }) => {
  const { img, prev, id, next } = slide;
  return (
    <div id={id} className="carousel-item relative w-full">
      <div className="carousel-img">
        <img src={img} alt="" className="w-full rounded-xl" />
      </div>
      <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
        <a href={`#${prev}`} className="btn btn-circle mr-5">
          ❮
        </a>
        <a href={`#${next}`} className="btn btn-circle">
          ❯
        </a>
      </div>
      <div className="absolute flex justify-start transform -translate-y-1/2 left-5 right-5 bottom-1/2">
        <h1 className="text-5xl text-white">
          Affordable Price
          <br />
          For Car
          <br />
          Servicing
        </h1>
      </div>
      <div className="absolute flex justify-start transform -translate-y-1/2 left-5 right-5 top-1/2">
        <h1 className="text-white w-1/2">
          There are many variations of passages of available, but the majority
          have suffered alteration in some form
        </h1>
      </div>
    </div>
  );
};

export default BannerItem;
