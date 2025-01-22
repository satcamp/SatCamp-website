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
          We encourage everyone to stay at <a className="underline underline-offset-2" href="https://www.chautauqua.com/" target="_blank">Chautauqua</a> at the foot of the Flatiron mountains in Boulder, CO. 
          There will be limited shared cabins available with tickets, but you can also book your own cabin directly with Chautauqua. Locals, feel free to sleep at home and commute in each day.
        </p>
        <SubSectionTitle flex>
          <Bus className="bg-transparent inline white mr-5 align-top"/>
          Getting from Denver Airport (DIA) to Boulder
        </SubSectionTitle>
        <p className="ml-12 text-light">
          To get from Denver Airport to Boulder and back, the public bus service RTD has a route called the AB1 with roughly hourly service.
          Find the <a className="underline underline-offset-2" href="https://app.rtd-denver.com/route/AB1/schedule?serviceType=3&direction=Eastbound&branch=" target="_blank">AB1 bus schedule here</a> 
          and note that the last bus of the day is at 11:20pm.
        </p>
        <SubSectionTitle flex>
          <Hotel className="bg-transparent inline white mr-5 align-top"/>
          Tickets
        </SubSectionTitle>
        <p className="ml-12 text-light">
          Tickets will be available soon! In the meantime, fill out <a className="underline underline-offset-2" href="https://forms.gle/yFi19miVd4urTFCz9" target="_blank">this interest form</a> 
          to be notified when they become available. We will likely be offering a limited number of scholarships for those who need financial assistance.
          {/* <a className="underline underline-offset-2" href="https://www.tickettailor.com/events/satcamp/1316756" target="_blank">Get your ticket here</a> 
          &nbsp;or <a className="underline underline-offset-2" href="https://docs.google.com/forms/d/e/1FAIpQLSeCDeEYpCaGfXJSs6Z-atFfm9kan5U6j2ZUTdBJGrS0mJvKUA/viewform" target="_blank">
          apply for a scholarship here</a>. Ticket quantities are limited and selling quickly so get yours soon! */}
        </p>
      </RightColumn>
    </Section>
  );
}