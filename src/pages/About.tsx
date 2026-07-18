import "../App.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Card, CardContent } from "@/components/ui/card";
// import Carousel from "@/components/Carousel";

function About() {
  return (
    <>
      <header>
        <NavBar />
      </header>

      <body>
        <section className="m-auto w-auto p-6 min-h-lvh">
          {/* <!--------------------- Intro --------------------------------------------------------------> */}
          <div className="items-center justify-center p-6">
            <h1 className="text-3xl tablet:text-4xl laptop:text-5xl desktop:text-6xl font-bold mb-4">
              Catalog of Services
            </h1>
            <div className=" laptop: w-auto flex items-center justify-center p-6">
              {/* <Carousel></Carousel> */}
            </div>
            <div className=" text-center p-6 m-6">
              <p>
                {" "}
                As a Quality professional in the pharmaceutical and medical
                devices industry, harmonizing ISO 9001 and ISO 13485 to quality
                management systems (QMS), I lead quality assurance activities
                across the product/ service lifecycle focusing on customer
                satisfaction and continual improvement, and emphasizing
                regulatory compliance and risk management approach.
              </p>
            </div>
          </div>

          <div className="items-center p-6 m-6">
            <Card>
              {/* <CardContent className=" h-full flex grid-flow-row tablet:grid-cols-2 gap-2 rounded-lg"> */}
              <CardContent className="grid grid-cols-1 tablet:grid-cols-2 gap-2 rounded-lg">
                {/* CardContainer #1 */}
                <div className="p-1 m-6">
                  <CardContent className="flex items-center justify-center p-6 border-2 border-teal-600 rounded-lg">
                    <div className="text-xl text-justify p-1 m-auto tablet:text-2xl tablet:mx-20">
                      Harmonization of ISO 9001, ISO 13485, MDVR and IVDR to
                      quality management systems (QMS).
                    </div>
                  </CardContent>
                </div>

                {/* CardContainer #2 */}
                <div className="p-1 m-6">
                  <CardContent className="flex items-center justify-center p-6 border-2 border-teal-600 rounded-lg">
                    <div className="text-xl text-justify p-1 m-auto tablet:text-2xl tablet:mx-20">
                      Strong understanding of QMS requirements, cGMP, ISO 9001,
                      ISO 13485, FDA CFR 21 820, ICH Q8/Q9/Q10 guidelines and
                      regulatory requirements applicable with the IVD, MD,
                      Pharma and LifeScience industries.
                    </div>
                  </CardContent>
                </div>

                {/* CardContainer #3 */}
                <div className="p-1 m-6">
                  <CardContent className="flex items-center justify-center p-6 border-2 border-teal-600 rounded-lg">
                    <div className="text-xl text-justify p-1 m-auto tablet:text-2xl tablet:mx-20">
                      High level experience with eQMS, and strong data driven
                      quality decision making through effective system
                      configuration, reporting, and analytic capabilities.
                    </div>
                  </CardContent>
                </div>

                {/* CardContainer #4 */}
                <div className="p-1 m-6">
                  <CardContent className="flex items-center justify-center p-6 border-2 border-teal-600 rounded-lg">
                    <div className="text-xl text-justify p-1 m-auto tablet:text-2xl tablet:mx-20">
                      Management and building of periodic performance reports
                      with metrics and KPI’s for review (Power Bi, Excel
                      Dashboards)
                    </div>
                  </CardContent>
                </div>

                {/* CardContainer #5 */}
                <div className="p-1 m-6">
                  <CardContent className="flex items-center justify-center p-6 border-2 border-teal-600 rounded-lg">
                    <div className="text-xl text-justify p-1 m-auto tablet:text-2xl tablet:mx-20">
                      Quality support and input for Change Controls, CAPAs, and
                      Deviation Investigations and documentation activities
                      (write, review, and approve).
                    </div>
                  </CardContent>
                </div>

                {/* CardContainer #6 */}
                <div className="p-1 m-6">
                  <CardContent className="flex items-center justify-center p-6 border-2 border-teal-600 rounded-lg">
                    <div className="text-xl text-justify p-1 m-auto tablet:text-2xl tablet:mx-20">
                      Process support in accordance with documented procedures
                      and practices (cGMP,GDP, ALCOA principles).
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

export default About;
