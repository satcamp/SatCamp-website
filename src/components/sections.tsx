import type { HTMLAttributes } from "react";


export const Section = (
  { children, dark, className="", id }: HTMLAttributes<HTMLElement> & { dark?: boolean, className?: string, id?: string }
  ) =>
  <section
    id={id}
    className={`w-full flex flex-col items-center ${dark ? " bg-secondary text-white" : "" } ${className}`}
  >
    <div className="w-full px-5 md:px-0 md:w-5/6 md:flex md:flex-row">
      { children }
    </div>
  </section>;

export const LeftColumn = ({ children }: HTMLAttributes<HTMLElement>) =>
  <div className="relative w-full md:w-1/3 ">
    <div className="sticky top-12">{ children }</div>
  </div>;

export const RightColumn = ({ children }: HTMLAttributes<HTMLElement>) =>
  <div className="w-full md:w-3/5 mb-24 font-light text-xl">{ children }</div>;

export const SectionTitle = ({ children }: HTMLAttributes<HTMLElement>) =>
  <h2 className="uppercase font-normal text-4xl mt-32">{ children }</h2>;

export const SubsectionImage = ({ image_name }: {image_name: string}) =>
  <div className={`rounded-2xl h-80 w-full mb-14 bg-cover bg-center bg-image-${image_name}`} />;

export const SubSectionTitle = ({ children, image_name, flex }: HTMLAttributes<HTMLElement> & {image_name?: string, flex?: boolean}) =>
  <div className="mt-32">
    {image_name && <SubsectionImage image_name={image_name} />}
    <h3 className={`font-bold text-4xl pb-7 mt-0 ${flex ? "flex flex-auto flex-row" : ""}`}>
      { children }
    </h3>
  </div>;

export const LightningTalkTitle = ({ children, image_name, flex }: HTMLAttributes<HTMLElement> & {image_name?: string, flex?: boolean}) =>
  <div className="mt-4">
    {image_name && <SubsectionImage image_name={image_name} />}
    <h3 className={`font-bold text-2xl pb-7 mt-0 ${flex ? "flex flex-auto flex-row" : ""}`}>
      { children }
    </h3>
  </div>;


export const LocationDesc = ({ children, flex }: HTMLAttributes<HTMLElement> & {flex?: boolean}) =>
    <h2 className={`font-bold text-2xl pb-7 mt-0 ${flex ? "flex flex-auto flex-row" : ""}`}>
      Location: { children }
    </h2>;

export const List = ({ children }: HTMLAttributes<HTMLElement>) =>
  <ul className="list-disc ml-8 marker:text-sm font-light text-xl">{ children }</ul>;

export const Item = ({ children }: HTMLAttributes<HTMLElement>) =>
  <li className="pb-7">{ children }</li>;