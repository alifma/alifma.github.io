
import React from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectStyled'
import ProjectCard from '../Cards/ProjectCard'
import { projects, ProjectType } from '../../variant/constants'
import { Project } from '../../types'

type ProjectProps = {
    openModal: {state: boolean; project?: Project};
    setOpenModal: (e: { state: boolean; project?: Project }) => void;
}

const Projects:React.FC<ProjectProps> = ({openModal,setOpenModal}: ProjectProps) => {
  const [toggle, setToggle] = React.useState<ProjectType>(ProjectType.All);
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of projects. Here are some of it.
        </Desc>
        <ToggleButtonGroup >
          {toggle === ProjectType.All ?
            <ToggleButton active value={ProjectType.All} onClick={() => setToggle(ProjectType.All)}>All</ToggleButton>
            :
            <ToggleButton value={ProjectType.All} onClick={() => setToggle(ProjectType.All)}>All</ToggleButton>
          }
         <Divider />
          {toggle === ProjectType.Web ?
            <ToggleButton active value={ProjectType.Web} onClick={() => setToggle(ProjectType.Web)}>WEB APP'S</ToggleButton>
            :
            <ToggleButton value={ProjectType.Web} onClick={() => setToggle(ProjectType.Web)}>WEB APP'S</ToggleButton>
          }
           {/* 
          <Divider />
          {toggle === ProjectType.Android ?
            <ToggleButton active value={ProjectType.Android} onClick={() => setToggle(ProjectType.Android)}>ANDROID APP'S</ToggleButton>
            :
            <ToggleButton value={ProjectType.Android} onClick={() => setToggle(ProjectType.Android)}>ANDROID APP'S</ToggleButton>
          }
          <Divider />
          {toggle === ProjectType.Ml ?
            <ToggleButton active value={ProjectType.Ml} onClick={() => setToggle(ProjectType.Ml)}>MACHINE LEARNING</ToggleButton>
            :
            <ToggleButton value={ProjectType.Ml} onClick={() => setToggle(ProjectType.Ml)}>MACHINE LEARNING</ToggleButton>
          } */}
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === 'all' && projects
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
          {projects
            .filter((item) => item.category == toggle)
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects