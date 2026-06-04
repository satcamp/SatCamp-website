import { Menu } from "lucide-react";
import { MenuContent, MenuItem, MenuTrigger, } from "./base/menu";
import { Button } from "./base/button";
import Logo from "../assets/images/logo.svg?react";

// Prefix internal links with Vite's base path so they resolve correctly both
// at the custom-domain root ("/") and at the GitHub Pages project subpath
// ("/SatCamp-website/"). BASE_URL has a trailing slash; drop it before joining.
const withBase = (path: string) =>
  import.meta.env.BASE_URL.replace(/\/$/, "") + path;

const NAV_ITEMS = [
  {url: "/#our-tenets", label: "Our tenets"},
  // {url: "/#discussions", label: "Discussions"},
  {url: "/#logistics", label: "Logistics"},
  {url: "/#agenda", label: "Agenda"},
  {url: "/#activities", label: "Activities"},
];

const PAST_CAMPS = [
  {url: "/2025", label: "2025"},
  {url: "/2024", label: "2024"},
  {url: "/2023", label: "2023"},
];

const PastCampsDropdown = () => (
  <MenuTrigger>
    <Button
      intent="secondary"
      className="bg-transparent border-none shadow-none uppercase cursor-pointer p-0 text-base font-normal"
    >
      Past Camps
    </Button>
    <MenuContent className="bg-white">
      {PAST_CAMPS.map((camp) =>
        <MenuItem key={camp.label}>
          <a href={withBase(camp.url)}>{camp.label}</a>
        </MenuItem>
      )}
    </MenuContent>
  </MenuTrigger>
);

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
            <a href={ withBase(item.url) }>{ item.label }</a>
          </MenuItem>
        )}
        {PAST_CAMPS.map((camp) =>
          <MenuItem key={camp.label}>
            <a href={withBase(camp.url)}>{camp.label}</a>
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
    <div className="items-center justify-between w-1/2 uppercase hidden md:flex gap-4">
      {NAV_ITEMS.map((item) =>
        <a key={item.label} href={ withBase(item.url) }>{ item.label }</a>
      )}
      <PastCampsDropdown />
    </div>
    <div className="flex items-center md:w-1/4 w-1/2">
      <a className="ml-auto" href="https://www.tickettailor.com/events/satcamp/2105822" target="_blank">
        <Button state="outline" className="md:py-5 md:px-7 uppercase">Get Ticket</Button>
      </a>
      <div className="hidden">
        <NavMenu />
      </div>
    </div>
  </nav>;