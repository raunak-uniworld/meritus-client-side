import AboutUs from "./AboutUs.jsx";
import OurStory from "../component/about/OurStory.jsx";
import PhilosophyComponent from "../component/about/Philosophy.jsx";
import MilestoneCard from "../component/about/MilestoneCard.jsx";
import Team from "../component/about/Team.jsx";
import AboutBanner from "../component/about/AboutBanner.jsx";
import Core from "../component/about/Core.jsx";
const AboutUsPage = () => {
  const dynamicComponentPropsArray = [
    {
      imageUrl: "images/about/happy-mo.jpg",
      title: "Who ",
      span: "we are",
      paragraph:
        "We are a team of educators and technologists who are passionate about helping students explore and understand the fundamentals of AI and coding and the role that it plays in our daily life.",
      paragraph2:
        "Our founders and Governing Board have been involved with education and computer science for decades. Based on years of scientific research, these patented and proven courses for grades K-12 reach students at their individual level to accelerate learning, improve performance, and drive both college and career success.",
      reverse: false
    },
    {
      imageUrl: "images/about/we-do.jpg",
      title: "What ",
      span: "we do",
      paragraph:
        "AI World School offers an online self-paced learning platform providing AI experiences to students at home and to K12 schools. We seek to empower children to explore, learn & create with AI in an age-appropriate environment.",
      paragraph2:
        "We are committed to providing both educators and parents with the most up-to-date curriculum and resources to accelerate learning and help students build a strong foundation of STEM skills. ",
      reverse: true
    }
  ];
  const dynamicComponentPropsArray1 = [
    {
      imageUrl: "images/about/pexels.png",
      title: "today’s need of",
      span: "AI eductaion",
      paragraph:
        "Children today are surrounded by and brought up around AI-powered devices.Artificial Intelligence is used so much in our everyday lives that we need to make sure that our children understand its impact and potential for the future of work and learning.",
      paragraph2:
        "Artificial intelligence is expected to fuel the global digital economy and skills required to flourish in future careers are going to be very different from what it is today.A recent Gartner report predicts one in five workers will have some form of artificial intelligence as a co-worker. ",
      reverse: true
    }
  ];

  const philosophyData = [
    {
      title: "Mission",
      desc:
        "Our mission is to help students become future-ready as they prepare for careers that will require an understanding of artificial intelligence as a key skill to prepare children to flourish in the era of AI."
    },
    {
      title: "Vision",
      desc:
        "As one of the fastest-growing edtech companies in this space, we have a unique vision to increase access to AI & coding and empower the inventors of tomorrow through both classroom and at-home learning."
    }
  ];
  const MilestoneCardData = [
    {
      imageUrl: "images/about/Milestones-1.png",
      title: "Curriculum Development",
      date: "March 12, 2020",
      paragraph:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
      imageUrl: "images/about/Milestones-2.png",
      title: "International Reach",
      date: "December 23, 2020",
      paragraph:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
      imageUrl: "images/about/Milestones-3.png",
      title: "Industry Collaboration",
      date: "December 24  , 2020",
      paragraph:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    }
  ];
  const TeamData = [
    {
      imageUrl: "images/about/Aditi-Prasad-1.png",
      title: "hello",
      date: "12/4",
      paragraph: "hello"
    },
    {
      imageUrl: "images/about/Donna-Knoell-1.png",
      title: "hello",
      date: "12/4",
      paragraph: "hello"
    },
    {
      imageUrl: "images/about/Donna-Knoell-1.png",
      title: "hello",
      date: "12/4",
      paragraph: "hello"
    },
    {
      imageUrl: "images/about/Donna-Knoell-1.png",
      title: "hello",
      date: "12/4",
      paragraph: "hello"
    },
    {
      imageUrl: "images/about/Donna-Knoell-1.png",
      title: "hello",
      date: "12/4",
      paragraph: "hello"
    },
    {
      imageUrl: "images/about/Donna-Knoell-1.png",
      title: "hello",
      date: "12/4",
      paragraph: "hello"
    }
  ];
  return (
    <div>
      <AboutBanner />
      <section className="we_are_do pt-100 pb-100">
        <div className="container">
          {dynamicComponentPropsArray.map((card, index) => (
            <AboutUs key={index} {...card} />
          ))}
        </div>
      </section>

      <OurStory />

      <section className="pt-100">
        <div className="container">
          <h2 className="inh2 text-center mb-5">
            Our <span>philosophy</span>
          </h2>
          <div className="row">
            {philosophyData.map((philosophy, index) => (
              <div className="col-12 col-lg-6" key={index}>
                <PhilosophyComponent {...philosophy} />
              </div>
            ))}
          </div>
        </div>
      </section>
      <Core />
      <section className="pt-100">
        <div className="container">
          {dynamicComponentPropsArray1.map((card, index) => (
            <AboutUs key={index} {...card} />
          ))}
        </div>
      </section>
      <section className="">
        <div className="container">
          <div className="row">
            {MilestoneCardData.map((milestoneCard, index) => (
              <div className="col-4 col-lg-4" key={index}>
                <MilestoneCard {...milestoneCard} />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="">
        <div className="container">
          <div className="row">
            {TeamData.map((team, index) => (
              <div className="col-4 col-lg-4" key={index}>
                <Team {...team} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;
