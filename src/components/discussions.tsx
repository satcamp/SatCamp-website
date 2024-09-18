import {
  SectionTitle,
  SubSectionTitle,
  Section,
  LeftColumn,
  RightColumn,
} from "./sections";

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
          industries. Is spatial actually special in the case of machine learning models? What can AI add to physics based models?
          Is satellite imagery a distinct modality from natural images? What’s the best way to encode space and time?
          What can foundational models offer us that traditional methods of analysis can't?
        </p>
        <h1>Panelists</h1>
        <div className="grid grid-cols-4">
          <img src="/src/assets/images/headshots/EstherRolf.jpg" alt="Esther Rolf" className={`rounded-full h-28 my-4`}/> <p className={`p-2`}>Esther Rolf Professor of Computer Science CU Boulder</p>
          <img src="/src/assets/images/headshots/DmitriiKochkov.jpg" alt="Dmitrii Kochkov" className={`rounded-full h-28 my-4`}/> Dmitrii Kochkov
          <img src="/src/assets/images/headshots/DanielaMoody.jpg" alt="Daniela Moody" className={`rounded-full h-28 my-4`}/> Daniela Moody
          <img src="/src/assets/images/headshots/GrantBuster.jpg" alt="Grant Buster" className={`rounded-full h-28 my-4`}/> Grant Buster
        </div>
        <div className={``}>
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
