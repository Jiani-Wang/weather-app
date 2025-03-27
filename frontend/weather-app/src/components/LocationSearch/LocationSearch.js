import React, { useState } from "react";
import "./LocationSearch.css";

function LocationSearch({ onSelectCity }) {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");

  const handleSearch = () => {
    if (input.trim()) {
      onSelectCity(input.trim());
      setIsOpen(false);
      setInput("");
    }
  };

  return (
    <div className="location-search-container">
      <div className="search-trigger" onClick={() => setIsOpen(true)}>
        Search Weather <span className="icon"></span>
      </div>

      {isOpen && (
        <div className="search-modal">
          <div className="modal-header">
            <span onClick={() => setIsOpen(false)}>Close ❎</span>
          </div>

          <input
            type="text"
            placeholder="Enter city name"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          />

          <button className="search-btn" onClick={handleSearch}>
            Search
          </button>
        </div>
      )}
    </div>
  );
}

export default LocationSearch;
