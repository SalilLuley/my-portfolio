import "../css/NavBar.css";
import "../css/Hero.css";
import "../css/Work.css";
import Salil from "../assets/IMG_1335.png";

const Dashboard = () => {
  return (
    <div className="parent-sign-in">
      <ul className="navbar">
        <li>
          <a href="`${ROUTES_ENUM.ABOUT}`">About</a>
          <a href="/auth/google">Work</a>
          <a href="/auth/google">Contact</a>
        </li>
      </ul>
      <div>
        <div className="hero-backdrop">
          <div className="hero-section">
            <div className="hero-section-with-image">
              <img className="hero-section-img" src={Salil} alt="profile"></img>
              <h2 style={{ color: "black" }}>Hi, I'm a software engineer</h2>
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
        <div>This is where I will put my work</div>
      </div>
    </div>
  );
};

export { Dashboard };
