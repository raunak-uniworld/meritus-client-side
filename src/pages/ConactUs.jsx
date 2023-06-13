import {
  FaMapMarkerAlt,
  FaMailBulk,
  FaPhone,
  FaEnvelope
} from "react-icons/fa";
import "./ConactUs.css";
const ContactUs = () => {
  return (
    <div className="">
      {/* 1st Section */}
      <section className="container">
        <div className="row contactP1 align-items-center">
          <div className="col-md-6">
            <img
              src="images/contactUs.png"
              alt="Contact"
              className="img-fluid"
            />
          </div>
          <div className="col-md-6 ps-5">
            <h2 className="text-uppercase my-5">
              Drop us a <span>Message</span>
            </h2>
            <form>
              <div className="mb-3">
                <label htmlFor="fullName" className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="What’s your name"
                  id="fullName"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="form-control"
                  id="email"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="phone" className="form-label">
                  Phone
                </label>
                <input
                  type="tel"
                  placeholder="you@example.com"
                  className="form-control"
                  id="phone"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  rows="5"
                  placeholder="Write your message for the team here"
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Send
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* 2nd Section */}
      <section className="pb-100 pt-100 connect">
        <div className="row d-flex justify-content-center m-5">
          <div className="col-md-4">
            <div className="text-center">
              <div className="card_envalop">
                <div>
                  <FaEnvelope size={30} />
                </div>
                <h5 className="card-title">Email</h5>
                <p className="card-text">Some description for card 1.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="text-center">
              <div className="card_phone">
                <div>
                  <FaPhone size={30} />
                </div>
                <h5 className="card-title">Phone</h5>
                <p className="card-text">Some description for card 2.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3rd Section */}

      <section className="container pt-50 map_container">
        <h2 className="text-uppercase">
          Where to <span>find us</span>
        </h2>
        <div className="row">
          <div className="col-md-4">
            <div className="Map">
              <img src="images/map.png" />
            </div>
          </div>
          <div className="col-md-8 d-flex justify-content-between">
            <div className="row">
              <div className="col-md-6">
                <div className="map_card">
                  <FaMapMarkerAlt size={70} />
                  <div className="map-body">
                    <h5 className="map-title">Chennai</h5>
                    <p className="map-text">
                      Door.No.44 [Second Floor], 1st Main Rd, Gandhi Nagar,
                      Adyar, Chennai – 600020, India
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="map_card">
                  <FaMapMarkerAlt size={70} />
                  <div className="map-body">
                    <h5 className="map-title">Chennai</h5>
                    <p className="map-text">
                      Door.No.44 [Second Floor], 1st Main Rd, Gandhi Nagar,
                      Adyar, Chennai – 600020, India
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="map_card">
                  <FaMapMarkerAlt size={70} />
                  <div className="map-body">
                    <h5 className="map-title">Chennai</h5>
                    <p className="map-text">
                      Door.No.44 [Second Floor], 1st Main Rd, Gandhi Nagar,
                      Adyar, Chennai – 600020, India
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="map_card">
                  <FaMapMarkerAlt size={70} />
                  <div className="map-body">
                    <h5 className="map-title">Chennai</h5>
                    <p className="map-text">
                      Door.No.44 [Second Floor], 1st Main Rd, Gandhi Nagar,
                      Adyar, Chennai – 600020, India
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="map_card">
                  <FaMapMarkerAlt size={70} />
                  <div className="map-body">
                    <h5 className="map-title">Chennai</h5>
                    <p className="map-text">
                      Door.No.44 [Second Floor], 1st Main Rd, Gandhi Nagar,
                      Adyar, Chennai – 600020, India
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="map_card">
                  <FaMapMarkerAlt size={70} />
                  <div className="map-body">
                    <h5 className="map-title">Chennai</h5>
                    <p className="map-text">
                      Door.No.44 [Second Floor], 1st Main Rd, Gandhi Nagar,
                      Adyar, Chennai – 600020, India
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
