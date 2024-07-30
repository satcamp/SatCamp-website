import { SectionTitle, SubSectionTitle, List, Item, Section, LeftColumn, RightColumn } from "./sections";
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
                2024 Agenda is Under Construction !<br/>
                ( See example agenda below )
              </Button>
            </a>
          </div>

        <SubSectionTitle>Tuesday September 12th, 2023</SubSectionTitle>
        <List>
          <Item>11:30am Arrival at Chautauqua Lodge</Item>
          <Item>12:00pm NCAR hike & tour</Item>
          <Item>3:00pm Welcome talks and scene setting</Item>
          <Item>6:00-8:00pm Dinner and "campfire" activities</Item>
        </List>
        <SubSectionTitle>Wednesday September 13th, 2023</SubSectionTitle>
        <List>
          <Item>8:00am Breakfast</Item>
          <Item>8:30am Start of content</Item>
          <Item>Morning presentations and discussion</Item>
          <Item>Lunch provided in to-go boxes for activities</Item>
          <Item>Outdoor activities (hiking, biking, coffee/brewery, bouldering)</Item>
          <Item>2:30-5:00pm Afternoon presentations and discussion</Item>
        </List>
        <SubSectionTitle>Thursday September 14th, 2023</SubSectionTitle>
        <List>
          <Item>8:00am Breakfast</Item>
          <Item>8:30am Start of content</Item>
          <Item>Morning presentations and discussion</Item>
          <Item>Outdoor activities (hiking, biking, coffee/brewery, bouldering)</Item>
          <Item>Recap & reflections</Item>
          <Item>4:00pm Adjourn</Item>
        </List>
      </RightColumn>
    </Section>
  );
}
