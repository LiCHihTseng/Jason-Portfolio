"use client";
import InSyncVideo from "../assets/img/MP4/InSync.mp4";
import yoUQuestVideo from "../assets/img/MP4/yoUQest.mp4";
import Chatstat from "../assets/img/Chatstat.png";
import Chatstat_mobile from "../assets/img/Chatstat_mobile.png";
import XRVideo from "../assets/img/MP4/XR.mp4";
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
    img: yoUQuestVideo,
    mediaType: "video",
    category: "Design & Development",
    route: "/project/2",
    disabled: false,
  },
  {
    id: 1,
    title: "InSync",
    img: InSyncVideo,
    mediaType: "video",
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
    img: XRVideo,
    mediaType: "video",
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