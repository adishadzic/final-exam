import { SectionHeading, SectionWrapper } from "./SectionStyle";

const Section = ({ sectionTitle, children }) => {
  return (
    <SectionWrapper>
      <SectionHeading>{sectionTitle}</SectionHeading>
      {children}
    </SectionWrapper>
  );
};

export default Section;
