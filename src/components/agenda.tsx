import { SectionTitle, SubSectionTitle, LocationDesc, List, Item, Section, LeftColumn, RightColumn } from "./sections";
import { Button } from "./base/button";

export function AgendaSection() {
  return (
    <Section id="agenda">
      <LeftColumn>
        <SectionTitle>Tentative Agenda</SectionTitle>
      </LeftColumn>
      <RightColumn>
        <div className="mt-10">
            <a href="#agenda">
              <Button
                state="filled"
                className="py-10 px-20 text-xl font-bold bg-yellow-500"
              >
                IN PROGRESS
              </Button>
            </a>
          </div>

        <SubSectionTitle>Wednesday, Sept 24, 2025</SubSectionTitle>
        <LocationDesc>Grand Assembly Hall</LocationDesc>
        <List>  
          <Item>9:00am [Optional] Outdoor Activities 1</Item>
          <Item>1:00pm [Optional] Free Time</Item>
          <Item>2:00pm Official Welcome</Item>
          <Item>2:30pm Afternoon Talks & Discussions</Item>
          {/* <Item>2:30pm Small Group Activity 1</Item> */}
          {/* <Item>3:30pm Lightning Talks Round 1</Item> */}
          {/* <Item>4:30pm Keynote Talk</Item> */}
          {/* <Item>5:30pm Unstructured time / travel to downtown Boulder</Item> */}
          <Item>6:30pm Happy Hour (location TBD)</Item>
        </List>
        <SubSectionTitle>Thursday, Sep 25, 2025</SubSectionTitle>
        <List>
          <LocationDesc>Grand Assembly Hall</LocationDesc>
          <Item>8:00am Breakfast (provided)</Item>
          <Item>9:00am Outdoor Activities 2</Item>
          <Item>1:00pm Lunch (provided)</Item>
          <Item>2:00pm Afternoon Talks & Discussions</Item>
          {/* <Item>2:00pm Panel Discussion 1</Item>
          <Item>3:00pm Lightning Talks Round 2</Item>
          <Item>4:15pm Small Group Activity 2</Item>
          <Item>5:00pm 4 Highlighted Talks</Item> */}
          <Item>6:30pm Small Group Dinners (self-organized)</Item>
        </List>
        <SubSectionTitle>Friday, Sep 26, 2025</SubSectionTitle>
        <List>
          <LocationDesc>Grand Assembly Hall</LocationDesc>
          <Item>8:00am Breakfast (provided)</Item>
          <Item>9:00am Morning Panel</Item>
          <Item>10:00am Outdoor Activities 3</Item>
          <Item>1:00pm Lunch (provided)</Item>
          <Item>2:00pm Afternoon Talks & Discussion</Item>
          <Item>3:00pm Closing Session</Item>
          <Item>4:00pm+ [Optional] Happy Hour @ <a href="https://www.therayback.com/">Rayback Collective</a></Item>
        </List>
      </RightColumn>
    </Section>
  );
}
