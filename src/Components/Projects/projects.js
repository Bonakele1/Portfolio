import React from "react";
import Card from "./card";

const Projects = ({ setIsPopupOpen }) => {
  return (
    <div id="projects" className="w-full bg-gray-300">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <h2 className="tracking-widest uppercase py-4 font-semibold py-4 text-gray-800">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
          <Card
            title=""
            backgroundImage={"/Assets/projects/"}
            projectCode=""
            projectDemo="#projects"
            stack=""
            description=""
            setIsPopupOpen={setIsPopupOpen}
          />
          <Card
            title=""
            backgroundImage={"Assets/projects/"}
            projectCode=""
            projectDemo="#projects"
            stack=""
            description=""
            setIsPopupOpen={setIsPopupOpen}
          />
          <Card
            title=""
            backgroundImage={"Assets/projects/"}
            projectCode=""
            projectDemo="#projects"
            tech="Jupyter Notebook"
            description=""
            setIsPopupOpen={setIsPopupOpen}
          />
          <Card
            title=""
            backgroundImage={"Assets/projects/"}
            projectCode=""
            projectDemo="/#projects"
            tech="Jupyter Notebook"
            description=""
            setIsPopupOpen={setIsPopupOpen}
          />
          <Card
            title=""
            backgroundImage={"Assets/projects/"}
            projectCode=""
            projectDemo="/#projects"
            stack="Jupyter Notebook"
            description=""
            setIsPopupOpen={setIsPopupOpen}
          />
          <Card
            title=""
            backgroundImage={"Assets/projects/"}
            projectCode=""
            projectDemo="/#project"
            stack=""
            description=""
            setIsPopupOpen={setIsPopupOpen}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;