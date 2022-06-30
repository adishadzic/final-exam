import styled from "styled-components";
import { colors } from "../../lib/style/theme";

export const LectureCardWrapper = styled.div`
  background-color: ${colors.bgPrimary};
  border: 1px solid ${colors.border};
  border-radius: 16px;
  padding: 24px;

  ${(props) =>
    props.hasNoCriteria &&
    `
      background-color: ${colors.danger}
    `}
`;

export const LectureCardHeader = styled.h2`
  text-align: center;
  margin-bottom: 15px;
`;

export const LectureCardDescription = styled.p``;
