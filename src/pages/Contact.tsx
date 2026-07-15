import "../App.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import CardPic from "../components/CardPic";

function Contact() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <body className="h-100%">
        <section className="m-auto w-auto h-screen p-2">
          {/* <!--------------------- Intro --------------------------------------------------------------> */}
          <div className=" laptop: w-auto flex items-center justify-center p-6">
            <CardPic></CardPic>
          </div>

          <div>Do not hesitate to contact me at anytime!</div>
        </section>
      </body>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default Contact;
