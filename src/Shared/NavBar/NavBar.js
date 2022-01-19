import React from "react";
import styled from "styled-components";
import LogoImg from "../../images/home-logo.svg";
import SearchsIcon from "../../images/search-icon.svg";
import { FaHome, FaBell, FaUser , FaLayerGroup, FaCompass } from "react-icons/fa";
import {GiHamburgerMenu} from "react-icons/gi";


const NavBar = () => {
  return (
    <Container>
      <Content>
        <Logo>
          <a href="/">
            <img src={LogoImg} alt="" />
          </a>
        </Logo>
        <h3
          style={{ fontWeight: "999", fontFamily: "cursive", color: "#2D4BBB", marginRight:"15%" }}
        >
          Mudda
        </h3>

        <Nav>
          <NavListWrap>
            <NavList className="active">
              <a href="/">
                 <FaHome style={{fontSize:"22px"}}/>
                <span>Home</span>
              </a>
            </NavList>

            <NavList>
              <a href="/network">
                <FaCompass style={{fontSize:"22px"}}/>
                <span>Trending</span>
              </a>
            </NavList>

            <NavList>
              <a href="/jobs">
                <FaLayerGroup style={{fontSize:"22px"}}/>
                <span>Groups</span>
              </a>
            </NavList>

            <NavList>
              <a href="/notification">
                 <FaBell style={{fontSize:"22px"}}/>
                <span>Notifications</span>
              </a>
            </NavList>

            <NavList>
            <a href="/messaging">
              <FaUser style={{fontSize:"22px"}}/>
              <span>Profile</span>
            </a>
          </NavList>

            <Search>
              <div>
                <input type="text" placeholder="Search" />
              </div>
              <SearchIcon>
                <img src={SearchsIcon} alt="" />
              </SearchIcon>
            </Search>

            <NavList>
              <a href="/notification">
                <GiHamburgerMenu style={{fontSize:"22px"}}/>
                <span>Menu</span>
              </a>
            </NavList>
          </NavListWrap>
        </Nav>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  background-color: white;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  left: 0;
  right: 0;
  padding-left: 7%;
  padding-right: 3%;
  position: fixed;
  top: 0;
  z-index: 100;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  min-height: 100%;
  max-width: auto;
`;

const Logo = styled.span`
  margin-right: 15px;
  margin-left: 0px;
  font-size: 0px;
`;

const Search = styled.div`
  margin-top: 1rem;
  margin-left: 10%;
  margin-right: 2rem;
  opacity: 1;
  flex-grow: 1;
  position: relative;
  & > div {
    max-width: 300px;
    input {
      border: 10px;
      box-shadow: none;
      background-color: #eef3f8;
      border-radius: 2px;
      color: rgba(0, 0, 0, 0.9);
      width: 218px;
      padding: 0 8px 0 40px;
      line-height: 1.75;
      font-weight: 400;
      font-size: 16px;
      height: 34px;
      border-color: #dce6f1;
      vertical-align: text-top;
    }
  }
`;

const SearchIcon = styled.div`
  width: 40px;
  position: absolute;
  z-index: 1;
  top: 10px;
  left: 2px;
  border-radius: 0 2px 2px 0;
  margin: 0;
  pointer-events: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Nav = styled.nav`

  display: block;
  @media (max-width: 768px) {
    position: fixed;
    left: 0;
    bottom: 0;
    background: white;
    width: 100%;
  }
`;

const NavListWrap = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  list-style-type: none;
 
  .active {
    span:after {
      content: "";
      transform: scaleX(1);
      border-bottom: 2px solid var(--white, #fff);
      bottom: 0;
      left: 0;
      position: absolute;
      transition: transform 0.2s ease-in-out;
      width: 100%;
      border-color: rgb(0, 45, 179);
    }
  }
`;

const NavList = styled.li`
  display: flex;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  margin-top: 0.6rem;
  align-items: center;
  a {
    align-items: center;
    background: transparent;
    display: flex;
    flex-direction: column;
    font-size: 14px;
    font-weight: 400;
    justify-content: center;
    line-height: 1.5;
    color: rgb(0, 45, 179);
    min-height: 52px;
    min-width: 80px;
    position: relative;
    text-decoration: none;

    span {
      color: rgb(0, 45, 179);
      font-weight:550;
      display: flex;
      align-items: center;
    }

    @media (max-width: 768px) {
      min-width: 70px;
    }
  }

  &:hover,
  &:active {
    a {
      span {
        color: rgb(0, 45, 179);
        font-weight:bolder;
        font-size: 15px;
      }
    }
  }
`;


export default NavBar;
