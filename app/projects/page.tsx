import type { Metadata } from "next";
import Container from "../_components/Container";
import Projects from "../_components/projects/Projects";

export const metadata: Metadata = {
  title: "Projects",
};

function Page() {
  return (
    <Container>
      <h1 className="text-2xl lg:text-5xl mb-5 lg:mb-14">Projects</h1>

      <Projects />
    </Container>
  );
}

export default Page;
