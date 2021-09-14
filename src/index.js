import React from "react";
import ReeactDom from "react-dom";
//   css
import "./style.css";

const Booklist = () => {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
};

const Book = () => {
  const title = "This is a image title";
  const author = "Nouman";
  return (
    <article className="book">
      <img
        className="image"
        src="https://m.media-amazon.com/images/I/51rErkw+OyL.jpg"
        alt=""
      />
      <p>{title}</p>
      <p>{author}</p>
    </article>
  );
};

ReeactDom.render(<Booklist />, document.getElementById("root"));
