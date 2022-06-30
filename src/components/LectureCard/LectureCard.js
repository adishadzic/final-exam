import React from "react";
import { LectureCardDescription, LectureCardHeader, LectureCardWrapper } from "./LectureCardStyle";

const LectureCard = ({ title, description, criteria }) => {
  return (
    <LectureCardWrapper hasNoCriteria={criteria}>
      <LectureCardHeader>{title}</LectureCardHeader>
      <LectureCardDescription>{description}</LectureCardDescription>
    </LectureCardWrapper>
  );
};

export default LectureCard;
