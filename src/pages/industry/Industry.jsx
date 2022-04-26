import ListData from "../../components/listData/ListData";
import NavbarComp from "../../components/navbar/NavbarComp";

export default function Industry(props) {
  return (
    <div className="flexDefault">
    <NavbarComp/>
    <div>
      <h1>Alumni and Industry Interaction Activity</h1>
      <ListData values={props.industry}/>
    </div>
  </div>
  );
}
