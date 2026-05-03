import "../App.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

function About() {
  return (
    <>
      <NavBar></NavBar>
      <div className=" laptop: w-auto flex items-center justify-center p-6">
        ALTRIX Quality Partners
      </div>

      <div className=" laptop: w-auto flex items-center p-6">
        As a Quality professional in the pharmaceutical and medical devices
        industry, integrating ISO 9001 and ISO 13485 to quality management
        systems (QMS), I lead quality assurance activities across the product/
        service lifecycle focusing on customer satisfaction and continual
        improvement, and emphasizing regulatory compliance and risk management
        approach.
      </div>

      <div className=" laptop: w-auto flex items-center p-6">
        I can provide:
      </div>
      <div className=" laptop: w-auto flex p-6">
        <ul>
          <li>
            • Demonstrated understanding of QMS requirements, cGMP, ISO 9001,
            ISO 13485, FDA CFR 21 820, ICH Q8/Q9/Q10 guidelines and regulatory
            requirements applicable with the IVD, MD, Pharma and LifeScience
            industries.
          </li>
          <li>
            • Experience with eQMS, and strong data driven quality decision
            making through effective system configuration, reporting, and
            analytic capabilities.
          </li>
          <li>
            • Management and building of periodic performance reports with
            metrics and KPI’s for review (Power Bi, Excel Dashboards).
          </li>
          <li>
            • Quality support and input for Change Controls, CAPAs, and
            Deviation Investigations.
          </li>
          <li>
            • Process support in accordance with documented procedures and
            practices (GDP, ALCOA principles).
          </li>
          <li>
            • Documentation activities (write, review, and approve) for Standard
            Operating Procedures (SOPs) in alignment with Client policies.
          </li>
        </ul>
      </div>
      <Footer></Footer>
    </>
  );
}

export default About;
