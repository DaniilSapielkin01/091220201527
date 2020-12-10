import React, { useState, useEffect } from "react";
import { AddPost } from "./AddPost";

import stl from "./ProfilePosts.module.css";

export const ProfilePosts = ({ posts }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(posts);
  }, []);

  const addPost = (value) => {
    if (value.trim().length > 0) {
      let firstName = prompt("Введите свое имя", "Гость");
      let copyDate = [...data];
      const date = new Date();
      let options = {
        day: "numeric",
        month: "long",
        year: "numeric",
      };

      copyDate = [
        ...copyDate,
        {
          firstName: firstName,
          message: value,
          date: `${date.toLocaleDateString("ru-RU", options)}`,
        },
      ];
      setData(copyDate);
    }
  };

  return (
    <>
      {data ? (
        <div className={stl.comments}>
          {data.map((comment, id) => (
            <div key={id} className={stl.comment}>
              <div className={stl.commentName}>
                {comment.firstName} {comment.lastName}
                <span className={stl.commentDate}>{comment.date}</span>
              </div>
              <div className={stl.message}>
                {comment.message}
                <div className={stl.triangle}></div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        "Загрузка ..."
      )}

      <AddPost addPost={addPost} />
    </>
  );
};
