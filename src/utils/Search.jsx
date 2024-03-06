import { useState } from "react";

function SearchForm() {
  const [search, setSearch] = useState("");

  return (
    <form>
      <input
        type="text"
        name=""
        id=""
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button>Search</button>
    </form>
  );
}

export default SearchForm;
