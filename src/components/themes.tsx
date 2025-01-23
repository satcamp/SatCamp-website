import { SectionTitle, SubSectionTitle, List, Item, Section, LeftColumn, RightColumn } from "./sections";


export function ThemesSection() {
  return (
    <Section dark id="themes">
      <LeftColumn>
        <SectionTitle>Themes</SectionTitle>
      </LeftColumn>
      <RightColumn>
        <SubSectionTitle>Innovation & Disruption</SubSectionTitle>
        <List>
          <Item>We are in a time of high velocity change in hardware and software innovation</Item>
          <Item>Technology, particularly advancements in generative AI, is moving quickly.</Item>
          <Item>How do we, as a community, adapt to and harness innovation in times of disruption?</Item>
        </List>
        <SubSectionTitle>Climate Change Mitigation & Adaptation</SubSectionTitle>
        <List>
          <Item>Climate Change is the existential threat facing our generation.</Item>
          <Item>The impacts of Climate Change are accelerating.</Item>
          <Item>Where are we rising to the challenge, and where are we falling behind?</Item>
        </List>
        <SubSectionTitle>Social Cohesion & Grassroots Action</SubSectionTitle>
          <Item>How do we foster new collaborations and strengthen bonds in a time of polarization?</Item>
          <Item>What efforts demand our energy and how do we find the resilience to try?</Item>
          <Item>How do we ensure that the benefits of our work are shared equitably?</Item>
      </RightColumn>
    </Section>
  );
}