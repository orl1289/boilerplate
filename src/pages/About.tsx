import "../App.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Card, CardContent } from "@/components/ui/card";

function About() {
  return (
    <>
      <NavBar></NavBar>
      <div className=" laptop: w-auto flex items-center justify-center p-6" m-2>
        ALTRIX Quality Partners
      </div>
<div className="items-center p-6 m-12">  
<Card>
  <CardContent className=" items-center justify-center p-6">
    {/* CardContainer #1 */}
    <div className="p-1 m-6">
    <Card>
    <CardContent className="flex items-center justify-center p-6">
        <div className=" text-center p-6 m-6">
        As a Quality professional in the pharmaceutical and medical devices
        industry, integrating ISO 9001 and ISO 13485 to quality management
        systems (QMS), I lead quality assurance activities across the product/
        service lifecycle focusing on customer satisfaction and continual
        improvement, and emphasizing regulatory compliance and risk management
        approach.
      </div>
  </CardContent>
  </Card>
  </div>

    {/* CardContainer #2 */}
    <div className="p-1 m-6">
    <Card>
    <CardContent className="flex items-center justify-center p-6">
        <div className=" text-center p-6 m-6">
       Demonstrated understanding of QMS requirements, cGMP, ISO 9001,
            ISO 13485, FDA CFR 21 820, ICH Q8/Q9/Q10 guidelines and regulatory
            requirements applicable with the IVD, MD, Pharma and LifeScience
            industries.
      </div>
  </CardContent>
  </Card>
  </div>

    {/* CardContainer #3 */}
    <div className="p-1 m-6">
    <Card>
    <CardContent className="flex items-center justify-center p-6">
        <div className=" text-center p-6 m-6">
       Experience with eQMS, and strong data driven quality decision
            making through effective system configuration, reporting, and
            analytic capabilities.
      </div>
  </CardContent>
  </Card>
  </div>

      {/* CardContainer #4 */}
    <div className="p-1 m-6">
    <Card>
    <CardContent className="flex items-center justify-center p-6">
        <div className=" text-center p-6 m-6">
      Management and building of periodic performance reports with
            metrics and KPI’s for review (Power Bi, Excel Dashboards)
      </div>
  </CardContent>
  </Card>
  </div>

    {/* CardContainer #5 */}
    <div className="p-1 m-6">
    <Card>
    <CardContent className="flex items-center justify-center p-6">
        <div className=" text-center p-6 m-6">
      Quality support and input for Change Controls, CAPAs, and
            Deviation Investigations.
      </div>
  </CardContent>
  </Card>
  </div>

    {/* CardContainer #6 */}
    <div className="p-1 m-6">
    <Card>
    <CardContent className="flex items-center justify-center p-6">
        <div className=" text-center p-6 m-6">
   Process support in accordance with documented procedures and
            practices (GDP, ALCOA principles).
      </div>
  </CardContent>
  </Card>
  </div>

    {/* CardContainer #7 */}
    <div className="p-1 m-6">
    <Card>
    <CardContent className="flex items-center justify-center p-6">
        <div className=" text-center p-6 m-6">
  Documentation activities (write, review, and approve) for Standard
            Operating Procedures (SOPs) in alignment with Client policies.
      </div>
  </CardContent>
  </Card>
  </div>
      <div className="text-center p-6 m-6">

      </div>
      </CardContent>
</Card>
 </div> 
      <Footer></Footer>
    </>
  );
}

export default About;
