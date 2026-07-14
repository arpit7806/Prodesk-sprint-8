import { useState, useEffect, useRef } from "react";
import { useDebounce } from "../hooks/useDebounce";
import "./SearchBar.css";

function SearchBar({ onSearch }) {
  const [value, setValue] = useState("");
  const debouncedValue = useDebounce(value, 500);
  const isFirstRun = useRef(true);

  useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
      return;
    }
    onSearch(debouncedValue);
  }, [debouncedValue, onSearch]);

  return (
    <form className="search-bar glass-panel" onSubmit={(e) => e.preventDefault()}>
      <svg className="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="11" cy="11" r="7" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
      <input
        type="text"
        placeholder="search movies..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      {value && (
        <button type="button" className="clear-btn" onClick={() => setValue("")}>
          ✕
        </button>
      )}
    </form>
  );
}

export default SearchBar;