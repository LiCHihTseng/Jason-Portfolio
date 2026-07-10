"use client";
import Insync_lottie from "../assets/img/GIF/Insync_lottie.json"
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
    disabled: false,
  },
  {
    id: 5,
    title: "Chatstat Mobile",
    img: Chatstat_mobile,
    category: "User Research & Development",
    route: "/project/chatstat_mobile",
    disabled: false,
  },
  {
    id: 2,
    title: "yoUQuest",
    img: yoUQuest,
    category: "Design & Development",
    route: "/project/2",
    disabled: false,
  },
  {
    id: 1,
    title: "InSync",
    img: Insync_lottie,
    category: "Design & Development",
    route: "/project/1",
    disabled: false,
  },
  {
    id: 3,
    title: "AussieWildlife",
    img: AussieWIldlife,
    category: "RPG & Child Game",
    route: "/project/3",
    disabled: false,
  },
  {
    id: 6,
    title: "IFurniture",
    img: vrFurniture,
    category: "XR & Unity 3D",
    route: "/project/XR",
    disabled: true,
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