import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home.jsx";
// import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";
// import TermOfUse from "./pages/TermOfUse.jsx";
// import AboutUs from "./pages/AboutUs.jsx";
// import ContactUsComponent from "./component/ContactUs.jsx";
// import ContactUsPage from "./pages/ConactUs.jsx";
// import AboutUsPage from "./pages/AboutUsPage";
// import LifeAt from "./pages/LifeAt";
// import LatestNews from "./pages/LatestNews";
function App() {
  // const dynamicComponentPropsArray = [
  //   {
  //     imageUrl: 'images/about/happy-mo.jpg',
  //     title: 'Dynamic Title 1',
  //     paragraph: 'This is a dynamic paragraph 1.',
  //     reverse: true,
  //   },
  //   {
  //     imageUrl: 'images/about/we-do.jpg',
  //     title: 'Dynamic Title 2',
  //     paragraph: 'This is a dynamic paragraph 2.',
  //     reverse: false,
  //   },
  // ];

  return (
    <div className="App">
      <Home />
      {/* <PrivacyPolicy /> */}
      {/* <TermOfUse /> */}

      {/* <div className="container">
      {dynamicComponentPropsArray.map((props, index) => (
        <AboutUs key={index} {...props} />
      ))}
    </div> */}
      {/* <ContactUsPage /> */}
      {/* <AboutUsPage /> */}
      {/* <LifeAt/> */}
      {/* <LatestNews /> */}
    </div>
  );
}

export default App;
