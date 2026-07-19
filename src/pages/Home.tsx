import "../App.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import ImagesGrid from "@/components/ui/ImagesGrid";

function Home() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <body>
        <section className="m-auto w-auto p-6 min-h-lvh">


          {/* <!--------------------- Intro --------------------------------------------------------------> */}
          <div className="items-center justify-center p-3">
            <h1 className="text-3xl tablet:text-4xl laptop:text-5xl desktop:text-6xl font-bold mb-4">
              Welcome to my knowledge space
            </h1>
          </div>
          <ImagesGrid/>
          <div className="text-lg px-3 text-justify tablet:text-xl laptop:text-2xl desktop:text-3xl p-2 m-2 tablet:m-4 laptop:m-6">
            With extensive experience leading electronic global quality
            management systems and process initiatives within multinational
            biotechnological organizations, and I am excited about the
            opportunity to contribute with my expertise in quality processes
            integration, documentation management in electronic QMS tools, and
            well- architected data frameworks to company within the
            pharmaceutical, medical devices and in-vitro diagnostics with a keen
            focus on transforming lives through innovation.
          </div>


          {/*Division for CardContainer */}
          <div className="items-center p-2 m-2 tablet:m-4 laptop:m-6">
            <Card className="border-inherit shadow-lg">
              <CardContent className="grid grid-flow-row tablet:grid-cols-2 gap-2 rounded-lg">
                {/* CardContainer - Mission */}
                <div className="text-center p-1 m-3">
                  <CardContent className="overflow-hidden items-center justify-center p-3 border-2 border-teal-600 rounded-lg">
                    <h1 className=" text-xl tablet:text-lg laptop:text-2xl desktop:text-3xl font-bold mb-4">
                      {/* Who we are?,what do we do?, why we exist? */}
                      Mission
                    </h1>
                    <div className="text-sm text-justify p-1 m-2 tablet:text-base tablet:mx-5 desktop:text-xl">
                      <p>
                        To provide a high level of expertise in quality
                        management systems (QMS) to ensure compliance and
                        customer satisfaction.
                      </p>
                    </div>
                  </CardContent>
                </div>
                {/* CardContainer - Vision. Also implementing responsive box sizing*/}
                <div className="text-center p-1 m-3">
                  <CardContent className="flow-grow overflow-hidden items-center justify-center p-3 border-2 border-teal-600 rounded-lg">
                    <h1 className=" text-xl tablet:text-lg laptop:text-2xl desktop:text-3xl font-bold mb-4">
                      {/* What we aspire to be? */}
                      Vision
                    </h1>
                    {/* Introduced object-contain to see how it behaves 18/07/2026@14.00 */}
                    <div className="text-sm text-justify p-1 m-2 tablet:text-base tablet:mx-5 desktop:text-xl">
                      To become an ally to continuously improve and innovate
                      quality management systems to meet the evolving needs of
                      our clients and stakeholders.
                    </div>
                  </CardContent>
                </div>
              </CardContent>
            </Card>
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
