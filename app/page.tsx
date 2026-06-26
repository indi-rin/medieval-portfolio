"use client";

import { AnimatedCastle } from "@/components/animated-castle";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="flex justify-center pt-10 font-sans">
      <AnimatedCastle onClick={() => router.push("/about")} />
    </div>
  );
}
