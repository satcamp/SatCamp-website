import { SectionTitle, SubSectionTitle, Section, LeftColumn, RightColumn } from "./sections";
import Bus from "../assets/images/bus.svg?react";
import Hotel from "../assets/images/hotel.svg?react";


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
        To make the most of SatCamp, we encourage everyone who can to stay at <a className="underline underline-offset-2" href="https://www.chautauqua.com/" target="_blank">Chautauqua</a>.
        There will be a limited number of shared cabins available, which will be availble to reserve once the tickets are on sale.
        If you prefer solo accomodations, you can book your own cabin directly with the Chautauqua office.
        </p>
        <SubSectionTitle flex>
          <Bus className="bg-transparent inline white mr-5 align-top"/>
          Getting from Denver Airport (DIA) to Boulder
        </SubSectionTitle>
        <p className="ml-12 text-light">
          To get from Denver Airport to Boulder and back, the public bus service RTD has a route called the AB1 with roughly hourly service.
          Find the <a className="underline underline-offset-2" href="https://app.rtd-denver.com/route/AB1/schedule?serviceType=3&direction=Eastbound&branch=" target="_blank">AB1 bus schedule here</a>. 
          Note that the last bus of the day is at 11:20pm.
        </p>
        <SubSectionTitle flex>
          <Hotel className="bg-transparent inline white mr-5 align-top"/>
          Tickets
        </SubSectionTitle>
        <p className="ml-12 text-light">
          {/* Tickets will be available soon!
          In the meantime, fill out <a className="underline underline-offset-2" href="https://forms.gle/3Du18t3dArRK8JTF9" target="_blank">this interest form</a>
          &nbsp;to be notified when they become available. We will likely be offering a limited number of scholarships for those who need financial assistance. */}
          Tickets are&nbsp;
          <a className="underline underline-offset-2" href="https://www.tickettailor.com/events/satcamp/2105822" target="_blank">available now</a>!  
          The event is capped at 80 people and has sold out every year, so get your ticket soon!  
          <br/><br/>  
          If you are limited by the cost of attending, there will be a few scholarships available.&nbsp;  
          <a className="underline underline-offset-2" href="https://docs.google.com/forms/d/e/1FAIpQLSfae7OyhepE_ba9_f--jhsCQN4__dOgXAmAS4MFMg7k-7YK0Q/viewform" target="_blank">  
          Apply for a scholarship here</a>
        </p>
      </RightColumn>
    </Section>
  );
}