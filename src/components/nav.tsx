import { Menu } from "lucide-react";
import { MenuContent, MenuItem, MenuTrigger, } from "./base/menu";
import { Button } from "./base/button";
import { ReactComponent as Logo } from "../assets/images/logo.svg";

const NAV_ITEMS = [
  {url: "/#our-tenets", label: "Our tenets"},
  {url: "/#themes", label: "Themes"},
  {url: "/#agenda", label: "Agenda"},
  {url: "/#activities", label: "Activities"},
];

const NavMenu = () => {
  return (
    <MenuTrigger>
      <Button
        intent="primary"
        className="h-full rounded-full p-4 text-xl"
        state="filled"
      >
        <Menu />
      </Button>
      <MenuContent className="bg-white">
        {NAV_ITEMS.map((item) =>
          <MenuItem key={item.label}>
            <a href={ item.url }>{ item.label }</a>
          </MenuItem>
        )}
      </MenuContent>
    </MenuTrigger>
  )
};

export const MainNav = () =>
  <nav className="flex items-center justify-between h-88px pt-4 md:pt-8 w-full px-5 md:px-0 md:w-5/6 static top-0">
    <div className="flex items-center w-1/4">
      <a href="#"><Logo /></a>
    </div>
    <div className="items-center justify-between w-1/2 uppercase hidden md:flex">
      {NAV_ITEMS.map((item) =>
        <a key={item.label} href={ item.url }>{ item.label }</a>
      )}
    </div>
    <div className="flex items-center md:w-1/4 w-1/2">
      <a className="ml-auto" href="https://buytickets.at/satcamp/968045">
        <Button state="outline" className="md:py-5 md:px-7 uppercase">Get Ticket</Button>
      </a>
      <div className="hidden">
        <NavMenu />
      </div>
    </div>
  </nav>;