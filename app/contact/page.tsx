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

      <div className="grid lg:grid-cols-2">
        <div></div>

        <Form />
      </div>
    </Container>
  );
}

export default Page;
