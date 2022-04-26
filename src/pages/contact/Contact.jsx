import NavbarComp from "../../components/navbar/NavbarComp";
import "./contact.css"
export default function Contact(props) {
  return (
    <div className="flexDefault">
    <NavbarComp />
      {/* <ListData values={props.awards}/> */}
      <div className="contact">
            <div className="offlineContact">
              <p></p>
              <h3>Office:</h3>
              <p>Vishwakarma Institute of Information Technology, Pune</p>
              <p>Residence:</p>
              <p>C-509, Ganga Osian Park, S. No. 25, Sukhsagar Nagar, Katraj, Pune - 411046.</p>
              <p>Mob.: +91-9307941193</p>
              <p>Mail: aalborg.pnm@gmail.com</p>
            </div>
          </div>
    </div>
  );
}
