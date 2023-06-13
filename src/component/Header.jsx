import "./Header.css";
export default function Header() {
  return (
    <div className="header_container">
      <p className="top_bar ff fw-700">
        A world of learning — Courses Starting from ₹649 | Get new skills — less
        than 2 days left!
      </p>
      <div className="nav-container">
        <div className="brand">
          <a href="#!">
            <img src="images/logo.png" className="logo" />
          </a>
        </div>
        <nav>
        <div className="navbar-collapse ms-auto collapse show" id="navbarSupportedContent">
<ul className="navbar-nav ms-auto mb-2 mb-lg-0">
<li className="nav-item dropdown">
<a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
Our Programmes
</a>
<ul className="dropdown-menu">
<li><a className="dropdown-item" href="#">By Interest</a></li>
<li><a className="dropdown-item" href="#">By Age</a></li>
<li><a className="dropdown-item" href="#">By Duration</a></li>
<li><a className="dropdown-item" href="#">By Level</a></li>
<li><a className="dropdown-item" href="#">(Google) Certified Courses</a></li>
<li><a className="dropdown-item" href="#">View All</a></li>
</ul>
</li>
<li className="nav-item dropdown">
<a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
Shop
</a>
<ul className="dropdown-menu">
<li><a className="dropdown-item" href="#">Products</a>
<ul className="dropdown-menu">
<li><a className="dropdown-item" href="#">By Interest</a></li>
<li><a className="dropdown-item" href="#">By Age</a></li>
<li><a className="dropdown-item" href="#">By Duration</a></li>
<li><a className="dropdown-item" href="#">By Level</a></li>
<li><a className="dropdown-item" href="#">(Google) Certified Courses</a></li>
<li><a className="dropdown-item" href="#">View All</a></li>
</ul>
</li>
<li><a className="dropdown-item" href="#">Courses</a>
<ul className="dropdown-menu">
<li><a className="dropdown-item" href="#">By Interest</a></li>
<li><a className="dropdown-item" href="#">By Age</a></li>
<li><a className="dropdown-item" href="#">By Duration</a></li>
<li><a className="dropdown-item" href="#">By Level</a></li>
<li><a className="dropdown-item" href="#">(Google) Certified Courses</a></li>
<li><a className="dropdown-item" href="#">View All</a></li>
</ul>
</li>
</ul>
</li>
<li className="nav-item dropdown">
<a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
Meritus Near You
</a>
<ul className="dropdown-menu">
<li><a className="dropdown-item" href="#">Partner Schools</a></li>
<li><a className="dropdown-item" href="#">Partner Learning Centers</a></li>
<li><a className="dropdown-item" href="#">Experience Centers</a></li>
<li><a className="dropdown-item" href="#">Stores</a></li>
<li><a className="dropdown-item" href="#">Our Distributors</a></li>
</ul>
</li>
<li className="nav-item dropdown">
<a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
Know Us
</a>
<ul className="dropdown-menu">
<li><a className="dropdown-item" href="#">About Us</a>
<ul className="dropdown-menu dropdown-menu-2">
<li><a className="dropdown-item" href="#">About</a></li>
<li><a className="dropdown-item" href="#">Vision</a></li>
<li><a className="dropdown-item" href="#">Mission</a></li>
</ul>
</li>
<li><a className="dropdown-item" href="#">Team</a>
</li>
<li><a className="dropdown-item" href="#">Philosphy</a>
</li>
<li><a className="dropdown-item" href="#">Journey</a>
</li>
<li><a className="dropdown-item" href="#">Awards &amp; Recognitions</a>
</li>
<li><a className="dropdown-item" href="#">Latest News</a>
</li>
<li><a className="dropdown-item" href="#">Events</a>
</li>
</ul>
</li>
</ul></div>
        </nav>
        <div className="con">
          <a href="#!">Contact us</a>
        </div>
      </div>
    </div>
  );
}
