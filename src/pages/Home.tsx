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
        <section className="m-auto w-auto p-6 text-xs tablet:text-xl laptop:text-2xl min-h-lvh">
          {/* <!--------------------- Intro --------------------------------------------------------------> */}
          <div className=" laptop: w-auto flex items-center justify-center p-6">
            <h1>Welcome to Our App</h1>
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
          <div className="items-center p-6 m-6">
            <Card>
              <CardContent className=" h-full grid grid-flow-row grid-cols-2 gap-2 rounded-lg">
                {/* CardContainer #1 */}
                <div className="p-1 m-6">
                  <Card>
                    <CardContent className="items-center justify-center p-6 border-2 border-teal-600 rounded-lg">
                      <h2 className=" text-xl font-bold mb-4">
                        Mission
                      </h2>
                      <div className=" text-center p-6 m-6">
                        Integrating ISO 9001 and ISO 13485 to quality management
                        systems (QMS).
                      </div>
                    </CardContent>
                  </Card>
                </div>
                {/* CardContainer #1 */}
                <div className="p-1 m-6">
                  <Card>
                    <CardContent className="items-center justify-center p-6 border-2 border-teal-600 rounded-lg">
                      <h2 className=" text-xl font-bold mb-4">
                        Vission
                      </h2>
                      <div className=" text-center p-6 m-6">
                        Integrating ISO 9001 and ISO 13485 to quality management
                        systems (QMS).
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
