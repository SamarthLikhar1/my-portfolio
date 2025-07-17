import React from 'react';
import './Skills.css';

const skillsData = [
  { title: 'Social Media Marketing', description: 'Grow your brand with innovative strategies.' },
  { title: 'Content Creation', description: 'Creative content across digital platforms.' },
  { title: 'SEO Optimization', description: 'Boost website visibility and rankings.' },
  { title: 'Graphic Design', description: 'Professional designs using Photoshop & Illustrator.' },
  { title: 'Video Editing', description: 'High-quality, dynamic video edits.' },
  { title: 'Ad Campaigns', description: 'Google & Facebook Ads for targeted reach.' },
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h2 className="section-title">My Skills</h2>
      <div className="skills-grid">
        {skillsData.map((skill, index) => (
          <div
            className="skill-card"
            key={index}
            data-aos="flip-left"
            data-aos-delay={index * 100}
          >
            <h3>{skill.title}</h3>
            <p>{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
