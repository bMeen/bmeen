import Link from "next/link";
import Button from "./_components/Button";
import Container from "./_components/Container";

function Page() {
  return (
    <Container>
      <div className="grid md:grid-cols-2 items-center">
        <div className=" space-y-4 py-6">
          <div className="w-28 h-28 md:w-40 md:h-40 rounded-full bg-white/50 mx-auto  lg:w-52 lg:h-52"></div>
          <h1 className="text-center text-lg lg:text-3xl uppercase">
            Bello <br /> Al-Ameen
          </h1>
          <p className="uppercase font-extralight tracking-[5px] text-center">
            Frontend Developer
          </p>
          <div className="flex gap-4 justify-center mt-4">
            <Button className=" px-4 py-2">
              <Link href="/resume">Resume</Link>
            </Button>
            <Button className=" px-4 py-2">
              <Link href="/projects">Projects</Link>
            </Button>
          </div>
        </div>

        <div className="px-4 py-6">
          <h1 className="text-lg lg:text-3xl uppercase">Hello!</h1>
          <p className="text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            sequi aspernatur hic velit doloremque. Facere repellendus modi quia
            nesciunt magni, eius ipsam necessitatibus eligendi aspernatur rerum
            itaque sapiente explicabo nostrum voluptatem, maiores tempore! In
            repellat omnis id architecto aut praesentium ipsam ducimus eaque
          </p>
        </div>
      </div>
    </Container>
  );
}

export default Page;
