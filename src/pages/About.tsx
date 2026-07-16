import "../App.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import Carousel from "@/components/Carousel";

function About() {
  return (
    <>
      <header>
        <NavBar />
      </header>

      <body>
        <section className="m-auto w-auto p-6 text-xs tablet:text-xl laptop:text-2xl min-h-lvh">
          {/* <!--------------------- Intro --------------------------------------------------------------> */}
          <div className=" laptop: w-auto items-center justify-center p-6" m-2>
            <h1 className="p-1 m-6 text-2xl tablet:text-3xl laptop:text-4xl font-bold text-black">
              Catalog of Services
            </h1>
                      <div className=" laptop: w-auto flex items-center justify-center p-6">
                        <Carousel></Carousel>
                      </div>
            <p>
              {" "}
              As a Quality professional in the pharmaceutical and medical
              devices industry, harmonizing ISO 9001 and ISO 13485 to quality
              management systems (QMS), I lead quality assurance activities
              across the product/ service lifecycle focusing on customer
              satisfaction and continual improvement, and emphasizing regulatory
              compliance and risk management approach.
            </p>
          </div>

          <div className="items-center p-6 m-6">
            <Card>
              <CardContent className=" h-full grid grid-flow-row grid-cols-2 gap-2 rounded-lg">
                {/* CardContainer #1 */}
                <div className="p-1 m-6">
                  <Card>
                    <CardContent className="flex items-center justify-center p-6 border-2 border-teal-600 rounded-lg">
                      <div className=" text-center p-6 m-6">
                        Integrating ISO 9001 and ISO 13485 to quality management
                        systems (QMS).
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* CardContainer #2 */}
                <div className="p-1 m-6">
                  <Card>
                    <CardContent className="flex items-center justify-center p-6 border-2 border-teal-600 rounded-lg">
                      <div className=" text-center p-6 m-6">
                        Demonstrated understanding of QMS requirements, cGMP,
                        ISO 9001, ISO 13485, FDA CFR 21 820, ICH Q8/Q9/Q10
                        guidelines and regulatory requirements applicable with
                        the IVD, MD, Pharma and LifeScience industries.
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* CardContainer #3 */}
                <div className="p-1 m-6">
                  <Card>
                    <CardContent className="flex items-center justify-center p-6 border-2 border-teal-600 rounded-lg">
                      <div className=" text-center p-6 m-6">
                        Experience with eQMS, and strong data driven quality
                        decision making through effective system configuration,
                        reporting, and analytic capabilities.
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* CardContainer #4 */}
                <div className="p-1 m-6">
                  <Card>
                    <CardContent className="flex items-center justify-center p-6 border-2 border-teal-600 rounded-lg">
                      <div className=" text-center p-6 m-6">
                        Management and building of periodic performance reports
                        with metrics and KPI’s for review (Power Bi, Excel
                        Dashboards)
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* CardContainer #5 */}
                <div className="p-1 m-6">
                  <Card>
                    <CardContent className="flex items-center justify-center p-6 border-2 border-teal-600 rounded-lg">
                      <div className=" text-center p-6 m-6">
                        Quality support and input for Change Controls, CAPAs,
                        and Deviation Investigations.
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* CardContainer #6 */}
                <div className="p-1 m-6">
                  <Card>
                    <CardContent className="flex items-center justify-center p-6 border-2 border-teal-600 rounded-lg">
                      <div className=" text-center p-6 m-6">
                        Process support in accordance with documented procedures
                        and practices (GDP, ALCOA principles).
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* CardContainer #7 */}
                <div className="p-1 m-6">
                  <Card>
                    <CardContent className="flex items-center justify-center p-6 border-2 border-teal-600 rounded-lg">
                      <div className=" text-center p-6 m-6">
                        Documentation activities (write, review, and approve)
                        for Standard Operating Procedures (SOPs) in alignment
                        with Client policies.
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

export default About;
