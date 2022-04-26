import "./header.css";

export default function Header(props) {
  return (
    <div>
      <div className="space"></div>

      <div className="wrapper">
        <img src="VIIT-Pune-Logo.webp" alt="viitLogo"/>
        <div className="discription">
          <h2 className="title">{props.name}</h2>
          {props.details.map((detail,i) => {
            return <p key={i}>{detail}</p>;
          })}
        </div>
        <img className="profilePhoto" src="Profile.png" alt="profilePhoto"/>
      </div>
      <div className="space"></div>
    </div>
  );
}
