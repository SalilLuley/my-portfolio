import "../css/NavBar.css";
import "../css/Hero.css";
import "../css/Work.css";
import "../css/Contact.css";
import Salil from "../assets/IMG_1335.png";

const Dashboard = () => {
  return (
    <div>
      <div>
        <ul className="navbar">
          <li>
            <a href="`${ROUTES_ENUM.ABOUT}`">About</a>
            <a href="/auth/google">Work</a>
            <a href="/auth/google">Contact</a>
          </li>
        </ul>
      </div>
      <div>
        <div>
          <div className="hero-section">
            <div className="hero-section-with-image">
              <img className="hero-section-img" src={Salil} alt="profile"></img>
              <h2
                style={{
                  color: "black",
                }}
              >
                Salil Luley
              </h2>
              <h4>Software Engineer and yeah, that it.</h4>
            </div>
            <p style={{ color: "black", width: "50%" }}>
              I'm a software engineer with a passion for building products that
              make a difference. I'm currently working at Google as a software
              engineer. I graduated from the University of California, Berkeley
              with a B.A. in Computer Science.
            </p>
          </div>
        </div>
      </div>
      <div className="work-backdrop">
        <div
          className="work-hero"
          style={{ width: "400px", height: "400px", backgroundColor: "gray" }}
        ></div>
        <div
          className="work-hero"
          style={{ width: "400px", height: "400px", backgroundColor: "gray" }}
        ></div>
        <div
          className="work-hero"
          style={{ width: "400px", height: "400px", backgroundColor: "gray" }}
        ></div>
      </div>
      <div>
        <div className="contact-backdrop">
          <div className="contact-hero">
            <h1>Lets Work Together</h1>
            <p>
              "Ready to elevate your online presence from '404 not found' to
              'WOW, that's impressive'? Let's team up and make your website so
              good, it'll be the Leonardo da Vinci of the internet. Ready for a
              web revolution? Let's do this!
            </p>
          </div>
          <div className="contact-form">
            <input placeholder="Name"></input>
            <input placeholder="Email"></input>
            <input placeholder="Type your message"></input>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Dashboard };
