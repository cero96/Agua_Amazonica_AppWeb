import React from "react";
import CompanyIntro from "../../components/CompanyPresentation/CompanyIntro";
import ValuesSection from "../../components/CompanyPresentation/ValuesSection";
import "../../components/CompanyPresentation/companyPresentation.css";

const CompanyPresentation = () => {
  return (
    <div className="company-presentation">
      <CompanyIntro />
      <ValuesSection />
    </div>
  );
};

export default CompanyPresentation;
