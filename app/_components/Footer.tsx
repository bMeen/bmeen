import Link from "next/link";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <div className="py-4 lg:py-6 border-t">
      <ul className="flex flex-col gap-4 md:flex-row md:justify-between md:items-center">
        <li>
          <p>Connect With Me</p>
          <div className="flex gap-2 mt-1">
            <Link href="https://www.linkedin.com/in/bmeen/" target="_blank">
              <FaLinkedin className="w-7 h-7" />
            </Link>
            <Link href="https://github.com/bMeen" target="_blank">
              <FaGithubSquare className="w-7 h-7" />
            </Link>
          </div>
        </li>

        <li>
          <p>Email</p>
          <Link
            href="mailto:belloalameenn@outlook.com"
            target="_blank"
            className="text-sm md:text-base"
          >
            belloalameenn@outlook.com
          </Link>
        </li>

        <li>
          <p>Phone</p>
          <Link href="tel:+2348124242294" className="text-sm md:text-base">
            +234-812-424-2294
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
