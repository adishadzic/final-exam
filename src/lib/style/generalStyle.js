import styled from "styled-components";
import { breakpoints } from "./theme";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  row-gap: 32px;

  @media (${breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }

  @media (${breakpoints.desktop}) {
    grid-template-columns: repeat(3, 1fr);
    width: 992px;
  }
`;
