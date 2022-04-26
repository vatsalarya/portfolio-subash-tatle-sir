import Citation from "../../components/citation/Citation";
import NavbarComp from "../../components/navbar/NavbarComp";

export default function Home(props) {
  return (
    <div className="flexDefault">
      <NavbarComp/>
      <div> 
      <Citation/>
      </div>
    </div>
  );
}
