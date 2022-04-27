import "bootstrap/dist/css/bootstrap.min.css";
import { ListGroup } from "react-bootstrap";

export default function ListData(props) {
  return (
    <div className="lst" >
        <ListGroup>
        {props.values.map((value, i) => {
          return(
           <ListGroup.Item key={i}>{value}</ListGroup.Item>
          )})}
        </ListGroup>
    </div>
  );
}