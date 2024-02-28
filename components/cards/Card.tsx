import { CardDetails } from "@/constants";
import Image from "next/image";
import { MdArrowDropDown } from "react-icons/md";
import { TiTick } from "react-icons/ti";

const Card = () => {
  return (
    <div className="w-full flex flex-col gap-6 py-3 ">
      {CardDetails.filter((card, index) => index <= 2).map((card) => (
        <div
          key={card.cardId}
          className="flex flex-row hover:bg-gray-100 rounded-md">
          {/* this div is for image  */}
          <div className="w-1/4 p-4">
            <div className="rounded-full border-2 border-stone-200 w-6 h-6 flex items-center justify-center ">
              {card.cardId}
            </div>
            <Image
              src={card.imageUrl}
              alt="card-image"
              height={500}
              width={500}
              className="md:p-5"
            />
            <p className="w-full text-center text-stone-600">{card.label}</p>
          </div>
          {/* this div is for title and description */}
          <div className="w-1/2 p-3">
            <h1 className="font-bold mb-2 text-[#4b5665] md:text-base text-sm">
              {card.title}
              <span className="font-light md:text-base text-sm">
                {card.description}
              </span>
            </h1>
            <p className="font-bold md:text-base text-sm text-[#4B5665]">
              Main highlights
            </p>
            <p className="p-5 font-light md:text-base text-sm">
              {card.highlights}
            </p>
            <p className="flex flex-row items-center text-blue-500 cursor pointer md:text-base text-sm">
              Show more <span>{<MdArrowDropDown />}</span>
            </p>
          </div>
          {/* this div is for rating and button */}
          <div className="w-1/4 flex flex-col justify-between items-center p-2 ">
            <div className="md:w-32 md:h-32 w-28 h-28 bg-[#F3F9FF] flex flex-col text-center rounded-b-lg md:text-base text-sm">
              <p className="text-[#074786] md:text-4xl p-3  text-xl">
                {card.rating}
              </p>
              <p className="text-[#074786]">{card.remark}</p>
              <p className="text-yellow-500">{card.stars}</p>
            </div>
            <button className="bg-[#1B88F4] px-4 py-2 w-full rounded-xl md:h-14 md:text-xl text-white hover:bg-blue-600">
              View
            </button>
          </div>
        </div>
      ))}
      {/* this is for 4th card */}
      {CardDetails.filter((card, index) => index === 3).map((card) => (
        <div>
          <div
            key={card.cardId}
            className="flex flex-row hover:bg-gray-100 rounded-md">
            {/* this div is for image  */}
            <div className="w-1/4 p-4 ">
              <div className="rounded-full border-2 border-stone-200 w-6 h-6 flex items-center justify-center ">
                {card.cardId}
              </div>
              <Image
                src={card.imageUrl}
                alt="card-image"
                height={500}
                width={500}
                className="md:p-5"
              />
              <p className="w-full text-center text-stone-600 md:text-base text-sm">
                {card.label}
              </p>
            </div>
            {/* this div is for title and description */}
            <div className="w-1/2 p-3">
              <h1 className="font-bold md:text-base text-sm mb-2 text-[#4b5665]">
                {card.title}
                <span className="font-light">{card.description}</span>
                <p className="text-[#074786] bg-[#F3F9FF] w-20 rounded-lg p-2">
                  26% Off
                </p>
              </h1>
              <p className="font-bold text-[#4B5665] md:text-base text-sm">
                Main highlights
              </p>
              <ul className="bg-[#FFF4ED] p-4 rounded-lg flex flex-col gap-2 md:text-base text-sm">
                <li>
                  <span className="bg-white text-blue-500 px-3 py-1 rounded-lg">
                    9.9
                  </span>{" "}
                  Building Response
                </li>
                <li>
                  <span className="bg-white text-blue-500 px-3 py-1 rounded-lg">
                    8.9
                  </span>{" "}
                  Cool
                </li>
                <li>
                  <span className="bg-white text-blue-500 px-3 py-1 rounded-lg">
                    8.9
                  </span>{" "}
                  Docs
                </li>
              </ul>
              <p>Why we love it</p>
              <ul className="md:text-base text-sm">
                <li className="flex flex-row gap-2 items-center p-2">
                  <TiTick className="bg-blue-100 text-blue-500 rounded-full" />{" "}
                  Documentation
                </li>
                <li className="flex flex-row gap-2 items-center p-2">
                  <TiTick className="bg-blue-100 text-blue-500 rounded-full" />{" "}
                  Easy Use{" "}
                </li>
                <li className="flex flex-row gap-2 items-center p-2">
                  <TiTick className="bg-blue-100 text-blue-500 rounded-full" />{" "}
                  Out Of Box
                </li>
              </ul>
              <p className="flex flex-row items-center text-blue-500 cursor pointer md:text-base text-sm">
                Show more <span>{<MdArrowDropDown />}</span>
              </p>
            </div>
            {/* this div is for rating and button */}
            <div className="w-1/4 flex flex-col justify-between items-center p-2">
              <div className="md:w-32 md:h-32 w-28 h-28 bg-[#F3F9FF] flex flex-col text-center rounded-b-lg md:text-base text-sm">
                <p className="text-[#074786]  text-xl md:text-4xl p-3">
                  {card.rating}
                </p>
                <p className="text-[#074786]">{card.remark}</p>
                <p className="text-yellow-500">{card.stars}</p>
              </div>
              <button className="bg-[#1B88F4] px-4 py-2 w-full rounded-xl md:h-14 md:text-xl text-white hover:bg-blue-600">
                View
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Card;
