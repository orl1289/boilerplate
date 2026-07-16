import "../App.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

function PrivacyNote() {
  return (
    <>
      <header>
        <NavBar />
      </header>

      <body>
        <section className="m-auto w-auto p-6 text-xs tablet:text-xl laptop:text-2xl min-h-lvh">
          {/* <!--------------------- Intro --------------------------------------------------------------> */}
          <div className=" laptop: w-auto flex items-center justify-center p-6">
            <div>
              <p>
                {" "}
                Foto de{" "}
                <a href="https://unsplash.com/es/@ksyfffka07?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                  Ksenia Yakovleva
                </a>{" "}
                en{" "}
                <a href="https://unsplash.com/es/fotos/pildora-de-medicacion-naranja-y-blanca-en-la-mano-de-las-personas-YT6COuf1gY0?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                  Unsplash
                </a>
              </p>
              <p>
                {" "}
                Foto de{" "}
                <a href="https://unsplash.com/es/@drugwatcher?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                  Derek Finch
                </a>{" "}
                en{" "}
                <a href="https://unsplash.com/es/fotos/estetoscopio-verde-y-plateado-sobre-sobre-blanco-zkrPU_1AwdU?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                  Unsplash
                </a>
              </p>
              <p>
                {" "}
                Foto de Chokniti Khongchum:{" "}
                <a
                  href="https://www.pexels.com/es-es/foto/persona-sosteniendo-matraz-de-laboratorio-2280571/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Pexels
                </a>
              </p>
              <p>
                {" "}
                Foto de Ivan S:{" "}
                <a
                  href="https://www.pexels.com/es-es/foto/manos-trabajando-dentro-laboratorio-9629684/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Pexels
                </a>
              </p>
              <p>
                {" "}
                Foto de Yaroslav{" "}
                <a
                  href="https://www.pexels.com/es-es/foto/sano-hombre-gente-amigos-8692129/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Pexels
                </a>
              </p>
            </div>
          </div>

          <div className=" laptop: w-auto items-center justify-center p-6">
            <p>
              Flowbite Icons is a free and open-source collection of SVG icons
              that you can use in personal and commercial projects by giving
              attribution. Free under the MIT License 💙 Authors and credits
              Designed by Evelyne Krall & Robert Tanislav and interface coded by
              Zoltán Szőgyényi.
            </p>
            https://twitter.com/zoltanszogyenyi
          </div>
          <div>
            Copyright 2020 The Anton Project Authors
            (https://github.com/googlefonts/AntonFont.git) This Font Software is
            licensed under the SIL Open Font License, Version 1.1. This license
            is copied below, and is also available with a FAQ at:
            http://scripts.sil.org/OFL
          </div>
        </section>
      </body>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default PrivacyNote;
