import React from "react";

const Book = (props) => {
  const { title, author, work, age, img } = props;

  const clickHandler = () => {
    console.log(title);
  };

  const complexExample = (autherData) => {
    console.log(autherData);
  };

  return (
    <div>
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
    </div>
  );
};

export default Book;
