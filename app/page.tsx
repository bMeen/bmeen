import Link from "next/link";
import Button from "./_components/Button";
import Container from "./_components/Container";

function Page() {
  return (
    <Container>
      <div className="grid lg:grid-cols-2 gap-6  items-center py-6">
        <div className="space-y-4 border py-10 lg:py-0 lg:h-full lg:grid lg:place-items-center">
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
        </div>

        <div className="space-y-4">
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
        </div>
      </div>
    </Container>
  );
}

export default Page;
