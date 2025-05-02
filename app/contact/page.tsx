import type { Metadata } from "next";
import Container from "../_components/Container";
import Form from "../_components/Form";

export const metadata: Metadata = {
  title: "Contact",
};

function Page() {
  return (
    <Container>
      <h1 className="text-2xl lg:text-5xl mb-5 lg:mb-14">Contact</h1>

      <div className="grid md:grid-cols-2 gap-8 md:gap-24">
        <div>
          <p>
            I’m always open to new opportunities, collaborations, or just a
            friendly chat.
          </p>
          <p>
            Let’s connect <br /> I’d love to hear from you!
          </p>
        </div>

        <Form />
      </div>
    </Container>
  );
}

export default Page;
