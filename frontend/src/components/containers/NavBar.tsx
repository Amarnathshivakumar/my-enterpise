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

// LOGIC
type NavBarProps = {
  t: (key: string) => string;
};

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <a href={href}>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
}

// COMPONENT
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
              <NavigationMenuItem>
                <NavigationMenuLink
                  asChild
                  className={`${navigationMenuTriggerStyle()} !bg-transparent !text-white font-[Montserrat] text-[10px] !font-bold uppercase !hover:bg-transparent !focus:bg-transparent !h-0 !p-0 sm:text-[20px]`}
                >
                  <a href="/">{t("navbar.home")}</a>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="!bg-transparent !text-white font-[Montserrat] text-[10px] font-bold uppercase !hover:bg-transparent !focus:bg-transparent data-[state=open]:!bg-transparent data-[state=open]:!hover:bg-transparent !h-0 !p-0 sm:text-[20px]">
                  {t("navbar.dom")}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[300px] gap-2">
                    {documentationItems.map((item) => (
                      <ListItem key={item.title} href={item.href}>
                        {item.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="!bg-transparent !text-white font-[Montserrat] text-[10px] font-bold uppercase !hover:bg-transparent !focus:bg-transparent data-[state=open]:!bg-transparent data-[state=open]:!hover:bg-transparent !h-0 !p-0 sm:text-[20px]">
                  {t("navbar.src")}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[300px] gap-2">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <a
                          className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md p-6 no-underline outline-hidden select-none focus:shadow-md"
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
