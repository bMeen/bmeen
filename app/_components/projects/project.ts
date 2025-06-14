import { StaticImageData } from "next/image";
import venstphere from "../../../public/ventsphere.png";
import classroomhq from "../../../public/classrooomhq.png";

export type Project = {
  title: string;
  description: string;
  skills: string[];
  url: string;
  image: StaticImageData;
};

export const projects: Project[] = [
  {
    title: "Venstphere",
    description:
      "A modern, responsive landing page built to showcase Venstphere, a platform that supports startups by providing funding and strategic guidance, highlighting the company’s mission to empower visionary entrepreneurs",
    skills: ["Nextjs", "Tailwindcss", "Framer Motion", "Typescript"],
    url: "https://ventsphere-azure.vercel.app/",
    image: venstphere,
  },
  {
    title: "ClassroomHq",
    description:
      "A modern, sleek classroom management dashboard built for teachers, It helps manage student records, track grades and attendance, and visualize class performance — all in one place.",
    skills: ["React", "Tailwindcss", "Framer Motion", "Typescript"],
    url: "https://classroomhq.vercel.app/",
    image: classroomhq,
  },
];
