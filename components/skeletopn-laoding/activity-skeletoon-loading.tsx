import React from "react";

export const CardActivitySkeleton = () => {
  return (
    <div className="flex p-6 rounded-md mb-4 bg-dark-2">
      <div className="w-10 h-10 rounded-full bg-[#262626] mr-3"></div>
      <div className="flex-1">
        <div className="w-2/4 h-3 bg-[#262626] mb-4 rounded-sm"></div>
        <div className="w-full h-3 bg-[#262626] rounded-r-sm"></div>
      </div>
    </div>
  );
};
