import "../App.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";



function About() {
  return (
    <>
      <NavBar></NavBar>
      <div className=" laptop: w-auto flex items-center justify-center p-6">
        WHO WE ARE AT SPARKING
      </div>

      <div className=" laptop: w-auto flex items-center p-20">
        "SparkIng" generalmente significa encender, desencadenar o iniciar algo.
        En esencia, "sparkIng" se trata de hacer que algo comience o cobre vida.
        La UE aspira a ser climáticamente neutra para el 2050 y convertirse en
        una economía con cero emisiones netas de gases de efecto invernadero.
        Este objetivo está en el centro de la Estrategia para el 2050 (EU Green
        Deal) y está en línea con el compromiso de la UE con la acción climática
        global en virtud del Acuerdo de París.
      </div>

      <Footer></Footer>
    </>
  );
}

export default About;
