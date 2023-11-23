import Image from "next/image";
import Logo from "./dojo-logo.png";
import Link from "next/link";
export default function Navbar() {
  return (
    <nav>
      <Image
        src={Logo}
        alt="dojo logo"
        width={70}
        quality={100}
        placeholder="blur"
      />
      <h1>Dojo helpdesk</h1>
      <Link href="/">Dashboard</Link>
      <Link href="/tickets">Tickets</Link>
    </nav>
  );
}
