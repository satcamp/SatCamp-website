import "../App.css";
import { MainNav } from "../components/nav";
import { SectionTitle, SubSectionTitle, LightningTalkTitle, LocationDesc, List, Item, Section, LeftColumn, RightColumn } from "../components/sections";
import LinkedIn from "../assets/images/linkedin.svg?react";
import GitHub from "../assets/images/github.svg?react";
import Web from "../assets/images/globe.svg?react";

export default function SatCamp2025() {
  return (
    <>
      <Section dark>
        <MainNav />
      </Section>
      <Section dark>
        <LeftColumn>
          <SectionTitle>SatCamp 2025</SectionTitle>
        </LeftColumn>
        <RightColumn>
          <SubSectionTitle>Themes 2025</SubSectionTitle>
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

      <Section>
        <LeftColumn>
          <SectionTitle>Agenda 2025</SectionTitle>
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

      <Section dark id="lightning-talks">
        <LeftColumn>
          <SectionTitle>Lightning Talks 2025</SectionTitle>
        </LeftColumn>
        <RightColumn>
          <LightningTalkTitle flex/>
          <div style={{display: 'flex', flexDirection: 'row', gap: '10px'}}>
            <p className="text-3xl ml-12 text-light">
              <a className="underline" href="https://docs.google.com/presentation/d/e/2PACX-1vShkzzgndBGvlf13Xbx58D9iMrRNk7odOpGOM2yO9V2WLtFDsw9SWnWK7ZeEkMfEky7h6pkaSD9fKqC/pub?start=true&loop=false&delayms=15000">
                Maxar Open Data Program
              </a>
            </p>
          </div>
          <div className="mt-2" style={{display: 'flex', flexDirection: 'row', gap: '10px'}}>
            <p className="ml-12 text-light">Murray Smith</p>
            <a href="https://www.linkedin.com/in/gmsiv"><LinkedIn/></a>
          </div>

          <LightningTalkTitle flex/>
          <div style={{display: 'flex', flexDirection: 'row', gap: '10px'}}>
            <p className="text-3xl ml-12 text-light">
              <a className="underline" href="https://docs.google.com/presentation/d/e/2PACX-1vRk2ErIL2Tt3yDVWhvDg_Ds9zu2dgcSLQBvX-Tn0svxyO1QXmytojjW71VT6zOCLHQ2TnL_ml-VWBSq/pub?start=true&loop=false&delayms=15000">
                Common Space - What We've Learned So Far
              </a>
            </p>
          </div>
          <div className="mt-2" style={{display: 'flex', flexDirection: 'row', gap: '10px'}}>
            <p className="ml-12 text-light">Bill Greer</p>
            <a href="https://www.linkedin.com/in/billfgreer/"><LinkedIn/></a>
          </div>

          <LightningTalkTitle flex/>
          <div style={{display: 'flex', flexDirection: 'row', gap: '10px'}}>
            <p className="text-3xl ml-12 text-light">
              <a className="underline" href="https://docs.google.com/presentation/d/e/2PACX-1vRN3RlIjCdcYho1-7Z-sAOfY5SXsUrkSZSJ508-NMMs2FdHLT1jBYc9CEDQZH7u0ZUE9dj-hYO7GA8T/pub?start=true&loop=false&delayms=15000">
                Why flood projections are hard
              </a>
            </p>
          </div>
          <div className="mt-2" style={{display: 'flex', flexDirection: 'row', gap: '10px'}}>
            <p className="ml-12 text-light">Kealie Pretzlav</p>
            <a href="https://www.linkedin.com/in/kealiep/"><LinkedIn/></a>
            <a href="https://www.pathwaysclimate.com/team/kealie-pretzlav"><Web/></a>
          </div>

          <LightningTalkTitle flex/>
          <div style={{display: 'flex', flexDirection: 'row', gap: '10px'}}>
            <p className="text-3xl ml-12 text-light">
              <a className="underline" href="https://docs.google.com/presentation/d/e/2PACX-1vRuYVieZ_7bVWxUuXzuKRBeFN6GQHb6VlboMDM8pnvD1sd2HvwhkTjspAUfBuSHTTxN_7_cSH4GbtHh/pub?start=true&loop=false&delayms=15000">
                Wicked smaht dynamic map tile rendering from Icechunk/Zarr with xpublish-tiles
              </a>
            </p>
          </div>
          <div className="mt-2" style={{display: 'flex', flexDirection: 'row', gap: '10px'}}>
            <p className="ml-12 text-light">Deepak Cherian</p>
            <a href="https://www.linkedin.com/in/deepak-cherian-593989308/"><LinkedIn/></a>
          </div>

          <LightningTalkTitle flex/>
          <div style={{display: 'flex', flexDirection: 'row', gap: '10px'}}>
            <p className="text-3xl ml-12 text-light">
              <a className="underline" href="https://docs.google.com/presentation/d/e/2PACX-1vT-FfpTp8g1-HVFRMHu-d3yx7QguCl8TqggBBOjN7K78UTo88RGIQ7FYAmNHQ7ESswstWqJvmqhuQRz/pub?start=true&loop=false&delayms=15000">
                Zero-storage ML with COG + STAC
              </a>
            </p>
          </div>
          <div className="mt-2" style={{display: 'flex', flexDirection: 'row', gap: '10px'}}>
            <p className="ml-12 text-light">Ashley Deaner</p>
            <a href="https://www.linkedin.com/in/ashleydeaner/"><LinkedIn/></a>
          </div>

          <LightningTalkTitle flex/>
          <div style={{display: 'flex', flexDirection: 'row', gap: '10px'}}>
            <p className="text-3xl ml-12 text-light">
              <a className="underline" href="https://docs.google.com/presentation/d/e/2PACX-1vQmxDUjXO_Gf35cMpWY3IX4MseRgZDuRAJ_Wyeu2exSUmxXpU06MUN-njMXlQBMi4er7-OfNntzsTqI/pub?start=true&loop=false&delayms=15000">
                Zines and Cartoons to Supplement Technology
              </a>
            </p>
          </div>
          <div className="mt-2" style={{display: 'flex', flexDirection: 'row', gap: '10px'}}>
            <p className="ml-12 text-light">Gus Becker</p>
            <a href="https://www.linkedin.com/in/c-gus-becker/"><LinkedIn/></a>
          </div>

          <LightningTalkTitle flex/>
          <div style={{display: 'flex', flexDirection: 'row', gap: '10px'}}>
            <p className="text-3xl ml-12 text-light">
              <a className="underline" href="https://docs.google.com/presentation/d/e/2PACX-1vQjLc4vrJDxleUAQ4n06i_LC2syVQY1MDy6oQUKaQSaB0cx1jn3eKexzSqjh_KBrKLUtPsz7YqhchLD/pub?start=true&loop=false&delayms=15000">
                Snowpack and albedo
              </a>
            </p>
          </div>
          <div className="mt-2" style={{display: 'flex', flexDirection: 'row', gap: '10px'}}>
            <p className="ml-12 text-light">Sebastien Lenard</p>
            <a href="https://www.linkedin.com/in/sebastien-lenard-173b6a12"><LinkedIn/></a>
          </div>

          <LightningTalkTitle flex/>
          <div style={{display: 'flex', flexDirection: 'row', gap: '10px'}}>
            <p className="text-3xl ml-12 text-light">
              <a className="underline" href="https://docs.google.com/presentation/d/e/2PACX-1vQoWZz4y-KTq7Ar3DSIQ8XcwpmALv5FI66eggHRxgjZqWU747NH1kWEyZfrBPqMVAhVSGz5ufBotqRP/pub?start=true&loop=false&delayms=15000">
                Scaling and visualizing high(ish) resolution data
              </a>
            </p>
          </div>
          <div className="mt-2" style={{display: 'flex', flexDirection: 'row', gap: '10px'}}>
            <p className="ml-12 text-light">Shane Loeffler</p>
            <a href="https://github.com/Shane98c"><GitHub/></a>
          </div>

          <LightningTalkTitle flex/>
          <div style={{display: 'flex', flexDirection: 'row', gap: '10px'}}>
            <p className="text-3xl ml-12 text-light">
              <a className="underline" href="https://docs.google.com/presentation/d/e/2PACX-1vRSlSzBBC4CGHo39LBUFWmkT2BTtP1myaAT9_nxYEXgWIM7Hfdl9mudafyWEgqe6smWsfxLxqiQfd0-/pub?start=true&loop=false&delayms=15000">
                Nobody Cares About Your Data
              </a>
            </p>
          </div>
          <div className="mt-2" style={{display: 'flex', flexDirection: 'row', gap: '10px'}}>
            <p className="ml-12 text-light">Maggie Cawley</p>
            <a href="https://www.linkedin.com/in/maggiecawley/"><LinkedIn/></a>
          </div>

          <LightningTalkTitle flex/>
          <div style={{display: 'flex', flexDirection: 'row', gap: '10px'}}>
            <p className="text-3xl ml-12 text-light">
              <a className="underline" href="https://docs.google.com/presentation/d/e/2PACX-1vSWwl8rYFh5dFImmZpJUhE5eDnrp0nVSiTwAolz60tEctXNjIpZplff1D11ZXRMPpnT_VXqsOdZ3Jty/pub?start=true&loop=false&delayms=15000">
                How to find all that publicly-funded NASA data = earthaccess +
              </a>
            </p>
          </div>
          <div className="mt-2" style={{display: 'flex', flexDirection: 'row', gap: '10px'}}>
            <p className="ml-12 text-light">Diane Fritz</p>
            <a href="https://www.linkedin.com/in/diane-fritz-33bb8a283/"><LinkedIn/></a>
          </div>

          <LightningTalkTitle flex/>
          <div style={{display: 'flex', flexDirection: 'row', gap: '10px'}}>
            <p className="text-3xl ml-12 text-light">
              <a className="underline" href="https://docs.google.com/presentation/d/e/2PACX-1vQXMe0wy0G3TJEMGzSQwvej7SEPquWVUxMbT2z2BKRRNm2bUDuklUa0761Fq8EayJbpdt0JkCwbCsFA/pub?start=true&loop=false&delayms=15000">
                Fighting Data Gravity: A Field Report from the Edge
              </a>
            </p>
          </div>
          <div className="mt-2" style={{display: 'flex', flexDirection: 'row', gap: '10px'}}>
            <p className="ml-12 text-light">Stefan Amberger</p>
            <a href="https://www.linkedin.com/in/stefan-amberger/"><LinkedIn/></a>
          </div>

          <LightningTalkTitle flex/>
          <div style={{display: 'flex', flexDirection: 'row', gap: '10px'}}>
            <p className="text-3xl ml-12 text-light">
              <a className="underline" href="https://docs.google.com/presentation/d/e/2PACX-1vTfA51i_0KOlqA-eb_YMBIm_O7Di7R15FdhhJCH3Viwz3e-25jTrt8a2tGb_FaUyX1441tU6RTNBsGf/pub?start=true&loop=false&delayms=15000">
                What I Talk About When I Talk About Coding
              </a>
            </p>
          </div>
          <div className="mt-2" style={{display: 'flex', flexDirection: 'row', gap: '10px'}}>
            <p className="ml-12 text-light">Pete Gadomski</p>
            <a href="https://www.gadom.ski"><Web/></a>
          </div>

          <LightningTalkTitle flex/>
          <div style={{display: 'flex', flexDirection: 'row', gap: '10px'}}>
            <p className="text-3xl ml-12 text-light">
              <a className="underline" href="https://docs.google.com/presentation/d/e/2PACX-1vSGM4TEO5wVJivt0aExrNuZHxat8YoUs9RmaWHZ1zttWTY6P78x1YmbitnVNObUDryBnQFN-Jtp7F3_/pub?start=true&loop=false&delayms=15000">
                What's the future of desktop GIS?
              </a>
            </p>
          </div>
          <div className="mt-2" style={{display: 'flex', flexDirection: 'row', gap: '10px'}}>
            <p className="ml-12 text-light">Zac Deziel</p>
            <a href="https://www.linkedin.com/in/zacdeziel"><LinkedIn/></a>
          </div>

          <LightningTalkTitle flex/>
          <div style={{display: 'flex', flexDirection: 'row', gap: '10px'}}>
            <p className="text-3xl ml-12 text-light">
              <a className="underline" href="https://docs.google.com/presentation/d/e/2PACX-1vSo74SKePLzrhuanPnUJDhL9ITpTk9PfOnpFDp1v5N-7LVp5jjjfKU6X1UMLunc3iaLde5AKYwv0NWv/pub?start=true&loop=false&delayms=15000">
                Using geospatial technology to reduce rural isolation
              </a>
            </p>
          </div>
          <div className="mt-2" style={{display: 'flex', flexDirection: 'row', gap: '10px'}}>
            <p className="ml-12 text-light">Cameron Kruse</p>
            <a href="https://www.linkedin.com/in/krusecameron/"><LinkedIn/></a>
          </div>

          <LightningTalkTitle flex/>
          <div style={{display: 'flex', flexDirection: 'row', gap: '10px'}}>
            <p className="text-3xl ml-12 text-light">
              <a className="underline" href="https://docs.google.com/presentation/d/e/2PACX-1vTDjV7mEI8VhT5REYUrLCPHCrRRgXU7T1eAA__UURRXVbZATnyQq-L0CJXd66j-QTdW6YB_W7Bn3stP/pub?start=true&loop=false&delayms=15000">
                Data for Development - Working with Governments
              </a>
            </p>
          </div>
          <div className="mt-2" style={{display: 'flex', flexDirection: 'row', gap: '10px'}}>
            <p className="ml-12 text-light">Erica Brandt</p>
            <a href="https://www.linkedin.com/in/ericabrandt1/"><LinkedIn/></a>
          </div>

          <LightningTalkTitle flex/>
          <div style={{display: 'flex', flexDirection: 'row', gap: '10px'}}>
            <p className="text-3xl ml-12 text-light">
              <a className="underline" href="https://docs.google.com/presentation/d/e/2PACX-1vQ-eoZvwENyJ-trQVrDSN_wFoMjrcdOsWwIP3YUR4ePcepKz8lpVkl2aS_LTLh0xBvNIMnLxFq7w9wv/pub?start=true&loop=false&delayms=15000">
                The True Cost of Coal: LiDAR mapping of unreclaimed Appalachian coal mines
              </a>
            </p>
          </div>
          <div className="mt-2" style={{display: 'flex', flexDirection: 'row', gap: '10px'}}>
            <p className="ml-12 text-light">Alana Lutz</p>
            <a href="https://www.linkedin.com/in/alana-lutz-927a61260"><LinkedIn/></a>
          </div>

          <LightningTalkTitle flex/>
          <div style={{display: 'flex', flexDirection: 'row', gap: '10px'}}>
            <p className="text-3xl ml-12 text-light">
              <a className="underline" href="https://docs.google.com/presentation/d/e/2PACX-1vTZUBbv2vC-yXOhkFDGuc-f8tlGHvgeYlHsuaY_8RsGNnjDs2ZjAqghllZ7iUbviNkKxLGVRBq9yh5x/pub?start=true&loop=false&delayms=15000">
                Are your tiles happy?
              </a>
            </p>
          </div>
          <div className="mt-2" style={{display: 'flex', flexDirection: 'row', gap: '10px'}}>
            <p className="ml-12 text-light">Vincent Sarago</p>
            <a href="https://www.linkedin.com/in/vincentsarago"><LinkedIn/></a>
          </div>
        </RightColumn>
      </Section>
    </>
  );
}
