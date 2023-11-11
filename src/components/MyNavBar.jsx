import "../styles/nav-bar.css";

const MyNavBar = () => {
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
          />
          <button type="submit" className="nav-search-submit">
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

export default MyNavBar;
