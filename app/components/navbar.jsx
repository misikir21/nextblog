import Image from "next/image";
import Logo from "./dojo-logo.png";
import Link from "next/link";
export default function navbar() {
  return (
    <nav>
      <Image
        src={Logo}
        alt="dojo logo"
        width={50}
        height={50}
        quality={100}
        placeholder="blur"
      />
      <h1>Dojo h1elpdesk</h1>
      <Link href="/">Dashboard</Link>
      <Link href="/tickets">Tickets</Link>
    </nav>
  );
}
