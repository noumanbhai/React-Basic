import React from "react";
import ReeactDom from "react-dom";
//   css
import "./style.css";
import { data } from "./components/Books";

const Booklist = () => {
  return (
    <section className="booklist">
      {data.map((book, index) => {
        return <Book key={index} {...book}></Book>;
      })}
    </section>
  );
};
const clickHandler = (e) => {
  console.log(e);
  // alert(e.target);
};
const complexExample = (author) => {
  console.log(author);
};
const Book = (props) => {
  // same work
  // const Book = (props) => {
  const { title, author, work, age, img } = props;
  return (
    <article
      className="book"
      onMouseOver={() => {
        console.log(title);
        // alert(title);
      }}
    >
      <img src={img} alt="this image not found" />
      <p onClick={() => console.log(title)}>{title}</p>
      <p>{author}</p>
      <p>{work}</p>
      <p>{age}</p>
      <button onClick={clickHandler}>Click</button>
      <button onClick={() => complexExample(author)}>Comples</button>
    </article>
  );
};

ReeactDom.render(<Booklist />, document.getElementById("root"));
