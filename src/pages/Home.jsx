import "./home.css";
import Header from "../component/Header.jsx";
import Banner from "../component/Banner.jsx";
import Card from "../component/Card.jsx";
import Card2 from "../component/Card2.jsx";
import Trainers from "../component/Trainers.jsx";
import About from "../component/About.jsx";
import Computational from "../component/Computational.jsx";
import Testimonial from "../component/Testimonial.jsx";
import ExploreMore from "../component/ExploreMore.jsx";
import Cta from "../component/Cta.jsx";
import ContactUs from "../component/ContactUs";
import Footer from "../component/Footer";
import ExploreCards from "../component/ExploreCards";
import Gallery from "../component/Gallery";
export default function Home() {
  const cardData = [
    {
      title: "Highlight One",
      imageUrl: "images/home/card-1.png",
      backgroundColor: "var(--yellow)"
    },
    {
      title: "Highlight Two",
      imageUrl: "images/home/card-2.png",
      backgroundColor: "#7380FF"
    },
    {
      title: "Highlight Three",
      imageUrl: "images/home/card-3.png",
      backgroundColor: "#FF75B3"
    },
    {
      imageUrl: "images/home/card-4.png",
      backgroundColor: "#FFF1F9"
    }
  ];

  return (
    <div>
      <Header />
      <Banner />
      {/* Card 1 */}
      <section className="card1 pt-100">
        <div className="container">
          <div className="row">
            {cardData.map((card, index) => (
              <div className="col-4 col-lg-3" key={index}>
                <Card {...card} />
              </div>
            ))}
          </div>
        </div>
      </section>
      <About />
      <Computational />
      <div className="card2">
        <h2 class="pb-50 fw-600 ff">
          It's Never Too Early - <span>Never Too Late</span>
        </h2>
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <Card2
                Card2title="Discover Elements of AI"
                Card2Para="Getting started with AI"
                Card2imageUrl="images/home/card21.png"
                backgroundColor="#2ECC40"
                Card2age="5+"
                Card2rating="4.7 ★★★★★"
                Card2Price="₹6,999"
                Card2sessions="20"
              />
            </div>
            <div className="col-lg-4">
              <Card2
                Card2title="Fun AI Playgrounds"
                Card2Para="Let’s start from Scratch and Learn AI"
                Card2imageUrl="images/home/cc-1.JPG"
                backgroundColor="#2ECC40"
                Card2age="5+"
                Card2rating="4.7 ★★★★★"
                Card2Price="₹6,999"
                Card2sessions="20"
              />
            </div>
            <div className="col-lg-4">
              <Card2
                Card2title="Meet 2ring.ai"
                Card2Para="Getting started with AI"
                Card2imageUrl="images/home/card23.png"
                backgroundColor="#2ECC40"
                Card2age="5+"
                Card2rating="4.7 ★★★★★"
                Card2Price="₹6,999"
                Card2sessions="20"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Featured Programmes */}
      <div className="card3 mt-100">
        <h2 class="pb-50 pt-100 fw-600 ff">
          Featured <span>Programmes</span>
        </h2>
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <Card2
                Card2title="Virtual Driverless Car"
                Card2Para="Say hello to autonomous driven vehicles"
                Card2imageUrl="images/home/card21.png"
                backgroundColor="#2ECC40"
                Card2age="5+"
                Card2rating="4.7 ★★★★★"
                Card2Price="₹6,999"
                Card2sessions="20"
              />
            </div>
            <div className="col-lg-3">
              <Card2
                Card2title="AI Novus"
                Card2Para="Say hello to autonomous driven vehicles"
                Card2imageUrl="images/home/cc-1.JPG"
                backgroundColor="#2ECC40"
                Card2age="5+"
                Card2rating="4.7 ★★★★★"
                Card2Price="₹6,999"
                Card2sessions="20"
              />
            </div>
            <div className="col-lg-3">
              <Card2
                Card2title="AI Primus"
                Card2Para="Say hello to autonomous driven vehicles"
                Card2imageUrl="images/home/card23.png"
                backgroundColor="#2ECC40"
                Card2age="5+"
                Card2rating="4.7 ★★★★★"
                Card2Price="₹6,999"
                Card2sessions="20"
              />
            </div>
            <div className="col-lg-3">
              <Card2
                Card2title="AI Meritus"
                Card2Para="Build an impressive AI knowledge portfolio"
                Card2imageUrl="images/home/card23.png"
                backgroundColor="#2ECC40"
                Card2age="5+"
                Card2rating="4.7 ★★★★★"
                Card2Price="₹6,999"
                Card2sessions="20"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Featured Programmes End */}
      {/* Trainers Section start */}

      <div className="trainers">
        <h2 class="pb-50 pt-100 fw-600 ff">
          Our <span>Trainers</span>
        </h2>
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <Trainers
                Trainerstitle="Rachelle Dene"
                TrainersPara="ISET Certified Educator, Speaker & Author"
                TrainersimageUrl="images/home/trainers-1.jpg"
                backgroundColor="#2ECC40"
                Trainersrating="★★★★★"
                TrainersCourse="Virtual Driverless"
              />
            </div>
            <div className="col-lg-3">
              <Trainers
                Trainerstitle="Rachelle Dene"
                TrainersPara="ISET Certified Educator, Speaker & Author"
                TrainersimageUrl="images/home/trainers-2.jpg"
                Trainersrating="★★★★★"
                TrainersCourse="AI Novus"
              />
            </div>
            <div className="col-lg-3">
              <Trainers
                Trainerstitle="Rachelle Dene"
                TrainersPara="ISET Certified Educator, Speaker & Author"
                TrainersimageUrl="images/home/trainers-3.jpg"
                backgroundColor="#2ECC40"
                TrainersCourse="AI Primus"
                Trainersrating="★★★★★"
              />
            </div>
            <div className="col-lg-3">
              <Trainers
                Trainerstitle="Rachelle Dene"
                TrainersPara="ISET Certified Educator, Speaker & Author"
                TrainersimageUrl="images/home/trainer-4.jpg"
                backgroundColor="#2ECC40"
                TrainersCourse="AI Meritus"
                Trainersrating="★★★★★"
              />
            </div>
          </div>
        </div>
      </div>
      <section className="testimonials_container pt-100 pb-50">
        <div className="row">
          <div className="col-lg-6 tst-1">
            <Testimonial
              TestimonialHeadingTop="What Parents"
              TestimonialHeading="Parent of Harsh Bedi"
              TestimonialImgUrl="images/home/trainer-4.jpg"
              TestimonialSub="Aadarsh Bedi"
              TestimonialPara="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            />
          </div>
          <div className="col-lg-6 tst-2">
            <Testimonial
              backgroundColor="#C3C5F8"
              TestimonialHeadingTop="What Parents"
              TestimonialHeading="Parent of Harsh Bedi"
              TestimonialImgUrl="images/home/trainer-4.jpg"
              TestimonialSub="Aadarsh Bedi"
              TestimonialPara="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            />
          </div>
        </div>
      </section>
      <section>
        <div className="shop_now">
          <h2 class="pb-50 pt-100 fw-600 dBlue ff">
            Shop <span> Now</span>
          </h2>
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <Trainers
                  Trainerstitle="Card 4"
                  TrainersimageUrl="images/home/shop-1.jpg"
                />
              </div>
              <div className="col-lg-4">
                <Trainers
                  Trainerstitle="Card 4"
                  TrainersimageUrl="images/home/shop-2.jpg"
                />
              </div>
              <div className="col-lg-4">
                <Trainers
                  Trainerstitle="Card 4"
                  TrainersimageUrl="images/home/shop-1.jpg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shop Now section */}
      <section className="explore_container">
        <div className="container">
          <h2 class="pb-50 pt-100 fw-600 ff dBlue">
            Explore<span>More</span>
          </h2>
          <div className="row">
            <div className="col-4">
              <ExploreMore
                title="AI for Earth"
                imgUrl="images/home/explore-1.jpg"
              />
            </div>
            <div className="col-4">
              <ExploreMore
                title="AI for Earth"
                imgUrl="images/home/explore-2.jpg"
              />
            </div>
            <div className="col-4">
              <ExploreMore
                title="AI for Earth"
                imgUrl="images/home/explore-3.jpg"
              />
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-4">
              <ExploreMore
                title="AI for Earth"
                imgUrl="images/home/explore-4.jpg"
              />
            </div>
            <div className="col-4">
              <ExploreMore
                title="AI for Earth"
                imgUrl="images/home/explore-5.jpg"
              />
            </div>
            <div className="col-4">
              <ExploreMore
                title="AI for Earth"
                imgUrl="images/home/explore-6.jpg"
              />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container pt-50">
          <div className="row">
            <div class="col-lg-4">
              <ExploreCards
                imgUrl="images/home/ex-3.png"
                title="Why is AI in mining going viral?"
                para="Mining industry is waking-up to artificial intelligence and machine learning."
                readMore="/"
                join="/"
              />
            </div>
            <div class="col-lg-4">
              <ExploreCards
                imgUrl="images/home/ex-2.png"
                title="Why is AI in mining going viral?"
                para="Mining industry is waking-up to artificial intelligence and machine learning."
                readMore="/"
                join="/"
              />
            </div>
            <div class="col-lg-4">
              <ExploreCards
                imgUrl="images/home/ex-1.png"
                title="Why is AI in mining going viral?"
                para="Mining industry is waking-up to artificial intelligence and machine learning."
                readMore="/"
                join="/"
              />
            </div>
          </div>
        </div>
      </section>

      <Cta />
      <Gallery />
      <section className="contact_us">
        <div className="container">
          <ContactUs />
        </div>
      </section>
      <Footer />
    </div>
  );
}
