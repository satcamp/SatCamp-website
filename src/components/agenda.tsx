import { SectionTitle, SubSectionTitle, LocationDesc, List, Item, Section, LeftColumn, RightColumn } from "./sections";

export function AgendaSection(props: { dark?: boolean }) {
  return (
    <Section dark={props.dark} id="agenda">
      <LeftColumn>
        <SectionTitle>Agenda</SectionTitle>
      </LeftColumn>
      <RightColumn>
        <SubSectionTitle>Wednesday, Sept 23, 2026</SubSectionTitle>
        <LocationDesc>Grand Assembly Hall — Food Provided: Light Afternoon Snack</LocationDesc>
        <List>
          <Item>[Optional] 9:00am Outdoor Activities</Item>
          <Item>1:00pm – 2:00pm Check-in + Registration</Item>
          <Item>2:00pm – 2:30pm Welcome Activity + Snack (provided)</Item>
          <Item>2:30pm – 3:30pm Small Group Time</Item>
          <Item>3:30pm – 4:30pm <a className="underline underline-offset-2" href="#session-lightning">Lightning Talks Round 1</a></Item>
          <Item>4:30pm – 5:00pm <a className="underline underline-offset-2" href="#session-keynote">Keynote by Orla Dermody</a></Item>
          <Item>5:00pm Lodging Check-In / Downtime / Head to Happy Hour</Item>
          <Item>6:30pm – 8:30pm Happy Hour @ <a href="https://www.avantifandb.com/location/avanti-boulder/">Avanti</a></Item>
        </List>
        <SubSectionTitle>Thursday, Sept 24, 2026</SubSectionTitle>
        <LocationDesc>Grand Assembly Hall — Food Provided: Breakfast, Lunch</LocationDesc>
        <List>
          <Item>8:00am Breakfast (provided) + Morning Welcome</Item>
          <Item>9:00am – 1:00pm Outdoor Activities</Item>
          <Item>1:00pm – 2:00pm Lunch (provided)</Item>
          <Item>2:00pm – 3:00pm <a className="underline underline-offset-2" href="#session-panel-last-mile">Panel: The Last Mile of Geo</a></Item>
          <Item>3:00pm – 3:30pm Break</Item>
          <Item>3:30pm – 4:30pm <a className="underline underline-offset-2" href="#session-show-and-tell">Show & Tell</a></Item>
          <Item>4:30pm – 5:15pm Small Group Time</Item>
          <Item>Dinner on your own (going with other campers encouraged)</Item>
        </List>
        <SubSectionTitle>Friday, Sept 25, 2026</SubSectionTitle>
        <LocationDesc>Grand Assembly Hall — Food Provided: Breakfast, Lunch (reminder to checkout of Chautauqua accommodations)</LocationDesc>
        <List>
          <Item>8:00am – 9:00am Breakfast (provided) + Morning Welcome</Item>
          <Item>9:00am – 10:00am <a className="underline underline-offset-2" href="#session-panel-dual-use">Panel: Where's Your Line? Exploring Alignment of Personal Ethics with Dual-Use Geospatial Technology</a></Item>
          <Item>10:30am – 1:00pm Outdoor Activities</Item>
          <Item>1:00pm – 2:00pm Lunch (provided)</Item>
          <Item>2:00pm – 2:30pm Small Group Breakout</Item>
          <Item>2:30pm – 2:45pm Break</Item>
          <Item>2:45pm – 3:30pm <a className="underline underline-offset-2" href="#session-lightning">Lightning Talks Round 2</a></Item>
          <Item>3:30pm – 4:00pm Closing Session + Feedback</Item>
          <Item>[Optional] 4:30pm – 7:00pm Happy Hour @ <a href="https://www.therayback.com/">Rayback Collective</a> (in coordination with local Mappy Spacey Happy Hour)</Item>
        </List>
      </RightColumn>
    </Section>
  );
}
