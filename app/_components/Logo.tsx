import Link from "next/link";

function Logo() {
  return (
    <Link href="/" className="flex items-baseline gap-2">
      <div className="flex items-center gap-2">
        <span className="w-4 h-4 bg-orange"></span>
        <p className="text-2xl">bMeen</p>
      </div>

      <span className="hidden lg:block text-sm"> / Frontend Developer</span>
    </Link>
  );
}

export default Logo;
