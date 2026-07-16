import "../App.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <>
      <header>
        <NavBar />
      </header>

      <body>
        <section className="m-auto w-auto p-6 text-xs tablet:text-xl laptop:text-2xl min-h-lvh">
          {/* <!--------------------- Intro --------------------------------------------------------------> */}

          <div className="text-4xl"> Page not found. Sorry!!</div>
          <div className="text-4xl">
            {" "}
            <Link to="/"> Go back to home</Link>
          </div>
        </section>
      </body>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
export default NotFoundPage;
