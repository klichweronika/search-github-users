import "../styles/Search.scss";
import { SearchIcon } from "../icons-components/SearchIcon";

export const Search = () => {
  return (
    <div className="search">
      <form>
        <div className="search__box">
          <input placeholder="Search GitHub username..." />
          <SearchIcon viewBox="0 0 22 22" className="search-icon" />
          <button type="submit">Search</button>
        </div>
      </form>
    </div>
  );
};
