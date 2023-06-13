import "./ContactUs.css";
export default function ContactUs() {
  return (
    <div className="row">
      <div className="col-lg-5">
        <h2 className="ff fw-600 text-start">Visit Us</h2>
        <p className="ff f-20 fw-400 text-start my-3 dPink">
          Door.No.44, Old No.8, Second Floor, 1st Main Rd
        </p>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112221.1535248629!2d77.22586422971688!3d28.482225389439865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d86f69a7c4fdb%3A0x31860d8205dbf1e4!2sThe%20Modern%20School!5e0!3m2!1sen!2sin!4v1684902132083!5m2!1sen!2sin"
          width="100%"
          height="450"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="col-md-7 custom-contact-form">
        <form action="#" method="post">
          <div className="row">
            <div className="col-6">
              <div className="form-group">
                <label for="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  required
                />
              </div>
            </div>
            <div className="col-6">
              <div className="form-group">
                <label for="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  required
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <div className="form-group">
                <label for="phone">Phone</label>
                <input
                  type="tel"
                  className="form-control"
                  id="phone"
                  name="phone"
                  required
                />
              </div>
            </div>
            <div className="col-6">
              <div className="form-group">
                <label for="service">Service</label>
                <input
                  type="text"
                  className="form-control"
                  id="service"
                  name="service"
                  required
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="">
              <div className="form-group">
                <label for="phone">Company</label>
                <input
                  type="tel"
                  className="form-control"
                  id="phone"
                  name="phone"
                  required
                />
              </div>
            </div>
          </div>
          <div className="form-group">
            <label for="message">Message</label>
            <textarea
              className="form-control"
              id="message"
              name="message"
              rows="3"
              required
            ></textarea>
          </div>
          <input type="submit" className="btn" value="Submit" />
        </form>
      </div>
    </div>
  );
}
