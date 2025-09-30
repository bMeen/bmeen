import { StaticImageData } from "next/image";
import venstphere from "../../../public/ventsphere.png";
import classroomhq from "../../../public/classrooomhq.png";
import rideXpress from "../../../public/rideXpress.png";

export type Project = {
  title: string;
  description: string;
  skills: string[];
  url: string;
  image: StaticImageData;
  wip?: boolean;
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
  {
    title: "RideXpress",
    description:
      "A web-based transport booking MVP designed to simplify how users browse available trips, reserve seats, and complete payments. The goal is to create a lightweight but scalable app for transport operators while practicing real-world product development.",
    skills: ["Nextjs", "Tailwindcss", "Supabase", "Typescript", "Shadcn UI"],
    url: "https://ridexpress-dun.vercel.app/",
    image: rideXpress,
    wip: true,
  },
];
