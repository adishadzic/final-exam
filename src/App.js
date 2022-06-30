import { useEffect, useState } from "react";
import { getAllLectures } from "./api/api";
import LectureCard from "./components/LectureCard/LectureCard";
import Section from "./components/Section/Section";
import GlobalStyles from "./globalStyles";
import { Grid } from "./lib/style/generalStyle";

function App() {
  const [lectures, setLectures] = useState([]);

  const getLectures = async () => {
    try {
      const res = await getAllLectures();
      console.log(res);
      setLectures(res);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getLectures();
  }, []);

  return (
    <>
      <GlobalStyles />

      <Section sectionTitle="Speck Academy 2022">
        <Grid>
          {lectures.map((lecture, i) => {
            return (
              <LectureCard
                key={lecture.id}
                title={lecture.name}
                description={lecture.description}
                criteria={lecture.lecture_criteria.length === 0}
              />
            );
          })}
        </Grid>
      </Section>
    </>
  );
}

export default App;
