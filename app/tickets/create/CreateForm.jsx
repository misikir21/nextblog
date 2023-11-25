"use client";
import { useRouter } from "next/router";
import { useState } from "react";
export default function CreateForm() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [priority, setPriority] = useState("low");
  const [isLoading, setisLoading] = useState(false);
  return <div>CreateForm</div>;
}
