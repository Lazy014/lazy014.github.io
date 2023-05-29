import React from "react";
import { useLocation, NavLink } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import "./Header.css";

import { HomeRounded, Telegram } from "@material-ui/icons";

import resumeData from "../../utils/resumeData";

import MyButton from "../Button/MyButton";

const Header = (prop) => {
  const pathname = useLocation().pathname;
  return (
    <Navbar expand="lg" className="header">
      <Nav.Link as={NavLink} to="/" className="header_nav">
        <Navbar.Brand className="header_home">
          <HomeRounded />
        </Navbar.Brand>
      </Nav.Link>

      <Navbar.Toggle />

      <Navbar.Collapse>
        <Nav className="navbar_nav">
          <Nav.Link
            as={NavLink}
            to="/"
            className={pathname === "/" ? "header_link_active" : "header_link"}
          >
            About
          </Nav.Link>
          <Nav.Link
            as={NavLink}
            to="/projects"
            className={
              pathname === "/projects" ? "header_link_active" : "header_link"
            }
          >
            Projects
          </Nav.Link>
        </Nav>
        <div className="header_icons">
          {Object.keys(resumeData.socials).map((key) => (
            <a key={key} href={resumeData.socials[key].Link}>
              {resumeData.socials[key].icon}
            </a>
          ))}
        </div>
        <Nav>
          <Nav.Link as={NavLink} to="/contactMe">
            <MyButton title={"Contact Me"} icon={<Telegram />} />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
