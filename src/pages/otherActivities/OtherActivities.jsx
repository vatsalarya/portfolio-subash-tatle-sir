import NavbarComp from "../../components/navbar/NavbarComp";
import ListData from "../../components/listData/ListData";

export default function OtherActivities(props) {
  return (
    <div className="flexDefault">
      <NavbarComp />
      <div>
        <h1>Invited Talks/ Resource Person / Reviewer Activity</h1>
        <ListData values={props.otherActivities} />
      </div>
    </div>
  );
}
