"use client";
import Link from "next/link";
import Tag from "../Tag";
import { ArrowUpRight } from "lucide-react";
import { projects } from "./project";
import Image from "next/image";
import { motion } from "motion/react";
import Button from "../Button";

function Projects() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
      {projects.map((project, index) => (
        <div
          className="bg-white/5 backdrop-blur-[80px] border shadow-[0_15px_30px_rgba(0,0,0,0.25)] border-white/10 p-4 lg:p-6 rounded space-y-5 flex flex-col"
          key={index}
        >
          <div>
            <Image
              src={project.image}
              alt={project.title}
              placeholder="blur"
              className="rounded"
            />
          </div>
          <div className="flex-1 flex flex-col justify-between">
            <div>
              <h2 className="text-lg lg:text-2xl">
                {project.title}

                {project.wip && (
                  <Button className="ml-2 inline-flex text-sm px-1.5 tracking-widest bg-orange">
                    WIP
                  </Button>
                )}
              </h2>
              <p className="text-sm lg:text-sm">{project.description}</p>
            </div>
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

              <motion.div
                transition={{ type: "tween", duration: 0.2 }}
                whileTap={{ scale: 0.85 }}
                className="group bg-text p-2 hover:bg-white flex items-center justify-center rounded self-end"
              >
                <Link href={project.url} target="_blank">
                  <ArrowUpRight className="text-orange transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Projects;

/* border-gray-secondary border-[1px]  */
