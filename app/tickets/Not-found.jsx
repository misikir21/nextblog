import React from "react";
import Link from "next/link";
export default function Notfound() {
  return (
    <main className="text-center">
      <h2 className="text-3xl">There was a problem</h2>
      <p>we could not fid the page you were looking for</p>
      <Link href="/">Dashboard</Link>
    </main>
  );
}
