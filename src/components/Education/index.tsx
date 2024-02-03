import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { educations, experiences } from "../../variant/Content";
import EducationCard from "../Cards/EducationCard";
import { Container, Desc, TimelineSection, Title } from "./EducationStyled";
import { Wrapper } from "../Skills/SkillsStyled";
import { useTheme } from "styled-components";

const Education: React.FC = () => {
  const theme = useTheme();
  return (
    <Container id="education">
      <Wrapper>
        <Title>Education</Title>
        <Desc>
          My education has been a journey of self-discovery and growth. My
          educational details are as follows.
        </Desc>
        <TimelineSection>
          <Timeline>
            {educations
              .slice()
              .reverse()
              .map((education, index) => (
                <TimelineItem>
                  <TimelineContent sx={{ py: "12px", px: 2 }}>
                    <EducationCard education={education} />
                  </TimelineContent>
                  <TimelineSeparator>
                    <TimelineDot variant="outlined" />
                    {index !== experiences.length && (
                      <TimelineConnector
                        style={{ background: theme.primary }}
                      />
                    )}
                  </TimelineSeparator>
                </TimelineItem>
              ))}
          </Timeline>
        </TimelineSection>
      </Wrapper>
    </Container>
  );
};

export default Education;
