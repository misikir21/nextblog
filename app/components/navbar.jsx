import React from "react";
import Image from "next/image";
import logo from "./dojo-logo.png";

export default function navbar() {
  return (
    <nav>
      <Image
        src={logo}
        alt="dojo logo"
        width={50}
        height={50}
        quality={100}
        placeholder="blur"
      />
    </nav>
  );
}
