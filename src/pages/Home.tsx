import "../App.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Carousel from "../components/Carousel";

function Home() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <body>
        <section className="m-auto w-auto p-6">
          {/* <!--------------------- Intro --------------------------------------------------------------> */}
          <div className=" laptop: w-auto flex items-center justify-center p-6">
            <Carousel></Carousel>
          </div>

          <div className=" laptop: w-auto p-6">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          </div>
        </section>
      </body>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default Home;
