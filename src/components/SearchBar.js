import React from "react";
import { FaSearch } from "react-icons/fa";

function SearchBar() {
  return (
    <div class="flex flex-grow flex-shrink justify-center w-full">
      <div class="flex flex-row items-stretch xl:w-96 rounded-2xl overflow-hidden bg-gray-100  outline outline-0 outline-gray-400 focus-within:outline-1">
        <input
          type="text"
          class="flex-auto block w-full px-4 py-2.5 text-base font-normal text-gray-700 bg-inherit outline-none border-none"
          placeholder="Search"
          aria-label="Search"
        />
        <div className="flex items-center px-4 border-l border-gray-300 hover:bg-gray-300 cursor-pointer">
          <FaSearch className="fill-gray-500" />
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
