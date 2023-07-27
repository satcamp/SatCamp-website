import { SectionTitle, SubSectionTitle, List, Item, Section, LeftColumn, RightColumn } from "./sections";


export function TenetsSection() {
  return (
    <Section id="our-tenets">
      <LeftColumn>
        <SectionTitle>Our Tenets</SectionTitle>
      </LeftColumn>
      <RightColumn>
        <SubSectionTitle>Connect, contribute and challenge the status quo</SubSectionTitle>
        <List>
          <Item>Every contribution is valued, even the provocative ones</Item>
          <Item>Everyone contributes, regardless of your background or level</Item>
        </List>
        <SubSectionTitle>Non-traditional setting for non-traditional conversation</SubSectionTitle>
        <List>
          <Item>
              Focus on the big issues, challenges and opportunities that unite us
          </Item>
          <Item>
              Being outdoors and close to nature reminds us of what we are
              preserving
          </Item>
          <Item>Dismantle hierarchies</Item>
        </List>
        <SubSectionTitle>Deep exploration and connection</SubSectionTitle>
        <List>
          <Item>
              The agenda includes deliberately unscripted moments punctuated by
              thoughtful, curated sessions
          </Item>
        </List>
      </RightColumn>
    </Section>
  );
}