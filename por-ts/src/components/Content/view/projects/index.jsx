import React, { useState } from "react";

import Project from "./project";
// import './index.scss';

const Projects = props => {
  const { projects } = props;
  const [flag, setAnimationFlag] = useState(false);

  const lepestok = {
    data: {
      homepage: "https://lepestok.top/",
      name: "lepestok",
      description: "Wordpress / Woocommerce / SEO / Google, FCB Ads",
    },
  };

  const d3Graph = {
    data: {
      homepage: "https://vladdew.github.io/d3-chart/",
      name: "d3Graph",
      description: "D3 / React / TS ",
    },
  };

  const calendar = {
    data: {
      homepage: "http://muse-travel.com/calendar.php",
      name: "calendar",
      description: "PHP / MySQL / JQuery",
    },
  };

  const vipclub = {
    data: {
      homepage: "https://vipclub.netlify.app/",
      name: "vipclub",
      description: "Backend NodeJs / Frontend React-Redux/ Telegram bot",
    },
  };

  const mockVisual = {
    data: {
      homepage: "https://app.mockvisual.com/",
      name: "mockVisual",
      description: "React / TypeScript / KonvaJS",
    },
  };

  const onClickGetProjects = () => {
    props.startLoading();
    setTimeout(() => setAnimationFlag(true));
    return;
  };

  return (
    <div className="projects">
      <div className="projects__container">
        {Array.isArray(projects) && (
          <Project project={d3Graph} animated={flag} />
        )}
        {Array.isArray(projects) && (
          <Project project={mockVisual} animated={flag} />
        )}
        {Array.isArray(projects) && (
          <Project project={vipclub} animated={flag} />
        )}

        {Array.isArray(projects) && (
          <Project project={lepestok} animated={flag} />
        )}
        {Array.isArray(projects) && (
          <Project project={calendar} animated={flag} />
        )}
        {Array.isArray(projects) &&
          projects.map(project => {
            return (
              <Project
                key={project.data.id}
                project={project}
                animated={flag}
              />
            );
          })}
        <div className="projects__scene">
          {Array.isArray(projects) &&
            projects.map((project, index) => {
              return (
                <img
                  className={
                    !flag
                      ? "projects__getImg"
                      : `projects__getImg projects__getImg-${project.data.name}`
                  }
                  src="/img/projects.png"
                  alt="projects"
                  key={index}
                />
              );
            })}
        </div>
        <button
          type="button"
          aria-label="GetFromGit-projects"
          onClick={() => onClickGetProjects()}
          className={
            !flag
              ? "projects__getFromGit"
              : "projects__getFromGit projects__getFromGit--disabled"
          }
        />
      </div>
    </div>
  );
};

export default Projects;
