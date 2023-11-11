import PropTypes from "prop-types";

const MyPostCard = ({
  title,
  description,
  author,
  date,
  postLink,
  postImg,
}) => {
  return (
    <div className="post-card">
      <img className="post-image" src={postImg} alt="post image" />
      <div className="post-content">
        <h1 className="post-title">{title}</h1>
        <p className="post-description">{description}</p>
      </div>
      <div className="post-metadata">
        <span className="post-author">
          posted by <strong>{author}</strong>
        </span>
        <span className="post-date">
          last updated: <strong>{date}</strong>
        </span>
        <a className="post-link" href={postLink}>
          Read More
        </a>
      </div>
    </div>
  );
};

// * not necessary
MyPostCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  postLink: PropTypes.string.isRequired,
  postImg: PropTypes.string.isRequired,
};

export default MyPostCard;
