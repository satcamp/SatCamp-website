import {
  SectionTitle,
  SubSectionTitle,
  Section,
  LeftColumn,
  RightColumn,
} from "./sections";

import BillGreer from "../assets/images/headshots/BillGreer.jpg";
import JustusKilian from "../assets/images/headshots/JustusKilian.jpg";
import LaurynGutowski from "../assets/images/headshots/LaurynGutowski.png";
import Mystery from "../assets/images/headshots/Mystery.jpg";
// import MicahFarfour from "../assets/images/headshots/MicahFarfour.jpg";
import EstherRolf from "../assets/images/headshots/EstherRolf.jpg";
import DmitriiKochkov from "../assets/images/headshots/DmitriiKochkov.jpg";
import DanielaMoody from "../assets/images/headshots/DanielaMoody.jpg";
import GrantBuster from "../assets/images/headshots/GrantBuster.jpg";

export function DiscussionsSection() {
  return (
    <Section id="discussions">
      <LeftColumn>
        <SectionTitle>What will we be discussing</SectionTitle>
      </LeftColumn>
      <RightColumn>
        <SubSectionTitle image_name="sat">Satellite Data as a Business</SubSectionTitle>
        <p>
          What’s the right way to fund a new satellite that serves a public good?
          Is there sufficient demand among industries outside of defense to sustain fleets of private satellites?
          Should each sector have their own satellite fleet?
          How do you have open data when the data is so expensive to get?
        </p>
        <h4 className={"font-bold text-2xl mt-2"}>Panelists</h4>
        <div className="grid grid-cols-4 items-center">
          <div className="flex justify-end"><img src={BillGreer} alt="Bill Greer" className={`rounded-full h-28 my-4 mr-2`}/></div>
          <p className={`p-2`}><a href="https://www.linkedin.com/in/billfgreer/" className="underline">Bill Greer</a><br/>Ctrl Shift</p>
          <div className="flex justify-end"><img src={JustusKilian} alt="Justus Kilian" className={`rounded-full h-28 my-4 mr-2`}/></div>
          <p className={`p-2`}><a href="https://www.linkedin.com/in/justuskilian/" className="underline">Justus Kilian</a><br/>Space Capital</p>
          <div className="flex justify-end"><img src={LaurynGutowski} alt="Lauryn Gutowski" className={`rounded-full h-28 my-4 mr-2`}/></div>
          <p className={`p-2`}><a href="https://www.linkedin.com/in/ldgutowski/" className="underline">Lauryn Gutowski</a><br/>Albedo</p>
          <div className="flex justify-end"><img src={Mystery} alt="4th Panelist" className={`rounded-full h-28 my-4 mr-2`}/></div>
          <p className={`p-2`}>4th Panelist<br/>International NGO</p>
          {/* in case the 4th panelist gives permission to share her details, uncomment below, replace the 2 lines above*/}
          {/* <div className="flex justify-end"><img src={MicahFarfour} alt="Micah Farfour" className={`rounded-full h-28 my-4 mr-2`}/></div>
          <p className={`p-2`}><a href="https://www.linkedin.com/in/micahfarfour/" className="underline">Micah Farfour</a><br/>Amnesty International</p> */}
        </div>
        <SubSectionTitle image_name="chip">
          GeoAI and Remote Sensing
        </SubSectionTitle>
        <p>
          New{" "}
          <a
            className="underline underline-offset-2"
            href="https://en.wikipedia.org/wiki/Generative_artificial_intelligence"
            target="_blank"
          >
            generative AI
          </a>{" "}
          has tremendous potential to impact geospatial practices and
          industries. Is spatial actually special in the case of machine learning models? What can AI add to physics-based models?
          Is satellite imagery a distinct modality from natural images? What’s the best way to encode space and time?
          What can foundational models offer us that traditional methods of analysis can't?
        </p>
        <h4 className={"font-bold text-2xl mt-2"}>Panelists</h4>
        <div className="grid grid-cols-4 items-center">
          <div className="flex justify-end"><img src={EstherRolf} alt="Esther Rolf" className={`rounded-full h-28 my-4 mr-2`}/></div>
          <p className={`p-2`}><a href="https://www.estherrolf.com/" className="underline">Esther Rolf</a><br/>CU Boulder</p>
          <div className="flex justify-end"><img src={DmitriiKochkov} alt="Dmitrii Kochkov" className={`rounded-full h-28 my-4 mr-2`}/></div>
          <p className={`p-2`}><a href="https://www.linkedin.com/in/dmitrii-kochkov/" className="underline">Dmitrii Kochkov</a><br/>Google</p>
          <div className="flex justify-end"><img src={DanielaMoody} alt="Daniela Moody" className={`rounded-full h-28 my-4 mr-2`}/></div>
          <p className={`p-2`}><a href="https://www.linkedin.com/in/danielamoody/" className="underline">Daniela Moody</a><br/>Descartes Labs</p>
          <div className="flex justify-end"><img src={GrantBuster} alt="Grant Buster" className={`rounded-full h-28 my-4 mr-2`}/></div>
          <p className={`p-2`}><a href="https://research-hub.nrel.gov/en/persons/grant-buster" className="underline">Grant Buster</a><br/>NREL</p>
        </div>
        <SubSectionTitle image_name="sat2">
          Geo Platforms as a Business
        </SubSectionTitle>
        <p>
          Are geospatial platform companies truly selling a product or a consulting service disguised as a product?
          Is there a real gap in making geospatial data and analysis easier for more people? How many such platforms can the market really support?
        </p>
        <SubSectionTitle image_name="hands">
          Humanitarian Applications
        </SubSectionTitle>
        <p>
          How can new hardware and AI capabilities be harnessed to tackle
          pervasive humanitarian problems? Is there actually demand from the humanitarian sector for satellite imagery?
        </p>
      </RightColumn>
    </Section>
  );
}
