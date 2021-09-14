import React from "react";
import ReeactDom from "react-dom";
//   css
import "./style.css";

const title = "This is a image title";
const author = "Nouman";

const Booklist = () => {
  return (
    <section className="booklist">
      <Book title="book" />
      <Book title="book" work="Developer" age={26} />
      {/* <Book title="book" page={22} /> */}
    </section>
  );
};

const Book = (props) => {
  // console.log(props);

  return (
    <article className="book">
      <img
        className="image"
        src="https://m.media-amazon.com/images/I/51rErkw+OyL.jpg"
        alt=""
      />
      <p>{title}</p>
      <p>{author}</p>
      <p>{props.work}</p>
      <p>{props.age}</p>
    </article>
  );
};

ReeactDom.render(<Booklist />, document.getElementById("root"));
