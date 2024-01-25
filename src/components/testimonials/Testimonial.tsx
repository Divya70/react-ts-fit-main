import React from "react";
import { data } from "../../data/data";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import  './Testimonial.css'
import { CaretRightOutlined, CaretLeftOutlined } from "@ant-design/icons";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 4, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};
 const Testimonial = () => {
  return (
    <div className="w-[80%]   mt-8 mb-16 absolute top-[70vh] left-[10vw]   md:relative md:top-0  md:left-0 mx-auto   ">
      <Carousel
        responsive={responsive}
        itemClass="mt-2 "
        customRightArrow={
          <CaretRightOutlined className="max-w-4 text-primary-400 absolute right-4 top-1/2 cursor-pointer bg-red-500 text-xl " />
        }
        customLeftArrow={
          <CaretLeftOutlined className="max-w-4 text-primary-400 absolute left-4 top-1/2 cursor-pointer bg-red-500 text-xl " />
        }
      >
        {data?.map((d) => (
          <>
            <div
              className="mx-4 flex flex-col justify-center  gap-2  rounded-lg bg-gray-50  text-gray-900 shadow-2xl	 "
              key={d?.key}
            >
              <p className="text-center bg-slate-800 p-2 text-white">{d.title}</p>
              <div className="flex  justify-center">
                <img src={d?.imgUrl} className="h-[150px] w-[200px]" loading="lazy" />
              </div>
              <p className="mx-auto w-[80%] mt-2  ">{d?.word}</p>
              <p className="mx-auto w-[80%]  font-bold">gitman</p>
              <div className="mx-auto w-[80%] flex pb-1 ">
                <p className="w-[60%]">{d?.address?.substring(0 ,12)}</p>

                <div dangerouslySetInnerHTML={{ __html: d?.rating}} />

              </div>
            </div>
          </>
        ))}
      </Carousel>
    </div>
  );
};
export default Testimonial