import "../App.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import CardPic from "../components/CardPic";

function Contact() {
  return (
    <>
      <NavBar></NavBar>
  
      <div className=" laptop: w-auto flex items-center justify-center p-6">

        <CardPic></CardPic>
      </div>
      
      <div>Do not hesitate to contact me at anytime!</div>
      <Footer></Footer>
    </>
  );
}

export default Contact;
