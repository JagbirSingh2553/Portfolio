import React from 'react';
import './experience.css';

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <h2>Experience</h2>
      <div className="experience-container">
        <ul>
          <li><strong>Infosys: System Engineer (March 2021 - Aug 2022)</strong></li>
          <li>• At Infosys, I managed Azure cloud policy and technology requests within a five-member team utilizing Agile methodologies.</li>
          <li>• I led an Agile project team, which earned an 'Appreciation Award' for excellence in project management and communication. </li>
          <li>• Implemented reporting tools to streamline resolution processes, improving user satisfaction and optimizing workflow efficiency.</li>
        </ul>
        <ul>
          <li><strong>Integrated Technologies: Data Analyst (Oct 2019 - Mar 2021)</strong></li>
          <li>• Conducted data analysis, data integration, and data governance initiatives to streamline workflows.</li>
          <li>• Built conceptual and logical data models, improving data architecture scalability.</li>
          <li>• Developed data visualizations and dashboards in Power BI and Tableau, driving strategic decision-making.</li>
          <li>• Worked on data cleansing, preprocessing, and transformation to improve business-critical data.</li>
          <li>• Supported data governance and compliance efforts, ensuring adherence to security protocols.</li>
        </ul>
      </div>
    </section>
  );
};

export default Experience;
