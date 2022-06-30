import styled from "styled-components";
import { breakpoints } from "../../lib/style/theme";

export const SectionWrapper = styled.div`
  padding: 25px;

  @media (${breakpoints.desktop}) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const SectionHeading = styled.h1`
  text-align: center;
  margin-bottom: 50px;
`;
