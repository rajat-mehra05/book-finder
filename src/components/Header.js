import React, { useState } from "react";
import "../App.css";

const Header = ({ search }) => {
  const [input, setInput] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    search(input);
    setInput("");
  };

  return (
    <>
      <div className="title">
        BOOK <span>FINDER</span>
      </div>
      <form className="searchBox" onSubmit={submitHandler}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Search books here"
        />
        <button type="submit">
          {" "}
          <i className="fa fa-search"></i>{" "}
        </button>
      </form>
    </>
  );
};

export default Header;
