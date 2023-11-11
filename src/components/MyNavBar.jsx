import "../styles/nav-bar.css";
import PropTypes from "prop-types";

const MyNavBar = ({ searchText, setSearchText, onSearch }) => {
  return (
    <header className="nav-bar">
      <a className="nav-title" href="https://eeplus.ntuee.org/home">
        My Blogger
      </a>
      <div className="nav-main">
        <form className="nav-search-form">
          <input
            className="nav-search-input"
            type="text"
            placeholder="Search For Posts"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="nav-search-submit"
            onClick={(e) => {
              e.preventDefault();
              onSearch();
            }}
          >
            &#x2315;
          </button>
        </form>
        <nav>
          <ul className="nav-menu">
            <li className="nav-link">
              <a href="https://eeplus.ntuee.org/home">New Post</a>
            </li>
            <li className="nav-link">
              <a href="https://eeplus.ntuee.org/home">Log In</a>
            </li>
            <li className="nav-link">
              <a href="https://eeplus.ntuee.org/home">Sign Up</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

// * not necessary
MyNavBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  setSearchText: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
};

export default MyNavBar;
