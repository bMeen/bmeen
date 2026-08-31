import { StaticImageData } from "next/image";
/* import venstphere from "../../../public/ventsphere.png"; */
import classroomhq from "../../../public/classrooomhq.png";
import rideXpress from "../../../public/rideXpress.png";
import yardsale from "../../../public/yardsale-preview.png";

export type Project = {
  title: string;
  description: string;
  skills: string[];
  url: string;
  image: StaticImageData;
  wip?: boolean;
};

export const projects: Project[] = [
  /*   {
    title: "Venstphere",
    description:
      "A modern, responsive landing page built to showcase Venstphere, a platform that supports startups by providing funding and strategic guidance, highlighting the company’s mission to empower visionary entrepreneurs",
    skills: ["Nextjs", "Tailwindcss", "Framer Motion", "Typescript"],
    url: "https://ventsphere-azure.vercel.app/",
    image: venstphere
  }, */
  {
    title: "YardSale",
    description:
      "A community auction platform where users can list items, participate in time-bound auctions, place bids, and manage their virtual wallets.",
    skills: ["React", "Typescript", "Supabase", "Shadcn UI"],
    url: "https://yardsalee.vercel.app/",
    image: yardsale
  },
  {
    title: "RideXpress",
    description:
      "A seamless platform for booking intercity trips and renting vehicles in minutes.",
    skills: ["Nextjs", "Tailwindcss", "Supabase", "Typescript", "Shadcn UI"],
    url: "https://ridexpress-dun.vercel.app/",
    image: rideXpress
  },
  {
    title: "ClassroomHq",
    description:
      "A modern, sleek classroom management dashboard built for teachers, It helps manage student records, track grades and attendance, and visualize class performance",
    skills: ["React", "Tailwindcss", "Framer Motion", "Typescript"],
    url: "https://classroomhq.vercel.app/",
    image: classroomhq
  }
];
