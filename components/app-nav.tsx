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
import { cn, medieval } from "@/lib/utils";
import { usePathname } from "next/navigation";

export const AppNav = () => {
  const isDesktop = useIsDesktop();
  const pathname = usePathname();

  return (
    <div className="flex items-center justify-center w-full my-6 fixed z-30">
      <Image
        src={banner}
        alt=""
        className="z-30 absolute inset-0 mx-auto -mt-9 lg:-mt-16 select-none"
        draggable={false}
        width={isDesktop ? 500 : 340}
      />
      <NavigationMenu className="z-40 relative bg-transparent">
        <NavigationMenuList className={cn("lg:gap-15", medieval.className)}>
          <NavigationMenuItem className="-mb-0.5 lg:-mb-2">
            <NavigationMenuLink
              className={cn(pathname === "/" && "text-charcoal-blue/80")}
              render={<Link href="/" />}
            >
              Home
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              className={cn(pathname === "/about" && "text-charcoal-blue/80")}
              render={<Link href="/about" />}
            >
              About
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem className="-mb-0.5 lg:-mb-1.5">
            <NavigationMenuLink
              className={cn(
                pathname === "/projects" && "text-charcoal-blue/80",
              )}
              render={<Link href="/projects" />}
            >
              Projects
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};
