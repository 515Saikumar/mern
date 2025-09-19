import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./books.css";

const Books = () => {
  const [category, setCategory] = useState("");
  const [author, setAuthor] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    // ✅ Redirect to details page with params
    navigate(`/details?category=${category}&author=${author}`);
  };

  return (
    <div className="main-container">
      <h1>Book Search</h1>
      <form className="search-form" onSubmit={handleSearch}>
        {/* Category Dropdown */}
        <select value={category} onChange={(e) => setCategory(e.target.value)} required>
          <option value="">Select Branch</option>
          <option value="CME">CME</option>
          <option value="AI">AI</option>
          <option value="AIML">AIML</option>
          <option value="ECE">ECE</option>
        </select>

        {/* Author Dropdown */}
        <select value={author} onChange={(e) => setAuthor(e.target.value)} required>
          <option value="">Select Sems</option>
          <option value="SEM1">SEM1</option>
          <option value="SEM3">SEM3</option>
          <option value="SEM4">SEM4</option>
          <option value="SEM5">SEM5</option>
          <option value="SEM6">SEM6</option>
        </select>

        {/* Search Button */}
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Books;
