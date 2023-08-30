import { SectionTitle, SubSectionTitle, List, Item, Section, LeftColumn, RightColumn } from "./sections";


export function AgendaSection() {
  return (
    <Section id="agenda">
      <LeftColumn>
        <SectionTitle>Agenda</SectionTitle>
      </LeftColumn>
      <RightColumn>
        <SubSectionTitle>Tuesday September 12th, 2023</SubSectionTitle>
        <List>
          <Item>11:30am Arrival at Chautauqua Lodge</Item>
          <Item>12:00pm Start of content</Item>
          <Item>NCAR hike & tour</Item>
          <Item>Welcome talks</Item>
        </List>
        <SubSectionTitle>Wednesday September 13th, 2023</SubSectionTitle>
        <List>
          <Item>8:00am Breakfast</Item>
          <Item>8:30am Start of content</Item>
          <Item>Morning resentations and discussion</Item>
          <Item>Lunch provided in to-go boxes for activities</Item>
          <Item>Outdoor activities (hiking, biking, coffee/brewery, bouldering)</Item>
          <Item>Activity debrief, afternoon presentations and discussion</Item>
        </List>
        <SubSectionTitle>Thursday September 14th, 2023</SubSectionTitle>
        <List>
          <Item>8:00am Breakfast</Item>
          <Item>8:30am Start of content</Item>
          <Item>Morning presentations and discussion</Item>
          <Item>Lunch provided in to-go boxes for activities</Item>
          <Item>Outdoor activities (hiking, biking, coffee/brewery, bouldering)</Item>
          <Item>Recap & reflections</Item>
          <Item>4:00pm Adjourn</Item>
        </List>
      </RightColumn>
    </Section>
  );
}
