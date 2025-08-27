import React, { useCallback } from "react";
import Header from "./components/Header";
import MainPage from "./components/MainPage";
import Spinner from "./components/Spinner";
import { useBookSearch } from "./hooks/useBookSearch";

const App = () => {
  const { books, loading, error, hasSearched, searchBooks } = useBookSearch();

  const search = useCallback(
    (input) => {
      searchBooks(input);
    },
    [searchBooks]
  );

  return (
    <>
      <div>
        <Header search={search} />
      </div>
      {loading && <Spinner />}
      {error && <div className="error">{error}</div>}
      {!loading && !error && hasSearched && books.length === 0 && (
        <div className="empty-state">
          No books found. Try a different search term.
        </div>
      )}
      <MainPage items={books} />
    </>
  );
};

export default App;
