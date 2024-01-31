import React from "react";
import { ThemeProvider } from "styled-components";
import { darkTheme } from './utils/Themes'
import Navbar from "./components/Navbar";
import './App.css';
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Education from "./components/Education";
import ProjectDetail from "./components/ProjectDetail";
import styled from "styled-components";
import Experience from "./components/Experience/Index";
import { Project } from "../src/types";

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
`

const Wrapper = styled.div`
  background: linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%);
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 100%,30% 98%, 0 100%);
`

function App() {
  const [openModal, setOpenModal] = React.useState<{state: boolean; project?: Project}>({ state: false });
  return (
    <ThemeProvider theme={darkTheme}>
        <Navbar/>
        <Body>
          <Hero />
          <Wrapper>
            <Skills />
            <Experience />
          </Wrapper>
          <Projects openModal={openModal} setOpenModal={setOpenModal} />
          <Wrapper>
            <Education />
            <Contact />
          </Wrapper>
          <Footer/>
          {openModal.state &&
            <ProjectDetail openModal={openModal} setOpenModal={setOpenModal} />
          }
        </Body>
    </ThemeProvider>
  );
}

export default App;
