import LatestBanner from "../component/latesNews/LatestBanner";
import BlogCard from "../component/BlogCard.jsx";
const LatestNews = () => {
  const blogcardData = [
    {
      imageUrl: "images/latestNews/img-1.jpg",
      title: "Better future for children lavale village, pune",
      date: "Feb 2020",
      paragraph:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      read: "/"
    },
    {
      imageUrl: "images/latestNews/img-2.jpg",
      title: "Better future for children lavale village, pune",
      date: "Feb 2020",
      paragraph:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      read: "/"
    },
    {
      imageUrl: "images/latestNews/img-3.jpg",
      title: "Better future for children lavale village, pune",
      date: "Feb 2020",
      paragraph:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      read: "/"
    }
  ];
  return (
    <div>
      <LatestBanner />
      <section className="pt-100 pb-100">
        <div className="container">
          <div className="row">
            {blogcardData.map((blogcardData, index) => (
              <div className="col-md-4">
                <BlogCard key={index} {...blogcardData} />
              </div>
            ))}
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default LatestNews;
