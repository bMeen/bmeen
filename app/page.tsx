"use client";

import Link from "next/link";
import Button from "./_components/Button";
import Container from "./_components/Container";
import { motion } from "motion/react";
import { useMediaQuery } from "./_lib/useMediaQuery";

function Page() {

  const isMobile = useMediaQuery("(max-width: 1023px)");


  const initialLeft = {
    [isMobile ? "y" : "x"]: "50%",
  };
  const initialRight = {
    [isMobile ? "y" : "x"]: "-30%",
    opacity: 0,
  };

  return (
    <Container>
      <div className="w-full max-w-lg mx-auto lg:mx-0 lg:max-w-full grid lg:grid-cols-2 gap-6  items-center py-6">
        <motion.div
          initial={initialLeft}
          animate={{ x: 0, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="space-y-4 border py-10 lg:py-0 h-80 lg:h-full grid place-items-center"
        >
          <div>
            <h1 className="text-center text-xl lg:text-3xl uppercase">
              Bello Al-Ameen
            </h1>
            <p className="uppercase font-extralight tracking-[5px] text-center">
              Frontend Developer
            </p>
            <div className="flex gap-4 justify-center mt-4">
              <Button className="text-sm px-2 py-1  md:px-4 md:py-2 md:text-base">
                <Link href="/resume">Resume</Link>
              </Button>
              <Button className="text-sm px-3 py-1 md:px-4 md:py-2 md:text-base">
                <Link href="/projects">Projects</Link>
              </Button>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={initialRight}
          animate={{ x: 0, y: 0, opacity: 100 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="space-y-4"
        >
          <h1 className="text-xl lg:text-3xl uppercase">Hello!</h1>
          <p className="text-justify">
            I&apos;m a passionate Frontend Developer focused on building fast,
            responsive, and user-friendly web applications. I specialize in
            creating clean, intuitive designs while continuously expanding my
            knowledge of modern frontend technologies like React, Next.js, and
            TypeScript. I&apos;m currently seeking entry-level opportunities
            where I can apply my skills, grow professionally, and contribute
            meaningfully to projects. As a creative problem-solver with a strong
            attention to detail, I am committed to delivering high-quality
            solutions that enhance user experience and add real value. I&apos;m
            excited to collaborate with teams, learn from new challenges, and
            bring innovative ideas to life through my work.
          </p>
        </motion.div>
      </div>
    </Container>
  );
}

export default Page;
