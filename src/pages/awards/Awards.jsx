import ListData from "../../components/listData/ListData";
import NavbarComp from "../../components/navbar/NavbarComp";
import "./awards.css"

export default function Awards(props) {
  return (
    <div className="flexDefault">
      <NavbarComp/>
      <div>
      <h1>Awards</h1>
      <ListData values={props.awards}/>
      </div>
    </div>
  );
}