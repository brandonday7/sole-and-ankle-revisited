import React from 'react';
import styled from 'styled-components/macro';

import { COLORS, WEIGHTS, BREAKPOINTS } from '../../constants';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import Icon from "../Icon"

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>

  return (
    <header>
      <SuperHeader />
      <MainHeader>
          <Logo />
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
          <NavLink href="/collections">Another Link</NavLink>
          <NavLink href="/collections">2 Links</NavLink>
          <NavIcon id="shopping-bag"></NavIcon>
          <NavIcon id="search"></NavIcon>
          <NavIcon id="menu" onClick={() => setShowMobileMenu(true)}></NavIcon>
        </Nav>
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const NavIcon = styled(Icon)`
  display: none;

  @media(max-width: ${BREAKPOINTS.tabletAndUp}rem) {
    display: initial;
  }

  &:last-of-type {
    margin-right: 32px;
  }
`

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 0;
  height: 72px;
  border-bottom: 1px solid ${COLORS.gray[300]};

  @media(max-width: ${BREAKPOINTS.tabletAndUp}rem) {
    border-top: 6px solid ${COLORS.gray[900]};
  }
`;

const Nav = styled.nav`
width: max-content;
  display: flex;
  gap: max(3vw, 15px);
  margin: 0px;
  overflow-x: scroll;
  width: max-content;

  @media(max-width: ${BREAKPOINTS.tabletAndUp}rem) {
    margin-left: auto;
    margin-right: 0;
    gap: 24px;
  }
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  white-space: nowrap;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: ${COLORS.secondary};
  }

  @media(max-width: ${BREAKPOINTS.tabletAndUp}rem) {
    display: none;
  }
`;

export default Header;
