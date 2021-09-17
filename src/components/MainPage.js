import React from "react";
import Fade from "react-reveal/Fade";

const MainPage = (props) => {
  return (
    <>
      <div className="books">
        {props.items.map((item, index) => {
          const {
            volumeInfo: {
              title,
              authors,
              categories,

              publisher,
              publishedDate,
              industryIdentifiers,
              imageLinks: { thumbnail },
            },
          } = item;

          return (
            <Fade bottom>
              <div className="book-container">
                <ul>
                  <li key={index}>
                    <div className="book-info-left">
                      <img
                        src={thumbnail ? thumbnail : "pic not found"}
                        alt="pic"
                        height="180px"
                        width="150px"
                      />
                      <div className="stars">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                      </div>

                      <div className="book-info-right">
                        <h2> {title} </h2>
                        <span className="genre">
                          <i className="fas fa-book">{categories}</i>
                        </span>
                        <h3>by {authors}</h3>
                        <p className="details-info">
                          {publisher} <br />
                          Pub. Date: {publishedDate} <br />
                          {industryIdentifiers[0].type}:{" "}
                          {industryIdentifiers[0].identifier}
                          <br />
                          {industryIdentifiers[1]
                            ? industryIdentifiers[1].type
                            : ""}
                          {industryIdentifiers[1]
                            ? industryIdentifiers[1].identifier
                            : ""}
                        </p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </Fade>
          );
        })}
      </div>
    </>
  );
};

export default MainPage;
