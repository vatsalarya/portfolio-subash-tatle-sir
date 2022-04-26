import { Link } from "react-router-dom";
import "./footerComp.css";

export default function FooterComp() {
    return (
      <div className="footer">
          <div className="links">
            <h3>Links</h3>
              <Link to="/awards">Awards</Link>
              <Link to="/awards">Awards</Link>
              <Link to="/awards">Awards</Link>
              <Link to="/awards">Awards</Link>
              <Link to="/awards">Awards</Link>
              <Link to="/awards">Awards</Link>
          </div>
          
          <div className="contact">
            <div className="offlineContact">
              <h3>Office:</h3>
              <p>Vishwakarma Institute of Information Technology, Pune</p>
              <p>Residence:</p>
              <p>C-509, Ganga Osian Park, S. No. 25, Sukhsagar Nagar, Katraj, Pune - 411046.</p>
              <p>Mob.: +91-9307941193</p>
              <p>Mail: aalborg.pnm@gmail.com</p>
            </div>
            <div className="onlineContact">
            <p>Office:</p>
              <p>Vishwakarma Institute of Information Technology, Pune</p>
              <p>Residence:</p>
            </div>
          </div>
      </div>
    );
  }
  