import { SectionTitle, SubSectionTitle, Section, LeftColumn, RightColumn } from "./sections";
import { ReactComponent as Bus } from "../assets/images/bus.svg";
import { ReactComponent as Hotel } from "../assets/images/hotel.svg";


export function LogisticsSection() {
  return (
    <Section dark className="bg-top bg-cover bg-image-logistics" id="logistics">
      <LeftColumn>
        <SectionTitle>Logistics</SectionTitle>
      </LeftColumn>
      <RightColumn>
        <SubSectionTitle flex>
          <Hotel className="bg-transparent inline white mr-5 align-top"/>
          Lodging
        </SubSectionTitle>
        <p className="ml-12 text-light">
          Lodging at <a className="underline underline-offset-2" href="https://www.chautauqua.com/" target="_blank">Chautauqua</a> at the foot of the Flatiron mountains in Boulder, CO.
        </p>
        <SubSectionTitle flex>
          <Bus className="bg-transparent inline white mr-5 align-top"/>
          Getting from Denver Airport (DIA) to Boulder
        </SubSectionTitle>
        <p className="ml-12 text-light">
          <a className="underline underline-offset-2" href="https://app.rtd-denver.com/route/AB1/schedule?serviceType=3&direction=Eastbound&branch=" target="_blank">AB bus schedule</a> last bus is at 11:20pm.
        </p>
        <SubSectionTitle flex>
          <Hotel className="bg-transparent inline white mr-5 align-top"/>
          Tickets
        </SubSectionTitle>
        <p className="ml-12 text-light">
          <a className="underline underline-offset-2" href="https://www.tickettailor.com/events/satcamp/1316756" target="_blank">Get your ticket here</a> 
          &nbsp;or <a className="underline underline-offset-2" href="https://docs.google.com/forms/d/e/1FAIpQLSeCDeEYpCaGfXJSs6Z-atFfm9kan5U6j2ZUTdBJGrS0mJvKUA/viewform" target="_blank">
          apply for a scholarship here</a>. Currently, only "Superhero" and "Scholarship Sponsor" are available for everyone. "Early Access" tickets are available for those with an access code. 
          &nbsp;General tickets will be open to all within a few days!
        </p>
      </RightColumn>
    </Section>
  );
}