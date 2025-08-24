import React, { useState } from "react";

const items = ["Apple", "Banana", "Orange", "Grape"];

const FilterList = () => {
  const [query, setQuery] = useState("");
  const filtered = items.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <label>
        検索:
        <input
          aria-label="検索"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </label>
      <ul>
        {filtered.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default FilterList;
