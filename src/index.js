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
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => (
  <img
    className="image"
    src="https://m.media-amazon.com/images/I/51rErkw+OyL.jpg"
    alt=""
  />
);
const Title = () => <p>This is a image title</p>;
const Author = () => (
  <a href="" style={{ color: "red" }}>
    Nouman
  </a>
);

ReeactDom.render(<Booklist />, document.getElementById("root"));
