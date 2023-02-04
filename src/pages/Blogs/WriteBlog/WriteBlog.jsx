import React, { useState } from "react";
import Select from "react-select";
// import { colourOptions } from "../data";
const WriteBlog = () => {
  const colourOptions = [
    { value: "programming", label: "programming" },
    { value: "javascript", label: "javascript" },
    { value: "google", label: "google" },
  ];
  const [selected, setSelected] = useState(null);
  const handleChange = (selectedOption) => {
    setSelected(selectedOption.value);
    console.log(`Option selected:`, selectedOption);
  };
  return (
    <div className="my-16 border-3 shadow-orange-100 shadow-lg p-8 rounded-lg">
      {/* blog area */}
      <div className="my-6">
        <label htmlFor="blogTitle">Title</label>
        <input
          type="text"
          id="blogTitle"
          className="input input-bordered focus-visible:outline-gray-500 transition-all w-full"
        />
      </div>
      <div>
        <label htmlFor="writeBlog">Write Here</label>
        <textarea
          id="writeBlog"
          name="writeBlog"
          placeholder="Write a blog"
          className="textarea visible:bg-orange-500 transition-all focus-visible:outline-gray-500 border-3 textarea-bordered textarea-lg w-full h-64"
        ></textarea>
      </div>
      <div>
        <label htmlFor="blogTag">Tags</label>

        <Select
          // defaultValue={[colourOptions[2], colourOptions[3]]}
          isMulti
          name="colors"
          options={colourOptions}
          className="basic-multi-select focus-visible:outline-gray-500"
          classNamePrefix="select"
          onChange={handleChange}
        />
      </div>
      <div className="flex items-center justify-center my-10">
        <button className="btn btn-success text-white">Create Blog</button>
      </div>
    </div>
  );
};

export default WriteBlog;
