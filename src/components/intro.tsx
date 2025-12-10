import { Button } from "./base/button";
import { MainNav } from "./nav";
import Activities from "../assets/images/activities.svg?react";
import logoUrl from "../assets/images/logos/sat-camp-logo-digital.png";

export function IntroductionSection() {
  return (
    <section className="bg-cover bg-center bg-no-repeat intro-background-img text-white font-sans font-light text-lg">
      <div className="bg-black bg-opacity-30 w-full flex flex-col items-center justify-center">
        <MainNav />
        <div className="w-full px-5 md:px-0 md:w-5/6 relative mt-20 flex flex-col items-center">
          <div className="mt-10">
            <a href="https://forms.gle/3Du18t3dArRK8JTF9" target="_blank">
              <Button
                state="filled"
                className="py-10 px-20 mx-5 uppercase text-xl font-bold bg-yellow-200 hover:white"
              >
                Fill out the SatCamp 2026 <br/>
                Interest Form to get updates!
              </Button>
            </a>
          </div>
          <img src={logoUrl} alt="SatCamp Logo" className="w-1/2 md:w-1/3 mt-10" />
          <p className="text-5xl md:text-6xl w-5/6 mt-4 text-center">
            is a conference unlike anything you’ve ever attended
          </p>
          <div className="text-2xl mt-32 pb-4 border-b-1 border-white md:grid grid-cols-2 font-normal">
            <div>September 23-25, 2026</div>
            <div className="md:text-right pt-1 pl-2 md:pt-0 text-gray-400">
              Boulder, Colorado, USA
            </div>
          </div>
          <div className="text-2xl py-24 lg:grid lg:grid-cols-3">
            <div className="place-self-start">
              SatCamp is a geospatial event focused on meaningful
              conversation, connection, and collaboration.
            </div>
            <div className="hidden lg:flex" />
            <div className="pt-3 lg:pt-0">
              Share and scheme while hiking, biking, climbing, running, and
              leaf peeping!
              <Activities className="w-full mt-3" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
