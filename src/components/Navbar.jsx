import React, { useState } from "react";
import styled from "styled-components";
import { NavLink,Link } from "react-router-dom";

import ButtonBurguer from "./ButtonBurguer";

function Navbar({ handleClick, clicked }) {
  return (
    <NavContainer>
      <h2>PelisClub</h2>
      <div className={`links ${clicked ? "active" : ""}`}>
        <NavLink to="/Home">Home</NavLink>
        <NavLink to="/BlogList">Publicaciones</NavLink>
        <NavLink to="/BlogPost">Buscar publicacion</NavLink>
        <NavLink to="/Favs">Favoritos</NavLink>
        <NavLink to="/MustWathc">Quiero Ver</NavLink>
      </div>

      <div className="burguer">
        <ButtonBurguer clicked={clicked} handleClick={handleClick} />
      </div>

      <BgDiv className={`initial${clicked ? " active" : ""}`}></BgDiv>
    </NavContainer>
  );
}

export default Navbar;

const NavContainer = styled.nav`
  h2 {
    font-weight: 400;
    color: white;
  }
  padding: 0.4rem;
  background-color: #333;
  display: flex;
  align-items: center;
  justify-content: space-between;
  a {
    color: white;
    text-decoration: none;
    margin-right: 1rem;
  }
  .burguer {
    @media (min-width: 768px) {
      display: none;
    }
  }
  .links {
    position: absolute;
    top: -700px;
    left: -2000px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    transition: all 0.5s ease;
    right: 0;

    a {
      color: white;
      font-size: 2rem;
      display: block;
    }

    @media (min-width: 768px) {
      position: initial;
      margin: 0;

      a {
        color: white;
        font-size: 1rem;
        display: inline;
      }
    }
  }

  .links.active {
    width: 100%;
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 30%;
    left: 0;
    right: 0;
    text-align: center;

    a {
      font-size: 2rem;
      margin-top: 1rem;
      color: white;
    }
  }

  .active-link {
    color: red;
    font-weight: bold;
  }
`;

const BgDiv = styled.div`
position: absolute;
background-color: #222;
top: -700px;
left: -1000px;
width: 100%;
height: 100%;
z-index: -1;
transition: 0.6s ease;

&.active {
  border-radius: 0 0 80% 0;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  `