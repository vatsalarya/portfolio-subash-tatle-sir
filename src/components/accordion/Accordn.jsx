import "bootstrap/dist/css/bootstrap.min.css";
import { Accordion } from "react-bootstrap";
import ListData from "../listData/ListData";
import "./accordn.css";

export default function Accordn(props) {
  return (
    <div className="accordion">
      <Accordion defaultActiveKey={[0]}>
        {Object.keys(props.values).map(function(value, i) {
          return(
          <Accordion.Item eventKey={i} key={i} className="len" >
            <Accordion.Header>{value}</Accordion.Header>
            <Accordion.Body>
              <ListData values={props.values[value]}/>
            </Accordion.Body>
          </Accordion.Item>
          )})}
      </Accordion>
    </div>
  );
}
