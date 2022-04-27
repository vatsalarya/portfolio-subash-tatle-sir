import { Link } from "react-router-dom";
import "./footerComp.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobile, faEnvelope } from "@fortawesome/free-solid-svg-icons";
export default function FooterComp() {
  return (
    <div className="footer">
      <div className="links">
        <ul>
          <li>
            <h3>Links</h3>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/research">Research</Link>
          </li>
          <li>
            <Link to="/industry">Industry Interaction</Link>
          </li>
          <li>
            <Link to="/otheractivities">Other Activities</Link>
          </li>
          <li>
            <Link to="/responsibilities">Responsibilities</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>

      <div className="contact">
        <div className="offlineContact">
          <h3>Office:</h3>
          <p>Vishwakarma Institute of Information Technology, Pune</p>
          <p>Residence:</p>
          <p>
            C-509, Ganga Osian Park, S. No. 25, Sukhsagar Nagar, Katraj, Pune -
            411046.
          </p>
            <FontAwesomeIcon icon={faMobile} />
            <text>Mob.: +91-9307941193</text>
            <p/>
            <FontAwesomeIcon icon={faEnvelope} />
          <text>Mail: aalborg.pnm@gmail.com</text>
        </div>
        <div className="onlineContact">
        <a href="#">
            <img src="scholar.png" />
            <p>Google scholar</p>
          </a>
          <a href="#">
          <img src="linkedin.png" />
            <p>LinkedIn</p>
          </a>
          <a href="#">
          <img src="fb.png" />
            <p>Facebook</p>
          </a>
        </div>
      </div>
    </div>
  );
}
