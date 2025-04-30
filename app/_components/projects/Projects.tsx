import Link from "next/link";
import Tag from "../Tag";
import { ArrowUpRight } from "lucide-react";
import { projects } from "./project";
import Image from "next/image";

function Projects() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
      {projects.map((project, index) => (
        <div
          className="border-gray-secondary border-[1px] p-4 lg:p-6 rounded space-y-5"
          key={index}
        >
          <Image
            src={project.image}
            alt={project.title}
            placeholder="blur"
            className="rounded"
          />
          <div>
            <h2 className="text-lg lg:text-2xl">{project.title}</h2>
            <p className="text-sm lg:text-sm">{project.description}</p>
            <div className="flex flex-col gap-3 lg:gap-0 lg:flex-row lg:justify-between mt-1">
              <div>
                <h3 className="text-base lg:text-lg mb-2">Tech Stack</h3>
                <ul className="flex gap-2 flex-wrap max-w-sm">
                  {project.skills.map((skill, index) => (
                    <li key={`${index}-${skill}`}>
                      <Tag>{skill}</Tag>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href={project.url}
                target="_blank"
                className="group bg-text p-2 hover:bg-white flex items-center justify-center rounded self-end"
              >
                <ArrowUpRight className="text-orange transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Projects;

{
  /* <div className="border-2 p-4 lg:p-6 rounded space-y-5">
        <div className="w-full h-64 bg-white/10"></div>
        <div>
          <h2 className="text-lg lg:text-2xl">Venstphere</h2>
          <p className="text-sm lg:text-sm">
            A modern, responsive landing page built to showcase Venstphere, a
            platform that supports startups by providing funding and strategic
            guidance. The page highlights the company’s mission to empower
            visionary entrepreneurs and was designed with a focus on clean UI,
            intuitive navigation, and engaging content layout.
          </p>
          <div className="flex flex-col gap-3 lg:gap-0 lg:flex-row lg:justify-between lg:items-end mt-1">
            <div>
              <h3 className="text-base lg:text-lg mb-2">Tech Stack</h3>
              <ul className="flex gap-2 flex-wrap max-w-sm">
                <li>
                  <Tag>Nextjs</Tag>
                </li>
                <li>
                  <Tag>Taiwindcss</Tag>
                </li>
                <li>
                  <Tag>React Router</Tag>
                </li>
                <li>
                  <Tag>React Query</Tag>
                </li>
                <li>
                  <Tag>Firebase</Tag>
                </li>
              </ul>
            </div>

            <Link
              href=""
              className="group bg-text p-2 hover:bg-white flex items-center justify-center rounded self-end"
            >
              <ArrowUpRight className="text-orange transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </div>
        </div>
      </div> */
}
