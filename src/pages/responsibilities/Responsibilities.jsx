import Accordn from "../../components/accordion/Accordn";
import NavbarComp from "../../components/navbar/NavbarComp";

export default function Responsibilities(props) {
  return (
    <div>
      <div className="flexDefault">
        <NavbarComp />
        <div className="len">
          <h1>Research and Academics</h1>
          <Accordn values={props.responsibilities} />
        </div>
      </div>
    </div>
  );
}
