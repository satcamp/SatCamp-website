import "../App.css";
import { MainNav } from "../components/nav";
import { SectionTitle, SubSectionTitle, List, Item, Section, LeftColumn, RightColumn } from "../components/sections";

export default function SatCamp2023() {
  return (
    <>
      <Section dark>
        <MainNav />
      </Section>
      <Section dark>
        <LeftColumn>
          <SectionTitle>SatCamp 2023</SectionTitle>
        </LeftColumn>
        <RightColumn>
          <SubSectionTitle>Themes 2023</SubSectionTitle>
          <SubSectionTitle>Disruption</SubSectionTitle>
          <List>
            <Item>We are entering a moment of high velocity change.</Item>
            <Item>Technology, particularly advancements in generative AI, is moving quickly.</Item>
            <Item>How do we organize our community for resiliance and growth in times of disruption?</Item>
          </List>
          <SubSectionTitle>Climate</SubSectionTitle>
          <List>
            <Item>Climate Change is the existential threat facing our generation.</Item>
            <Item>The impacts of Climate Change are accelerating.</Item>
            <Item>Where are rising to the challenge, and where are we falling behind?</Item>
          </List>
        </RightColumn>
      </Section>

      <Section>
        <LeftColumn>
          <SectionTitle>Agenda 2023</SectionTitle>
        </LeftColumn>
        <RightColumn>
          <SubSectionTitle>September 12th-14th, 2023</SubSectionTitle>
        <List>
          <Item>Morning breakfast provided at the Chautauqua Lodge</Item>
          <Item>Planning session for the day's discussion and activities</Item>
          <Item>Outdoor activities (hiking, biking, coffee/brewery, bouldering)</Item>
          <Item>Lunch provided in to-go boxes for activities</Item>
          <Item>Activity debrief and presentation preparation</Item>
          <Item>Afternoon presentations and discussion</Item>
        </List>
      </RightColumn>
    </Section>
    </>
  );
}
