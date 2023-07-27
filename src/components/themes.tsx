import { SectionTitle, SubSectionTitle, List, Item, Section, LeftColumn, RightColumn } from "./sections";


export function ThemesSection() {
  return (
    <Section dark id="themes">
      <LeftColumn>
        <SectionTitle>Themes</SectionTitle>
      </LeftColumn>
      <RightColumn>
        <SubSectionTitle>Disruption</SubSectionTitle>
        <List>
          <Item>We are entering a moment of high velocity change.</Item>
          <Item>Technology, particularly advancements in generative AI, is moving quickly.</Item>
          <Item>How do we organize our community for resiliance and growth in times of disruption?</Item>
        </List>
        <SubSectionTitle>Climate</SubSectionTitle>
        <List>
          <Item>
            Climate Change is the existential threat facing our generation.
          </Item>
          <Item>
            The impacts of Climate Change are accelerating. 
          </Item>
          <Item>
            Where are rising to the challenge, and where are we falling behind?
          </Item>
        </List>
      </RightColumn>
    </Section>
  );
}