/* eslint-disable jsx-a11y/alt-text */
import React from "react";

function TopBar() {
  return (
    <>
      <div className="max-h-80 overflow-hidden">
        <img
          className="w-full max-h-full max-w-full min-w-full min-h-full "
          src="img/top.png"
        ></img>
      </div>
      <div className="py-0 px-16">
        <div className="flex items-center">
          <div className="-mt-36 w-44 h-44 border-8 border-white rounded-2xl max-md:-mt-20 max-md:w-32 max-md:h-32 mb-4">
            <button className="">
              <img className="rounded" src="img/top_button.png"></img>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default TopBar;
