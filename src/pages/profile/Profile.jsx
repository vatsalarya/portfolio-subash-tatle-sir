import ListData from "../../components/listData/ListData";
import NavbarComp from "../../components/navbar/NavbarComp";
import "./profile.css";

export default function Profile(props) {
  return (
    <div className="flexDefault">
      <NavbarComp />
      <div>
        <h1>Educational Profile</h1>
        <ListData values={props.education} />
        <h1>Experience</h1>
        <ListData values={props.experience} />
      </div>
    </div>
  );
}
