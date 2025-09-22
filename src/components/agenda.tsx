import { SectionTitle, SubSectionTitle, LocationDesc, List, Item, Section, LeftColumn, RightColumn } from "./sections";

export function AgendaSection() {
  return (
    <Section id="agenda">
      <LeftColumn>
        <SectionTitle>Agenda</SectionTitle>
      </LeftColumn>
      <RightColumn>

        <SubSectionTitle>Wednesday, Sept 24, 2025</SubSectionTitle>
        <LocationDesc>Grand Assembly Hall</LocationDesc>
        <List>  
          <Item>[Optional] 9:00am Outdoor Activities</Item>
          <Item>1:00pm Registration Opens</Item>
          <Item>2:30pm Small Group Meet & Greet</Item>
          <Item>3:30pm Lightning Talks Round 1</Item>
          <Item>4:30pm Keynote Presentation - Camila Mahon</Item>
          <Item>5:00pm Cabin Check-In / Head Downtown</Item>
          <Item>6:30pm Happy Hour @ <a href="https://www.avantifandb.com/location/avanti-boulder/">Avanti</a></Item>
        </List>
        <SubSectionTitle>Thursday, Sept 25, 2025</SubSectionTitle>
        <List>
          <LocationDesc>Grand Assembly Hall</LocationDesc>
          <Item>8:30am Breakfast (provided)</Item>
          <Item>9:00am Outdoor Activities</Item>
          <Item>1:00pm Lunch (provided)</Item>
          <Item>2:00pm Panel: Can satellites outpace wildfires?</Item>
          <Item>3:15pm Break</Item>
          <Item>3:45pm Presentations</Item>
          <Item>4:45pm Small Group Activity</Item>
          <Item>5:30pm Small Group Dinners (self-organized)</Item>
        </List>
        <SubSectionTitle>Friday, Sept 26, 2025</SubSectionTitle>
        <List>
          <LocationDesc>Grand Assembly Hall</LocationDesc>
          <Item>8:00am Cabin Checkout (deadline 10:30am)</Item>
          <Item>8:00am Breakfast (provided)</Item>
          <Item>9:00am Panel: Embeddings & GeoAI</Item>
          <Item>10:00am Outdoor Activities</Item>
          <Item>1:00pm Lunch (provided)</Item>
          <Item>2:00pm Lightning Talks Round 2</Item>
          <Item>3:00pm Closing Remarks</Item>
          <Item>[Optional] 4:00pm+ Happy Hour @ <a href="https://www.therayback.com/">Rayback Collective</a></Item>
        </List>
      </RightColumn>
    </Section>
  );
}
