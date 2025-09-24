/**
 * =====================================================
 *  NAME    : NavBar.tsx
 *  DATE      : 22/09/2025
 *  DATE_MODIFY       : 23/09/2025
 *  DESCRIPTION: NAVIGATION BAR COMPONENT
 * =====================================================
 */

// DEPENDENCIES
import React from "react";
import logoLight from "/img/logo-w-nobg.png";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Github, Twitter, CircleCheckBig } from "lucide-react";

// ITEMS
const documentationItems = [
  {
    title: "Alert Dialog",
    href: "/docs/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content.",
  },
  {
    title: "Hover Card",
    href: "/docs/hover-card",
    description: "Preview content available behind a link for sighted users.",
  },
  {
    title: "Progress",
    href: "/docs/progress",
    description:
      "Shows completion progress of a task, typically a progress bar.",
  },
];
const resourcesItems = [
  {
    title: "Tutorials",
    href: "/resources/tutorials",
    description: "Step-by-step guides to help you build with our library.",
  },
  {
    title: "Templates",
    href: "/resources/templates",
    description: "Ready-to-use templates to speed up your projects.",
  },
  {
    title: "Community",
    href: "/resources/community",
    description: "Connect with other developers and share ideas.",
  },
];
function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <a
          className="block select-none no-underline outline-none focus:shadow-md rounded-md p-2 hover:bg-muted"
          href={href}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
}

// LOGIC
type NavBarProps = {
  t: (key: string) => string;
};

// NAVBAR COMPONENT
const NavBar: React.FC<NavBarProps> = ({ t }) => {
  return (
    <header className="w-full px-4 z-50">
      <div className="flex justify-center w-full">
        <div className="flex w-full max-w-6xl justify-between items-center py-2">
          <div className="flex-shrink-0">
            <img
              src={logoLight}
              alt="Logo"
              className="max-w-20 object-contain md:max-w-40"
            />
          </div>
          <NavigationMenu>
            <NavigationMenuList className="flex gap-2 items-end">
              {/* HOME */}
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={`${navigationMenuTriggerStyle()} !bg-transparent !text-white font-[Montserrat] text-[10px] !font-bold uppercase !hover:bg-transparent !focus:bg-transparent !h-0 !p-0 sm:text-[20px]`}
                >
                  <a href="/">{t("navbar.home")}</a>
                </NavigationMenuLink>
              </NavigationMenuItem>
              {/* DOCUMENTATION */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="!bg-transparent !text-white font-[Montserrat] text-[10px] font-bold uppercase !hover:bg-transparent !focus:bg-transparent data-[state=open]:!bg-transparent data-[state=open]:!hover:bg-transparent !h-0 !p-0 sm:text-[20px]">
                  {t("navbar.dom")}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-6 no-underline outline-hidden select-none focus:shadow-md"
                          href="/docs"
                        >
                          <div className="mt-4 mb-2 text-lg font-medium">
                            shadcn/ui Docs
                          </div>
                          <p className="text-muted-foreground text-sm leading-tight">
                            Learn about components and best practices.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    {documentationItems.map((item) => (
                      <ListItem key={item.title} href={item.href}>
                        {item.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              {/* RESOURCES */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="!bg-transparent !text-white font-[Montserrat] text-[10px] font-bold uppercase !hover:bg-transparent !focus:bg-transparent data-[state=open]:!bg-transparent data-[state=open]:!hover:bg-transparent !h-0 !p-0 sm:text-[20px]">
                  {t("navbar.src")}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-6 no-underline outline-hidden select-none focus:shadow-md"
                          href="/resources"
                        >
                          <div className="mt-4 mb-2 text-lg font-medium">
                            shadcn/ui Resources
                          </div>
                          <p className="text-muted-foreground text-sm leading-tight">
                            Discover tutorials, templates, and community
                            support.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    {resourcesItems.map((item) => (
                      <ListItem key={item.title} href={item.href}>
                        {item.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              {/* ICON LINKS */}
              <NavigationMenuItem>
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="items-center text-white hidden sm:flex"
                >
                  <Github size={40} />
                </a>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <a
                  href="https://x.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="items-center text-white hidden sm:flex"
                >
                  <Twitter size={40} />
                </a>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <a href="#" className="items-center text-white hidden sm:flex">
                  <CircleCheckBig size={40} />
                </a>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
