import "../App.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

function About() {
  return (
    <>
      <NavBar></NavBar>
      <div className=" laptop: w-auto flex items-center justify-center p-6"></div>

      <div>This is my About Page</div>
      <Footer></Footer>
    </>
  );
}

export default About;
