import axios from "axios";
import { useCallback, useState } from "react";

const API_URL = `https://www.googleapis.com/books/v1/volumes`;

export const useBookSearch = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [hasSearched, setHasSearched] = useState(false);

  const searchBooks = useCallback(async (text) => {
    if (!text.trim()) {
      setBooks([]);
      setError(null);
      setHasSearched(false);
      return;
    }

    setLoading(true);
    setError(null);
    setHasSearched(true);

    try {
      const res = await axios.get(
        `${API_URL}?q=${encodeURIComponent(text)}&maxResults=20`
      );
      setBooks(res.data.items || []);
    } catch (err) {
      console.error("Error fetching books:", err);
      setError("Failed to fetch books. Please try again.");
      setBooks([]);
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    books,
    loading,
    error,
    hasSearched,
    searchBooks,
  };
};
