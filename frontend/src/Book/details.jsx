import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./details.css";

const Details = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Extract search params
  const params = new URLSearchParams(location.search);
  const category = params.get("category");
  const author = params.get("author");

  // Book data for demo
  const booksData = [
    {
      id: 1,
      title: "Computer fundamentals",
      branch: "CME",
      sem: "SEM1",
      image: "/image/CF.jpeg",
    },
    {
      id: 2,
      title: "C Programming",
      branch: "CME",
      sem: "SEM1",
      image: "/image/C .jpeg",
    }
  ];

  // Filter books based on search
  const filteredBooks = booksData.filter(
    (book) => book.branch === category && book.sem === author
  );

  return (
    <div className="details-container">
      <button className="back-btn" onClick={() => navigate(-1)}>⬅ Back</button>
      <h2>Results for {category} - {author}</h2>

      <div className="books-list">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <div className="book-card" key={book.id}>
              <img src={book.image} alt={book.title} />
              <h3>{book.title}</h3>
              <p>{book.branch} | {book.sem}</p>
            </div>
          ))
        ) : (
          <p>No books found</p>
        )}
      </div>
    </div>
  );
};

export default Details;
