import "../App.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

function PrivacyNote() {
  return (
    <>
      <NavBar></NavBar>
      <div className=" laptop: w-auto flex items-center justify-center p-6"></div>

      <div>
      <p> Foto de <a href="https://unsplash.com/es/@ksyfffka07?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Ksenia Yakovleva</a> en <a href="https://unsplash.com/es/fotos/pildora-de-medicacion-naranja-y-blanca-en-la-mano-de-las-personas-YT6COuf1gY0?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></p>
      <p> Foto de <a href="https://unsplash.com/es/@drugwatcher?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Derek Finch</a> en <a href="https://unsplash.com/es/fotos/estetoscopio-verde-y-plateado-sobre-sobre-blanco-zkrPU_1AwdU?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></p>
      <p> Foto de Chokniti Khongchum: <a href="https://www.pexels.com/es-es/foto/persona-sosteniendo-matraz-de-laboratorio-2280571/" target="_blank" rel="noopener noreferrer">Pexels</a></p>
      <p> Foto de Ivan S: <a href="https://www.pexels.com/es-es/foto/manos-trabajando-dentro-laboratorio-9629684/" target="_blank" rel="noopener noreferrer">Pexels</a></p>
      <p> Foto de Yaroslav <a href="https://www.pexels.com/es-es/foto/sano-hombre-gente-amigos-8692129/" target="_blank" rel="noopener noreferrer">Pexels</a></p>
      </div>
      <Footer></Footer>
    </>
  );
}

export default PrivacyNote;
