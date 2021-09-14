import React from "react";
import ReeactDom from "react-dom";
//   css
import "./style.css";

const firstBook = {
  title: "This is a image title",
  author: "Nouman",
  work: "Developer",
  age: 55,
  img: "https://m.media-amazon.com/images/I/51rErkw+OyL.jpg",
};
const secndBook = {
  title: "This is a book 2 title",
  author: "Ehsan",
  work: "Programmer",
  age: 88,
  img: "https://images-na.ssl-images-amazon.com/images/I/51Mx2wNFgKL._SX379_BO1,204,203,200_.jpg",
};

const Booklist = () => {
  return (
    <section className="booklist">
      <Book
        title={firstBook.title}
        auth={firstBook.author}
        work={firstBook.work}
        age={firstBook.age}
        img={firstBook.img}
      />
      <Book
        title={secndBook.title}
        auth={secndBook.author}
        work={secndBook.work}
        age={secndBook.age}
        img={secndBook.img}
      />
      {/* <Book title="book" page={22} /> */}
    </section>
  );
};

const Book = ({ title, auth, work, age, img }) => {
  // same work
  // const Book = (props) => {
  // const { title, auth, work, age, img } = props;
  return (
    <article className="book">
      <img src={img} alt="this image not found" />
      <p>{title}</p>
      <p>{auth}</p>
      <p>{work}</p>
      <p>{age}</p>
    </article>
  );
};

ReeactDom.render(<Booklist />, document.getElementById("root"));
