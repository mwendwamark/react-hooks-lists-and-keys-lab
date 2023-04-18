import React from "react";

function ProjectItem({ name, about, technologies }) 
// the ProjectItem is taking three props as input
{
  return (
    <div className="project-item">
      {/* h3 displays the name prop */}
      <h3>{name}</h3>
      {/* p tag displays the about prop */}
      <p>{about}</p>
      {/* div element with a class name of "technologies" */}
      <div className="technologies">
        {/* render a <span> for each technology in the technologies array */}
        {technologies.map((tech, index) => (
          <span key={index}>{tech}</span>
        ))}
      </div>
    </div>
  );
}

export default ProjectItem;
