import {
  SectionTitle,
  SubSectionTitle,
  Section,
  LeftColumn,
  RightColumn,
} from "./sections";

export function DiscussionsSection() {
  return (
    <Section>
      <LeftColumn>
        <SectionTitle>What will we be discussing</SectionTitle>
      </LeftColumn>
      <RightColumn>
        <SubSectionTitle image_name="sat">Remote sensing</SubSectionTitle>
        <p>
          New LEO and VLEO optical, SAR, thermal and hyperspectral satellites
          are changing the remote sensing game. Is there a market for all the
          new data coming online? What new tools, software and analytics do we
          need to harness the onslaught of data?
        </p>
        <SubSectionTitle image_name="forest">Climate</SubSectionTitle>
        <p>
          With global{" "}
          <a
            className="underline underline-offset-2"
            href="https://climate.copernicus.eu/climate-indicators"
            target="_blank"
          >
            climate indicators
          </a>{" "}
          blaring alarms, what can the data and analytics community do to impact
          the societal conversation? Will current market based approaches be
          fast enough to move the needle on a global scale? What are viable
          alternatives given political realities?
        </p>
        <SubSectionTitle image_name="chip">
          Machine learning and AI
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
          industries. Where do these new capabilities fit into the existing
          ecosystem of ML geospatial tools? Will it be an incremental or
          exponential change for the community and market?
        </p>
        <SubSectionTitle image_name="gps">GNSS/GPS </SubSectionTitle>
        <p>
          With more than a trillion dollars in economic impact{" "}
          <a
            className="underline underline-offset-2"
            href="https://en.wikipedia.org/wiki/Satellite_navigation"
            target="_blank"
          >
            GPS/GNSS
          </a>{" "}
          (Global Positioning System/Global Navigation Satellite System) is
          arguably the most impactful geospatial technology for most people.
          Despite our economic reliance on GPS/GNSS, only incremental
          improvements have been made over the last decade. New private and
          public{" "}
          <a
            className="underline underline-offset-2"
            href="https://en.wikipedia.org/wiki/Low_Earth_orbit"
            target="_blank"
          >
            LEO
          </a>
          satellite constellations look to change this. What are the
          implications and trade offs in public vs private investment for such a
          critical infrastructure?
        </p>
        <SubSectionTitle image_name="sat2">
          Satellite builds and supply chains
        </SubSectionTitle>
        <p>
          Between the impact of COVID on supply chains and the huge growth of
          new space satellite ventures, the supply of integral satellite
          components is very tight. How are new ventures coping with this
          constrained reality?
        </p>
        <SubSectionTitle image_name="hands">
          Humanitarian applications
        </SubSectionTitle>
        <p>
          How can new hardware and AI capabilities be harnessed to tackle
          pervasive humanitarian problems? Are the latest technological advances
          merely{" "}
          <a
            className="underline underline-offset-2"
            href="https://en.wikipedia.org/wiki/Technological_utopianism"
            target="_blank"
          >
            techno-utopian
          </a>{" "}
          delusions that distract us from core problems?
        </p>
        <SubSectionTitle image_name="globe">3D</SubSectionTitle>
        <p>
          The promises and marketing of the metaverse has increased interest in
          building digital twins of our world. As the metaverse enters a{" "}
          <a
            className="underline underline-offset-2"
            href="https://en.wikipedia.org/wiki/Gartner_hype_cycle"
            target="_blank"
          >
            trough of disillusionment
          </a>{" "}
          is there a real business or societal case for a perpetually updating
          global scale 3D model of the earth?
        </p>
      </RightColumn>
    </Section>
  );
}
