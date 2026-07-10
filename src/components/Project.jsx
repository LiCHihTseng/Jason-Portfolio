"use client";
import Insync_lottie from "../assets/img/GIF/Insync_lottie.json"
import Insync from "../assets/img/test1.png";
import yoUQuest from "../assets/img/GIF/yoUQuest_card.json";
import Chatstat from "../assets/img/Chatstat.png";
import Chatstat_mobile from "../assets/img/Chatstat_mobile.png";
import vrFurniture from "../assets/img/GIF/iFurniture.json";
import ProjectList from "./ProjectList";
import AussieWIldlife from "../assets/img/AussieWildlife.png";
const projects = [

  {
    id: 4,
    title: "Chatstat",
    img: Chatstat,
    category: "Interaction & Development",
    route: "/project/chatstat",
  },
  {
    id: 5,
    title: "Chatstat Mobile",
    img: Chatstat_mobile,
    category: "User Reserach & Development",
    route: "/project/chatstat_mobile",
  },
  {
    id: 2,
    title: "yoUQuest",
    img: yoUQuest,
    category: "Design & Development",
    route: "/project/2",
  },
  {
    id: 1,
    title: "InSync",
    img: Insync_lottie,
    category: "Design & Development",
    route: "/project/1",
  },
  {id:3,
    title:"AussieWildlife",
    img:AussieWIldlife,
    category: "RPG & Child game",
    route:"project/3"
  },
  {
    id: 6,
    title: "IFurniture",
    img: vrFurniture,
    category: "XR & Unity 3D",
    route: "/project/XR",
  },

  
];

function Projects() {
  return (
    <section className="py-16 md:mt-0 mt-10 bg-white" id="projects">
      <ProjectList projects={projects} />
    </section>
  );
}

export default Projects;