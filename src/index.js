import React from "react";
import ReeactDom from "react-dom";
//   css
import "./style.css";

const Books = [
  {
    title: "This is a image title",
    author: "Nouman",
    work: "Developer",
    age: 55,
    img: "https://m.media-amazon.com/images/I/51rErkw+OyL.jpg",
  },
  {
    title: "This is a book 2 title",
    author: "Ehsan",
    work: "Programmer",
    age: 88,
    img: "https://images-na.ssl-images-amazon.com/images/I/51Mx2wNFgKL._SX379_BO1,204,203,200_.jpg",
  },
];
const names = ["nouman", "ehsan", "shoaib"];
const newNames = names.map((name) => {
  return <p>{name}</p>;
});
const Booklist = () => {
  return <section className="booklist">{newNames}</section>;
};

const Book = (props) => {
  // same work
  // const Book = (props) => {
  const { title, auth, work, age, img } = props;
  return (
    <article className="book">
      <img src={img} alt="this image not found" />
      <p>{props.title}</p>
      <p>{props.auth}</p>
      <p>{props.work}</p>
      <p>{props.age}</p>
    </article>
  );
};

ReeactDom.render(<Booklist />, document.getElementById("root"));
