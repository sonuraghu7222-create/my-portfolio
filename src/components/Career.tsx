import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Analyst</h4>
                <h5>Wipro</h5>
              </div>
              <h3>Jul '24 — Jan '25</h3>
            </div>
            <p>
              Developed interactive Power BI dashboards and automated MIS reports, reducing manual reporting effort by 30%. Consolidated and validated ERP datasets, improving data accuracy by 95% and ensuring reliable business insights. Delivered actionable insights on workforce utilization.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Analyst</h4>
                <h5>Infosys BPM</h5>
              </div>
              <h3>May '23 — Jul '24</h3>
            </div>
            <p>
              Analysed 50,000+ ServiceNow incident records, reducing repeat incidents by 18%. Produced regular IT service delivery performance reports, and authored 15+ process documentation guides, increasing team productivity by 30%.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
