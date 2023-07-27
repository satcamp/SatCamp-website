import { SectionTitle, SubSectionTitle, List, Item, Section, LeftColumn, RightColumn } from "./sections";


export function AgendaSection() {
  return (
    <Section id="agenda">
      <LeftColumn>
        <SectionTitle>Agenda</SectionTitle>
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
  );
}