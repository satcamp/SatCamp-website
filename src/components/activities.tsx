import { HTMLAttributes, MouseEventHandler, useState } from "react";
import { SectionTitle } from "./sections";
import Mountain from "../assets/images/mountain.svg?react";
import Hiking from "../assets/images/hiking.svg?react";
import Biking from "../assets/images/bike.svg?react";
import Climbing from "../assets/images/climbing.svg?react";
import Coffee from "../assets/images/coffee.svg?react";


const TABS = [
  {
    id: "hiking",
    name: "Hiking & Trail Running",
    icon: <Hiking />,
    routes: [
      {
        name: "Chautauqua → NCAR → Chautauqua",
        url: "https://www.strava.com/routes/3108251414394395536",
      },
      {
        name: "Green Mountain Loop",
        url: "https://www.strava.com/routes/3108253232053165164",
      },
      {
        name: "Skunk Canyon",
        url: "https://www.strava.com/activities/9400904626",
      },
      {
        name: "Mesa Out n Back",
        url: "https://www.strava.com/routes/3082143720306192778",
      },
      {
        name: "Green → Bear Canyon",
        url: "https://www.strava.com/routes/3097737344238504872",
      },
    ]
  },
  {
    id: "cycling",
    name: "Biking",
    icon: <Biking />,
    routes: [
      {
        name: "Champman (out + back)",
        url: "https://www.strava.com/routes/3108250347434778732",
      },
      {
        name: "Gold Hill",
        url: "https://www.strava.com/routes/3108250778597437328",
      },
      {
        name: "Thursday Only Betasso",
        url: "https://www.strava.com/routes/3114086108710376904",
      },
      {
        name: "Walker Ranch",
        url: "https://www.strava.com/routes/3114306514411134408",
      },
    ]
  },
  {
    id: "climbing",
    name: "Rock Climbing",
    icon: <Climbing />,
    routes: [
      {
        name: "Flagstaff bouldering approach",
        url: "https://www.strava.com/routes/3113965205927696440",
      },
    ]
  },
  {
    id: "coffee",
    name: "Coffeeshops & Breweries",
    icon: <Coffee />
  },
];

const getActiveTabData = (id?: string) => {
  const tab = TABS.find((tab) => tab.id === id);
  if (tab) return tab;
  return TABS[0];
};

export const ActivitiesSection = () => {
  const [activeTab, setActiveTab] = useState('hiking');
  const tab = getActiveTabData(activeTab);

  return (
    <section className="w-full h-screen bg-secondary text-white" id="activities">
      <div className={`w-full h-screen flex flex-col items-center bg-top bg-cover bg-image-${activeTab}`}>
        <div className="w-5/6 h-screen">
          <SectionTitle>Example Activities</SectionTitle>
          <div className="mt-4">
            {TABS.map((tab) =>
              <Tab key={tab.id} active={activeTab === tab.id} onClick={() => setActiveTab(tab.id)} title={tab.name}>
                {tab.icon}
              </Tab>
            )}
          </div>
          <div className="md:flex md:flex-row w-full px-5 md:px-0 mb-12 place-self-end">
            <div className="w-full md:w-3/5">
              <h1 className="md:text-9xl text-7xl md:mt-32 mt-12 font-normal">{ tab.name }</h1>
            </div>
            <div className="w-full md:flex md:w-auto items-end md:mt-32 mt-12">
              {tab.routes && (
                <div className="md:p-6 p-4 text-xl rounded-lg bg-white text-primary-fg">
                  <h3 className="font-bold text-3xl pb-3">Sample Routes:</h3>
                  {tab.routes?.map((route) =>
                    <p className="py-2 font-light" key={route.name}>
                      <Mountain className="inline mr-3 align-top"/>
                      <a className="underline underline-offset-2" href={route.url} target="_blank">
                        { route.name }
                      </a>
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Tab = ({ children, active, onClick, title }: HTMLAttributes<HTMLElement> & {active: boolean, onClick: MouseEventHandler, title?: string}) =>
  <div
    role="button"
    className={`mr-5 pb-1 inline-block ${active ? 'opacity-100 border-b-2' : 'opacity-50'}`}
    onClick={onClick}
    title={title}
  >
    {children}
  </div>;
  