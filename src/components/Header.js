import React, { useCallback, useEffect, useState } from "react";
import "../App.css";

const Header = React.memo(({ search }) => {
  const [input, setInput] = useState("");
  const [debouncedInput, setDebouncedInput] = useState("");

  // Debounce the search input
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedInput(input);
    }, 500); // 500ms delay

    return () => clearTimeout(timer);
  }, [input]);

  // Trigger search when debounced input changes
  useEffect(() => {
    if (debouncedInput) {
      search(debouncedInput);
    }
  }, [debouncedInput, search]);

  const submitHandler = useCallback(
    (e) => {
      e.preventDefault();
      if (input.trim()) {
        search(input);
        setInput("");
      }
    },
    [input, search]
  );

  const handleInputChange = useCallback((e) => {
    setInput(e.target.value);
  }, []);

  return (
    <>
      <div className="title">
        BOOK <span>FINDER</span>
      </div>
      <form className="searchBox" onSubmit={submitHandler}>
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="Search books here"
        />
        <button type="submit">
          <i className="fa fa-search"></i>
        </button>
      </form>
    </>
  );
});

Header.displayName = "Header";

export default Header;
