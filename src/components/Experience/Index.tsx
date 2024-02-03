import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import ExperienceCard from "../Cards/ExperienceCard";
import { experiences } from "../../variant/Content";
import {
  Container,
  Desc,
  TimelineSection,
  Title,
  Wrapper,
} from "./ExperienceStyled";
import { useTheme } from "styled-components";

const Experience: React.FC = () => {
  const theme = useTheme();
  return (
    <Container id="experience">
      <Wrapper>
        <Title>Experience</Title>
        <Desc>
          My work experience as a software engineer and working on different
          companies and projects.
        </Desc>
        <TimelineSection>
          <Timeline>
            {experiences
              .slice()
              .reverse()
              .map((experience, index) => (
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot variant="outlined" />
                    {index !== experiences.length - 1 && (
                      <TimelineConnector
                        style={{ background: theme.primary }}
                      />
                    )}
                  </TimelineSeparator>
                  <TimelineContent sx={{ py: "12px", px: 2 }}>
                    <ExperienceCard experience={experience} />
                  </TimelineContent>
                </TimelineItem>
              ))}
          </Timeline>
        </TimelineSection>
      </Wrapper>
    </Container>
  );
};

export default Experience;
