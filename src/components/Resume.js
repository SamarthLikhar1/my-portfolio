import React from 'react';

const Resume = () => {
  return (
    <section id="resume" className="section-container" data-aos="fade-right">
      <h2 className="gradient-text">My Resume</h2>
      <p>
        Download my resume here:
        <br />
        <a
          href="/resume.pdf"
          download
          className="resume-button"
          style={{
            color: "#00f5c9",
            fontWeight: "bold",
            display: "inline-block",
            marginTop: "10px",
            textDecoration: "none",
            border: "1px solid #00f5c9",
            padding: "10px 20px",
            borderRadius: "5px",
            transition: "0.3s",
          }}
        >
          Download Resume
        </a>
      </p>
    </section>
  );
};

export default Resume;
