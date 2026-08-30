"use client";
import InSyncVideo from "../assets/img/Insync.avif";
import yoUQuestVideo from "../assets/img/yoUQuest.avif";
import Chatstat from "../assets/img/Chatstat.avif";
import Chatstat_mobile from "../assets/img/Chatstat_mobile.avif";
// import XRVideo from "../assets/img/MP4/XR.mp4";
import ProjectList from "./ProjectList";
import AussieWIldlife from "../assets/img/AussieWildlife.png";
import MoJoKing from "../assets/img/mojo.avif";
export const projects = [
  {
    id: 6,
    title: "MoJo King",
    img: MoJoKing,
    category: "UX Strategy & Development",
    route: "/project/mojoking",
    disabled: false,
  },
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
    category: "Design & Development",
    route: "/project/2",
    disabled: false,
  },
  {
    id: 1,
    title: "InSync",
    img: InSyncVideo,
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
  // {
  //   id: 6,
  //   title: "IFurniture",
  //   img: XRVideo,
  //   mediaType: "video",
  //   category: "XR & Unity 3D",
  //   route: "/project/XR",
  //   disabled: true,
  // },
];

// 詳細頁的主視覺用的就是這裡的同一張圖(桌機 hover 預覽那張)。
// 桌機版 ProjectList 的 <Link> 沒有帶 state,所以詳細頁只能靠 route 反查。
export const heroImageFor = (route) =>
  projects.find((project) => project.route === route)?.img;

function Projects() {
  return (
    <section className="py-16 md:mt-0 mt-10 bg-white" id="projects">
      <ProjectList projects={projects} />
    </section>
  );
}

export default Projects;