import React, { useState } from "react";
import Header from "./components/Header";
import MainPage from "./components/MainPage";
import axios from "axios";

const App = () => {
  const [books, setBooks] = useState([]);

  let API_URL = `https://www.googleapis.com/books/v1/volumes`;

  const fetchBooks = async (text) => {
    const res = await axios.get(`${API_URL}?q=${text}`);
    /* console.log(res.data); */
    setBooks(res.data.items);
  };

  const search = (input) => {
    fetchBooks(input);
  };

  return (
    <>
      <div>
        <Header search={search} />
      </div>
      <MainPage items={books} />
    </>
  );
};

export default App;
