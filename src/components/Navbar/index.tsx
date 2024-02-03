import React from "react";
import {
  Nav,
  NavLink,
  NavbarContainer,
  Span,
  NavLogo,
  NavItems,
  GitHubButton,
  ButtonContainer,
  MobileIcon,
  MobileMenu,
  MobileLink,
} from "./NavbarStyled";
import { Bio } from "../../variant/Content";
import { useTheme } from "styled-components";
import { DarkMode, Face6, GitHub, LightMode, Menu } from "@mui/icons-material";

type NavbarProps = {
  setDarkMode: () => void;
  darkMode: boolean;
};

const Navbar: React.FC<NavbarProps> = (props: NavbarProps) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const theme = useTheme();
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo as="a" href="/">
          <a
            style={{
              display: "flex",
              alignItems: "center",
              color: theme.primary,
              marginBottom: "20;",
              cursor: "pointer",
            }}
          >
            <Face6 fontSize="large" /> <Span>Portfolio</Span>
          </a>
        </NavLogo>
        <MobileIcon>
          <Menu
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          />
        </MobileIcon>
        <NavItems>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#education">Education</NavLink>
        </NavItems>
        <ButtonContainer>
          <GitHubButton href={Bio.github} target="_blank">
            <GitHub /> Github
          </GitHubButton>
          <GitHubButton onClick={props.setDarkMode}>
            {props.darkMode ? <LightMode /> : <DarkMode />}
          </GitHubButton>
        </ButtonContainer>
        {isOpen && (
          <MobileMenu isOpen={isOpen}>
            <MobileLink
              href="#about"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              About
            </MobileLink>
            <MobileLink
              href="#skills"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Skills
            </MobileLink>
            <MobileLink
              href="#experience"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Experience
            </MobileLink>
            <MobileLink
              href="#projects"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Projects
            </MobileLink>
            <MobileLink
              href="#education"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              Education
            </MobileLink>
            <div
              style={{
                display: "flex",
                gap: "8px",
                justifyContent: "space-between",
              }}
            >
              <GitHubButton
                style={{
                  padding: "10px 16px",
                  background: `${theme.primary}`,
                  color: "white",
                  width: "max-content",
                }}
                href={Bio.github}
                target="_blank"
              >
                <GitHub /> Github
              </GitHubButton>
              <GitHubButton
                style={{
                  padding: "10px 16px",
                  background: `${theme.primary}`,
                  color: "white",
                  width: "max-content",
                }}
                onClick={props.setDarkMode}
              >
                {props.darkMode ? <LightMode /> : <DarkMode />}
              </GitHubButton>
            </div>
          </MobileMenu>
        )}
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
