import {
  SectionTitle,
  SubSectionTitle,
  Section,
  List,
  Item,
  LeftColumn,
  RightColumn,
} from "./sections";
import OrlaDermody from "../assets/images/headshots/OrlaDermody.jpg";

export function SessionsSection(props: {dark?: boolean}) {
  return (
    <Section dark={props.dark} id="sessions">
      <LeftColumn>
        <SectionTitle>Sessions</SectionTitle>
      </LeftColumn>
      <RightColumn>


        <SubSectionTitle>Sign up!</SubSectionTitle>
        
        <p>
          Please fill out our <a className="underline underline-offset-2" href="https://docs.google.com/forms/d/e/1FAIpQLSciLlkYU89GdCJjyA-9aRT9MDqcymOyRoId3bUhpap0q_pJHQ/viewform">interest form</a> if you&apos;d like to present in our Lightning Talks or Show & Tell sessions!
        </p>


        <SubSectionTitle>Keynote: Orla Dermody</SubSectionTitle>

        <div className="flex items-center gap-4 mb-4">
          <img src={OrlaDermody} alt="Orla Dermody" className="rounded-full h-28 shrink-0" />
          <p className="font-semibold">Orla Dermody<br/>VP of Data Products, Xoople</p>
        </div>

        <p>
          Orla Dermody loves technology but she cares a lot more about whether anyone actually uses it.
          At Xoople, she leads teams working to create a system of record for the physical world, one
          that helps organizations understand what is changing on the Earth's surface, and what they
          should do about it. From infrastructure risk to climate resilience, her focus is on making
          that data useful, usable, and embedded in everyday decision-making.
        </p>
        <br/>
        <p>
          Her perspective is shaped by her experience as a frustrated user of EO data at Corteva, a
          product lead at Maxar, and most recently as VP of Data Products at Xoople. Across all these
          roles she has worked at the intersection of product, engineering, science, and commercial
          reality — helping teams move from promising ideas to products that drive real outcomes.
        </p>
        <br/>
        <p>
          At SatCamp, Orla will bring a cynically optimistic perspective on the promise and challenge
          of creating value from EO data. Her optimism is shaped by a belief that AI will fundamentally
          change how this data gets used; her cynicism comes from the knowledge that it remains a hard
          problem. Knowing a little about who attends SatCamp, she's super excited to dig in with other
          folks also trying to solve this problem!
        </p>


        <SubSectionTitle>Lightning Talks</SubSectionTitle>

        <p>
          SatCamp Lightning Talks are an <a className="underline underline-offset-2" href="https://www.ignitetalks.io/about">Ignite-style</a> presentation format designed to challenge presenters to be creative through several constraints:
        </p>
        <br/>

        <List>
          <Item>5 minute talk length.</Item>
          <Item>
            20 slides.
            Visuals/imagery encouraged!</Item>
          <Item>
            15 seconds per slide.
            Slides will auto-advance, so you'll be challenged to design your presentation to be concise and engaging!
          </Item>
        </List>

        <br/>
        <p>
          Lightning Talks are meant to be fun and informal.
          If you're looking for inspiration, you can see <a className="underline underline-offset-2" href="#lightning">examples of previous lightning talks</a> below.
        </p>


        <SubSectionTitle>Show & Tell</SubSectionTitle>

        <p>
          Show & Tell is new at SatCamp 2026!
          This science-fair-style format provides space for presenters to allow the audience to interact with their work.
          Bring your laptop and/or other equipment!
        </p>


        <SubSectionTitle>Panel: The Last Mile of Geo</SubSectionTitle>

        <p>
          In tune with our theme, this panel explores what it takes to turn a
          promising geospatial or remote sensing concept into a viable product.
          This panel brings together diverse perspectives to discuss why great
          ideas succeed or crash, exploring how timing, market fit, leadership
          and fundraising build a path to long-term growth and success.
        </p>
        <br/>

        <List>
          <Item>Jason Setzer, Head of Product at Hydrosat</Item>
          <Item>Jon Saints, Air Programs at Waste Management, former CTO of BlueSky</Item>
          <Item>Shay Har-Noy, Managing Director at Techstars</Item>
          <Item>Paige Holland-Thielen, Sr. Manager of Spacecraft Operations at Muon</Item>
          <Item>Moderated by Chloe Hampton at Hydrosat</Item>
        </List>


        <SubSectionTitle>Panel: Where's Your Line?</SubSectionTitle>

        <p>
          <i>Exploring Alignment of Personal Ethics with Dual-Use Geospatial Technology: </i>
          Dual-use technology is in our sector&apos;s DNA, and defense funding props up
          much of the industry.
          Yet many organizations aim to only build open (non-military) products.
          How do you as an individual find your internal compass to navigate
          the ethical dimensions of your work?
        </p>
        <br/>

        <List>
          <Item>Daniela Moody, Chief Product and Capabilities Officer at Parallax Advanced Research</Item>
          <Item>Ben Tuttle, Technical Director at General Atomics Integrated Intelligence</Item>
          <Item>Zia Mehrabi, Professor & Director of the Better Planet Lab at CU Boulder</Item>
          <Item>Ian Schuler, CEO at Development Seed</Item>
          <Item>Moderated by Isaiah Lyons-Galante at CU Boulder</Item>
        </List>

      </RightColumn>
    </Section>
  );
}
