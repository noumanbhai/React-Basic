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

const Booklist = () => {
  return (
    <section className="booklist">
      <Book
        title={firstBook.title}
        auth={firstBook.author}
        work={firstBook.work}
        ages={firstBook.age}
        img={firstBook.img}
      />
      <Book title={firstBook.title} ages={firstBook.age} img={firstBook.imgs} />
      {/* <Book title="book" page={22} /> */}
    </section>
  );
};

const Book = (props) => {
  // console.log(props);

  return (
    <article className="book">
      <img src={props.img} alt="this image not found" />
      <p>{props.title}</p>
      <p>{props.auth}</p>
      <p>{props.work}</p>
      <p>{props.ages}</p>
    </article>
  );
};

ReeactDom.render(<Booklist />, document.getElementById("root"));
