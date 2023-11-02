import React from "react";

const Loading = ({ item }) => {
  return [...Array(item).keys()].map((key) => (
    <div
      key={key}
      className="animate-pulse rounded-sm border overflow-hidden shadow-md"
    >
      <div className="bg-gray-300 h-56"></div>
      <div className="flex bg-white text-xs py-[14px] px-4 justify-between items-center">
        <div className="flex gap-2 items-center justify-center">
          <div className="flex flex-col gap-2">
            <div className="bg-gray-300 w-20 rounded-lg h-2"></div>
            <div className="bg-gray-300 w-16 h-2 rounded-lg"></div>
          </div>
        </div>
        <div className="bg-gray-300 w-10 h-2 rounded-lg"></div>
      </div>
    </div>
  ));
};

export default Loading;
