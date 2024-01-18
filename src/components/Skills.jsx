import React from "react";

const Skills = () => {
  return (
    <aside className="sidebar">
      <div className="skills-container" id="skills">
        <h5>Dwayne Johnson's Skills</h5>
        <ul className="skills-list">
          <li>
            <span className="skill-name">Acting</span>
            <div className="progress-bar" data-percent="90">
              90%
            </div>
            <ul className="skill-details">
              <li>Powerful on-screen presence</li>
              <li>Versatility in portraying different characters</li>
              <li>Ability to convey emotions effectively</li>
            </ul>
          </li>

          <li>
            <span className="skill-name">Professional Wrestling</span>
            <div className="progress-bar" data-percent="95">
              95%
            </div>
            <ul className="skill-details">
              <li>Exceptional in-ring skills</li>
              <li>Charismatic mic skills (speaking on the microphone)</li>
              <li>
                Strong understanding of the entertainment aspect of wrestling
              </li>
            </ul>
          </li>

          <li>
            <span className="skill-name">Business and Entrepreneurship</span>
            <div className="progress-bar" data-percent="80">
              80%
            </div>
            <ul className="skill-details">
              <li>Successful entrepreneurship ventures</li>
              <li>Ownership and involvement in various business projects</li>
            </ul>
          </li>

          <li>
            <span className="skill-name">Public Speaking</span>
            <div className="progress-bar" data-percent="85">
              85%
            </div>
            <ul className="skill-details">
              <li>Effective communication skills</li>
              <li>Charismatic public speaker</li>
              <li>Motivational speaking</li>
            </ul>
          </li>

          <li>
            <span className="skill-name">Social Media Influence</span>
            <div className="progress-bar" data-percent="90">
              90%
            </div>
            <ul className="skill-details">
              <li>Strong social media presence</li>
              <li>Engagement with fans and followers</li>
              <li>Utilization of social media for positive impact</li>
            </ul>
          </li>

          <li>
            <span className="skill-name">Film Production</span>
            <div className="progress-bar" data-percent="80">
              80%
            </div>
            <ul className="skill-details">
              <li>Involvement in film production</li>
              <li>Producing and developing various film projects</li>
            </ul>
          </li>

          <li>
            <span className="skill-name">Philanthropy</span>
            <div className="progress-bar" data-percent="85">
              85%
            </div>
            <ul className="skill-details">
              <li>Dedication to charitable causes</li>
              <li>Active involvement in philanthropic activities</li>
            </ul>
          </li>

          <li>
            <span className="skill-name">Leadership</span>
            <div className="progress-bar" data-percent="90">
              90%
            </div>
            <ul className="skill-details">
              <li>Leadership roles in various aspects of his career</li>
              <li>Ability to lead and inspire others</li>
            </ul>
          </li>

          <li>
            <span className="skill-name">Adaptability</span>
            <div className="progress-bar" data-percent="85">
              85%
            </div>
            <ul className="skill-details">
              <li>Successfully transitioning from wrestling to acting</li>
              <li>Embracing new challenges and opportunities</li>
            </ul>
          </li>

          <li>
            <span className="skill-name">Discipline</span>
            <div className="progress-bar" data-percent="95">
              95%
            </div>
            <ul className="skill-details">
              <li>Commitment to personal and professional discipline</li>
              <li>Consistent work ethic</li>
            </ul>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Skills;
