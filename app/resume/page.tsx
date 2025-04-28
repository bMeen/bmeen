import type { Metadata } from "next";
import Container from "../_components/Container";
import Experience from "../_components/resume/Experience";
import Skills from "../_components/resume/Skills";

export const metadata: Metadata = {
  title: "Resume",
};

function Page() {
  return (
    <Container>
      <h1 className="text-2xl lg:text-5xl mb-4">Resume</h1>
      <Experience />
      <Skills />
    </Container>
  );
}

export default Page;
