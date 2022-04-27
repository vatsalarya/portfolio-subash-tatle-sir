import Header from "./components/header/Header";
import FooterComp from "./components/footer/FooterComp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Awards from "../src/pages/awards/Awards";
import data from "./data";
import Profile from "./pages/profile/Profile";
import Responsibilities from "./pages/responsibilities/Responsibilities";
import Industry from "./pages/industry/Industry";
import Research from "./pages/research/Research";
import Contact from "./pages/contact/Contact";
import OtherActivities from "./pages/otherActivities/OtherActivities";
import Home from "./pages/home/Home";

function App() {
  return (
    <>
      <Router>
        {/* <NavbarComp /> */}
        <Header name={data.Contact.Name} details={data.Details} />
        <Routes>
          <Route path="/" element={<Home objective={data.Objective} data={data}/>} />
          <Route path="/awards" element={<Awards awards={data.Awards}/>} />
          <Route path="/profile" element={<Profile education={data.Education} experience={data.Experience}/>} />
          <Route path="/responsibilities" element={<Responsibilities responsibilities={data.Responsibilities}/>} />
          <Route path="/industry" element={<Industry industry={data.IndustryInteraction}/>} />
          <Route path="/research" element={<Research researchAndAcademics={data.ResearchAndAcademics}/>} />
          <Route path="/otheractivities" element={<OtherActivities otherActivities={data.OtherActivities}/>} />
          <Route path="/contact" element={<Contact />} />
          
        </Routes>
        <FooterComp />
      </Router>
    </>
  );
}

export default App;
