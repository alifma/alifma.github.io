import { Modal } from "@mui/material";
import React from "react";
import {
  Button,
  ButtonGroup,
  Container,
  Date,
  Desc,
  Image,
  Label,
  Member,
  MemberImage,
  MemberName,
  Members,
  Tag,
  Tags,
  Title,
  Wrapper,
} from "./ProjectDetailStyled";
import { CloseRounded, GitHub, LinkedIn } from "@mui/icons-material";
import { Project, ProjectMember } from "../../types";

type ProjectDetailProps = {
  openModal: { state: boolean; project?: Project };
  setOpenModal: (e: { state: boolean; project?: Project }) => void;
};
const ProjectDetail: React.FC<ProjectDetailProps> = ({
  openModal,
  setOpenModal,
}) => {
  const project = openModal?.project;
  return (
    <Modal open={true} onClose={() => setOpenModal({ state: false })}>
      {project !== undefined ? (
        <Container>
          <Wrapper>
            <CloseRounded
              style={{
                position: "absolute",
                top: "10px",
                right: "20px",
                cursor: "pointer",
              }}
              onClick={() => setOpenModal({ state: false })}
            />
            <Image src={project?.image} />
            <Title>{project?.title}</Title>
            <Date>{project.date}</Date>
            <Tags>
              {project?.tags.map((tag: string) => (
                <Tag>{tag}</Tag>
              ))}
            </Tags>
            <Desc>{project?.description}</Desc>
            {project.member && (
              <>
                <Label>Members</Label>
                <Members>
                  {project?.member.map((member: ProjectMember) => (
                    <Member>
                      <MemberImage src={member.img} />
                      <MemberName>{member.name}</MemberName>
                      <a
                        href={member.github}
                        target="new"
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        <GitHub />
                      </a>
                      <a
                        href={member.linkedin}
                        target="new"
                        style={{ textDecoration: "none", color: "inherit" }}
                      >
                        <LinkedIn />
                      </a>
                    </Member>
                  ))}
                </Members>
              </>
            )}
            <ButtonGroup>
              <Button dull href={project?.github} target="new">
                View Code
              </Button>
              <Button href={project?.webapp} target="new">
                View Live App
              </Button>
            </ButtonGroup>
          </Wrapper>
        </Container>
      ) :
      <></>}
    </Modal>
  );
};

export default ProjectDetail;
