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
      <body>
        <section className="flex items-center justify-center m-auto w-auto">
          {/* <!--------------------- Card/Contact Info--------------------------------------------------------------> */}

        <div className="laptop:py-20 gap-4 min-h-lvh">
        <CardPic/>  
        </div>


          {/* <!--------------------- Education--------------------------------------------------------------> */}
          <div className="text-center p-4 m-2">
            <div className="flex justify-center items-center">
              <svg
                className="h-full max-w-[1rem] tablet:max-w-[1.4rem] laptop:max-w-[1.8rem] desktop:max-w-[2rem]"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fill-rule="evenodd"
                  d="M6 2a2 2 0 0 0-2 2v15a3 3 0 0 0 3 3h12a1 1 0 1 0 0-2h-2v-2h2c.6 0 1-.4 1-1V4a2 2 0 0 0-2-2h-8v16h5v2H7a1 1 0 1 1 0-2h1V2H6Z"
                  clip-rule="evenodd"
                />
              </svg>
              <h1 className="text-[1.6rem] font-bold tablet:text-3xl laptop:text-4xl">
                Education
              </h1>
            </div>

            <h2 className="text-xl p-4 list-item list-inside tablet:text-2xl laptop:text-3xl">
              University of Vigo
            </h2>
            <p className=" text-lg tablet:text-2xl tablet:mx-20 italic">
              {" "}
              Energy and Sustainability Master's Degree
            </p>
            <h2 className="text-xl p-4 list-item list-inside tablet:text-2xl laptop:text-3xl">
              University of Costa Rica
            </h2>
            <p className=" text-lg tablet:text-2xl tablet:mx-20 italic">
              {" "}
              License in Chemical Engineering
            </p>

           <div>Do not hesitate to contact me at anytime!</div>  
          </div>

         
        </section>
      </body>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default Contact;
