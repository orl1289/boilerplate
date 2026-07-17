import "../App.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Card, CardContent } from "@/components/ui/card";

function Home() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <body>
        <section className="m-auto w-auto p-6 text-xs tablet:text-xl laptop:text-2xl desktop:text-3xl min-h-lvh">
          {/* <!--------------------- Intro --------------------------------------------------------------> */}
          <div className=" laptop: w-auto flex items-center justify-center p-6">
            <h1>Welcome to my knowledge space</h1>
          </div>

          <div className=" laptop: w-auto p-6">
            With extensive experience leading electronic global quality
            management systems and process initiatives within multinational
            biotechnological organizations, and I am excited about the
            opportunity to contribute with my expertise in quality processes
            integration, documentation management in electronic QMS tools, and
            well- architected data frameworks to company within the
            pharmaceutical, medical devices and in-vitro diagnostics with a keen
            focus on transforming lives through innovation.
          </div>
          <div className="items-center p-6 m-6">
            <Card className= "border-inherit shadow-lg">
              <CardContent className=" h-full grid grid-flow-row grid-cols-2 gap-2 rounded-lg">
                {/* CardContainer - Mission */}
                <div className="p-1 m-6">
                  <Card>
                    <CardContent className="overflow-hidden items-center justify-center p-6 border-2 border-teal-600 rounded-lg">
                      <h2 className=" text-base tablet:text-lg laptop:text-xl desktop:text-2xl font-bold mb-4">
                         {/* Who we are?,what do we do?, why we exist? */}
                        Mission
                      </h2>
                      <div className=" text-center p-2 m-6">
                        To provide a high level of expertise in quality management
                        systems (QMS) to ensure compliance and customer
                        satisfaction.
                      </div>
                    </CardContent>
                  </Card>
                </div>
                {/* CardContainer - Vision */}
                <div className="p-1 m-6">
                  <Card>
                    <CardContent className=" overflow-hidden items-center justify-center p-6 border-2 border-teal-600 rounded-lg">
                      <h1 className=" text-base tablet:text-lg laptop:text-xl desktop:text-2xl font-bold mb-4">
                        {/* What we aspire to be? */}
                        Vision
                      </h1>
                      <div className=" text-center p-2 m-6">
                        To become an ally to continuously improve and innovate quality management systems to meet the evolving needs of our clients and stakeholders.
                      </div>
                    </CardContent>
                  </Card>
                </div>
                <div className="text-center p-6 m-6"></div>
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
