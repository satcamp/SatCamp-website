import { SectionTitle, SubSectionTitle, LocationDesc, List, Item, Section, LeftColumn, RightColumn } from "./sections";
import { Button } from "./base/button";

export function AgendaSection() {
  return (
    <Section id="agenda">
      <LeftColumn>
        <SectionTitle>Agenda</SectionTitle>
      </LeftColumn>
      <RightColumn>
        <div className="mt-10">
            <a href="#agenda">
              <Button
                state="filled"
                className="py-10 px-20 text-xl font-bold bg-yellow-500"
              >
                WORKING AGENDA
              </Button>
            </a>
          </div>

        <SubSectionTitle>Tuesday October 1st, 2024</SubSectionTitle>
        <LocationDesc>Cafe Pavillion Space</LocationDesc>
        <List>  
          <Item>11:30am Arrival at Chautauqua Lodge</Item>
          <List>
            <Item>Option 1: NOAA hike & tour (pre-registration required)</Item>
            <Item>Option 2: Acclimatization activities (hikes, games)</Item>
          </List>
          <Item>3:15pm Welcome talk, scene setting & activities</Item>
          <Item>4:00pm Cabin check-in</Item>
          <Item>4:30pm Small group activities</Item>
          <Item>5:30pm Unstructured time / travel to downtown Boulder</Item>
          <Item>6:30pm Happy Hour at <a href="https://boulder.avantifandb.com/">Avanti Rooftop</a></Item>
        </List>
        <SubSectionTitle>Wednesday October 2nd, 2024</SubSectionTitle>
        <List>
          <LocationDesc>Grand Assembly Hall</LocationDesc>
          <Item>8:00am Breakfast</Item>
          <Item>9:00am Outdoor activities</Item>
          <Item>12:00pm Lunch</Item>
          <Item>1:00pm Lightning talks (part 1)</Item>
          <Item>2:00pm Panel talk: GeoAI</Item>
          <Item>3:15pm Small group activities</Item>
          <Item>4:00pm Panel talk: Satellite Business Models</Item>
          <Item>6:30pm Small group dinners (self-organized)</Item>
        </List>
        <SubSectionTitle>Thursday October 3rd, 2024</SubSectionTitle>
        <List>
          <LocationDesc>Grand Assembly Hall</LocationDesc>
          <Item>8:00am Breakfast</Item>
          <Item>9:00am Panel talk: Geo Platforms as a Business</Item>
          <Item>10:00am Cabin check out</Item>
          <Item>10:30am Outdoor activities (w/ grab & go lunch)</Item>
          <Item>1:00pm Lightning talks (part 2)</Item>
          <Item>2:00pm Snack time & small group time</Item>
          <Item>3:00pm Closing session</Item>
          <Item>4:00pm+ Optional happy hour (@ <a href="https://www.therayback.com/">Rayback Collective</a>)</Item>
        </List>
      </RightColumn>
    </Section>
  );
}
