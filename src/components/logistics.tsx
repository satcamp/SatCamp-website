import { SectionTitle, SubSectionTitle, Section, LeftColumn, RightColumn } from "./sections";
import { ReactComponent as Bus } from "../assets/images/bus.svg";
import { ReactComponent as Hotel } from "../assets/images/hotel.svg";


export function LogisticsSection() {
  return (
    <Section dark className="bg-top bg-cover bg-image-logistics">
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
          <Bus className="bg-transparent white mr-5 align-top flex flex-auto flex-row"/>
          Getting from Denver Airport (DIA) to Boulder
        </SubSectionTitle>
        <p className="ml-12 text-light">
          <a className="underline underline-offset-2" href="https://app.rtd-denver.com/route/AB1/schedule?serviceType=3&direction=Eastbound&branch=" target="_blank">AB bus schedule</a> last bus is at 11:20pm.
        </p>
      </RightColumn>
    </Section>
  );
}