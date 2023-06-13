import "./BlogCard.css";
const BlogCard = ({ imageUrl, title, date, paragraph, read }) => {
  return (
    <div className="blog-card">
      <img src={imageUrl} alt="Milestone" className="blog-image" />
      <div className="blog-content">
        <p className="blog-date">{date}</p>
        <a className="blog-title f-20 fw-700">{title}</a>
        <p className="blog-paragraph">{paragraph}</p>
        <a href={read} className="blog-read">
          Read More
        </a>
      </div>
    </div>
  );
};

export default BlogCard;
