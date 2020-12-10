import React, { useState } from "react";
import stl from "./ProfilePosts.module.css";

export const AddPost = ({ addPost }) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.currentTarget.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addPost(value);
    setValue("");
  };

  const onKeyUp = (e) => {
    if (e.ctrlKey && e.code === "Enter") {
      addPost(value);
      setValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={stl.addPost}>
        <textarea value={value} onChange={handleChange} onKeyUp={onKeyUp} />
        <button onClick={handleSubmit}>Написать консультанту</button>
      </div>
    </form>
  );
};
