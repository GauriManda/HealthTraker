import React, { useEffect, useState } from "react";
import "./QuoteBox.css"; // create this file for styling

const QuoteBox = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  const fetchQuote = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/quote');
      const data = await response.json();
      console.log(data); // Or setState here
    } catch (error) {
      console.error("Failed to fetch quote:", error);
    }
  };
  

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="quote-box">
      <blockquote className="quote-text">“{quote}”</blockquote>
      <p className="quote-author">— {author}</p>
      <button className="quote-button" onClick={fetchQuote}>
        New Quote
      </button>
    </div>
  );
};

export default QuoteBox;
