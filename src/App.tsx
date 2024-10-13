import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Carousel from "./components/Carousel";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <div className=" laptop: w-auto flex items-center justify-center p-6">
        <Carousel></Carousel>
      </div>

      <div>This is my new app</div>
      <Footer></Footer>
    </>
  );
}

export default App;
