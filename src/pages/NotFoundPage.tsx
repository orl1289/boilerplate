import "../App.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function NotFoundPage (){

    return (
    <>
    <NavBar></NavBar>
    <div className="text-4xl"> Page not found. Sorry!!</div>
    <div className="text-4xl"> <Link to='/'> Go back to home</Link></div>
    <Footer></Footer>
    </>
    );
  
}
export default NotFoundPage;
