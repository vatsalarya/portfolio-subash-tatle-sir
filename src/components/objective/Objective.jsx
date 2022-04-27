import "./objective.css";

export default function Objective(props) {
  return (
    <div>
      <div className="contents">
        <div className="discription">
          <h1 className="title">Objective</h1>
          <p>
            {props.objective}
          </p>
        </div>
        <img src="Cited.png" alt="citationData"/>
      </div>
    </div>
  );
}
