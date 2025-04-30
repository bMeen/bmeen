import { StaticImageData } from "next/image";
import venstphere from "../../../public/ventsphere.png";

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
      "A modern, responsive landing page built to showcase Venstphere, a platform that supports startups by providing funding and strategic guidance. The page highlights the company’s mission to empower visionary entrepreneurs and was designed with a focus on clean UI, intuitive navigation, and engaging content layout.",
    skills: ["Nextjs", "Tailwindcss", "Framer Motion", "Typescript"],
    url: "https://ventsphere-azure.vercel.app/",
    image: venstphere,
  },
];
