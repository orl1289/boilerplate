import "../App.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

function Contact() {
  return (
    <>
      <NavBar></NavBar>
      <div className=" laptop: w-auto flex items-center justify-center p-6"></div>

      <div>This is my Contact Page</div>
      <Footer></Footer>
    </>
  );
}

export default Contact;
