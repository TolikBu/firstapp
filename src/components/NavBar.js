import React from 'react';
import styled from 'styled-components';
import logoImg from '../image/logo.svg';

const NavBarStyled = styled.header`
  position: fixed;
  top: o;
  left; 0:
  z-index; 999:
  height: 80px;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background-color: #299B01;
  color: white;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
`;

const H1 = styled.h1`
  font-size: 24px;
  margin-left: 15px;
`;

const ImgLogo = styled.img`
  width: 50px;
`;

const LogIn = styled.button`
  font-size: 16px;
  padding: 10px 20px;
  outline: none;
  background-color: #299c81;
  border: 1px solid transparent;
  background-color: #f0f0f0;
  border-radius: 20px;
  cursor: pointer;
`;

export const NavBar = () => (
  <NavBarStyled>
    <Logo>
      <ImgLogo src={logoImg} alt="logo" />
      <H1>Burger</H1>
    </Logo>
    <LogIn>Войти</LogIn>
  </NavBarStyled>
);