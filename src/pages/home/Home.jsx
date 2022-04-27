import Citation from "../../components/objective/Objective";
import ListData from "../../components/listData/ListData";
import NavbarComp from "../../components/navbar/NavbarComp";

export default function Home(props) {
  return (
    <div className="flexDefault">
      <NavbarComp/>
      <div className="objective"> 
      <Citation objective={props.objective}/>
      </div>
    </div>
  );
}
