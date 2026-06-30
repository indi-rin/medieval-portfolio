"use client";

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import banner from "@/public/banner.png";
import { useIsDesktop } from "@/lib/hooks";

// INDI: Figure out how to space the options out
export const AppNav = () => {
  const isDesktop = useIsDesktop();

  return (
    <div className="flex items-center justify-center w-full my-6 relative">
      <Image
        src={banner}
        alt=""
        className="z-10 absolute inset-0 mx-auto -mt-9 lg:-mt-16"
        width={isDesktop ? 500 : 340}
      />
      <NavigationMenu className="z-20 relative bg-transparent">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink render={<Link href="/" />}>
              Home
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink render={<Link href="/about" />}>
              About
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink render={<Link href="/projects" />}>
              Projects
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};
