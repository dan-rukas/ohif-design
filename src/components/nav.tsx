import Link from 'next/link';
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
  } from "@/components/ui/navigation-menu"
  import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"


  const Nav = () => {
    return (
        <NavigationMenu>
        <NavigationMenuList>
            <NavigationMenuItem>
            <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Components
                </NavigationMenuLink>
            </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
            <Link href="/playground" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Playground
                </NavigationMenuLink>
            </Link>
            </NavigationMenuItem>
        </NavigationMenuList>
        </NavigationMenu>
  );
};


  {/*
const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Components</Link>
        </li>
        <li>
          <Link href="/playground">Playground</Link>
        </li>
        <li>
          <Link href="/contact">About2</Link>
        </li>
      </ul>
    </nav>
  );
};
*/}


export default Nav;


