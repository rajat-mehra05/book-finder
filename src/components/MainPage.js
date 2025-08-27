import { motion } from "framer-motion";
import React from "react";

const MainPage = React.memo(({ items }) => {
  if (!items || items.length === 0) {
    return null;
  }

  return (
    <>
      <div className="books">
        {items.map((item, index) => {
          const {
            id,
            volumeInfo: {
              title,
              authors,
              categories,
              publisher,
              publishedDate,
              industryIdentifiers,
              imageLinks,
            },
          } = item;

          return (
            <motion.div
              key={id || index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="book-container">
                <ul>
                  <li>
                    <div className="book-info-left">
                      <img
                        src={imageLinks ? imageLinks.thumbnail : "No-thumbnail"}
                        alt={title || "Book cover"}
                        height="180px"
                        width="150px"
                        loading="lazy"
                      />
                      <div className="stars">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                      </div>

                      <div className="book-info-right">
                        <h2>{title || "Unknown Title"}</h2>
                        {categories ? (
                          <span className="genre">
                            <i className="fas fa-book">&nbsp;{categories}</i>
                          </span>
                        ) : (
                          ""
                        )}
                        <h3>
                          by {authors ? authors.join(", ") : "Unknown Author"}
                        </h3>
                        <p className="details-info">
                          {publisher || "Unknown Publisher"} <br />
                          Pub. Date: {publishedDate || "Unknown"} <br />
                          {industryIdentifiers && industryIdentifiers[0] ? (
                            <>
                              {industryIdentifiers[0].type}:{" "}
                              {industryIdentifiers[0].identifier}
                              <br />
                            </>
                          ) : (
                            ""
                          )}
                          {industryIdentifiers && industryIdentifiers[1] ? (
                            <>
                              {industryIdentifiers[1].type}:{" "}
                              {industryIdentifiers[1].identifier}
                              <br />
                            </>
                          ) : (
                            ""
                          )}
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </motion.div>
          );
        })}
      </div>
    </>
  );
});

MainPage.displayName = "MainPage";

export default MainPage;
