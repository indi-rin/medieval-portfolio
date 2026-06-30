"use client";

import { useRouter } from "next/navigation";
import { AnimatedCastle } from "@/components/animated-castle";

export default function Home() {
  const router = useRouter();

  return (
    <div className="flex justify-center pt-20 font-sans">
      <AnimatedCastle onClick={() => router.push("/about")} />
    </div>
  );
}
