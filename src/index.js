import React from "react";
import ReeactDom from "react-dom";
//   css
import "./style.css";
import { data } from "./components/Books";
import NBook from "./components/Book";
import { name } from "./components/Name";
const Booklist = () => {
  console.log(name);
  return (
    <section className="booklist">
      {data.map((book, index) => {
        return <NBook key={index} {...book}></NBook>;
      })}
    </section>
  );
};

ReeactDom.render(<Booklist />, document.getElementById("root"));
