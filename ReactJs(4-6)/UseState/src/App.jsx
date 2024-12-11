import React, { useState } from "react";
import { AnimalList } from "./data";

const State = () => {
  // const[state , setState] = useState(0)

  // state = currentState
  // setState = function Upadate the current state
  // 0:initialValue

  const [index, setIndex] = useState(0);

  console.log(index);

  console.log(AnimalList);

  // let index = 0

  // console.log(index);

  const handleClick = () => {
    //     // index += 1
    //     // index = index + 1
    //     // setIndex(index + 1)
    //     // setIndex(index + 1)
    //     setIndex(prevState => prevState + 1)
    //     // setIndex(prevState => prevState + 1)
  };

  const handleNext = () => {
    if (index == 9) {
      setIndex(0);
      console.log('Next Btn')
    } else {
      setIndex((prevState) => (prevState + 1));
    }
  };
  const handlePrev = () => {
    if (index > 0) {
      console.log("Prev Btn");

      setIndex((prevState) => prevState - 1);
    }
  };

  const List = [AnimalList[index]];

  return (
    <div className="">
      <h1 className="bg-green-500 text-2xl text-center">
        This is UseState.
      </h1>
      <div className="flex justify-center">
        <div>
          <button className="bg-green-300 p-2 rounded-sm" onClick={handlePrev}>Previous</button>
        </div>
        {List.map((item) => {
          return (
            <>
              {/* Hello world */}
              <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <img
                    className="rounded-t-lg h-52 w-full object-cover object-top"
                    src={item.image}
                    alt=""
                  />
                </a>
                <div className="p-5">
                  <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {item.name}
                    </h5>
                  </a>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {item.description}
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Read more
                    <svg
                      className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </>
          );
        })}
        <div>
          <button className="bg-green-300 p-2 rounded-sm" onClick={handleNext}>Next</button>
        </div>
      </div>
    </div>
  );
};

export default State;

