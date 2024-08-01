import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <Nav>
      <Logo>
        <Link to="/">AstroApp</Link>
      </Logo>
      <NavMenu isOpen={isMenuOpen}>
        <NavItem><Link to="/">Home</Link></NavItem>
        <NavItem><Link to="/services">Services</Link></NavItem>
        <NavItem><Link to="/about">About</Link></NavItem>
        <NavItem><Link to="/contact">Contact</Link></NavItem>
      </NavMenu>
      <MenuToggle onClick={() => setMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </MenuToggle>
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: #2b0f3e; /* Updated to match site color */
  color: white;
  position: relative;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

const Logo = styled.div`
  font-size: 2rem;
  font-weight: bold;
  a {
    color: #e67e22; /* Accent color */
    text-decoration: none;
    &:hover {
      color: #ffd700; /* Hover effect */
    }
  }
`;

const NavMenu = styled.div`
  display: flex;
  @media (max-width: 768px) {
    display: ${props => (props.isOpen ? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    top: 60px;
    right: 20px;
    background: #2b0f3e; /* Match background */
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    width: 250px;
    z-index: 1000;
  }
`;

const NavItem = styled.div`
  margin: 0 1rem;
  a {
    color: white;
    text-decoration: none;
    font-weight: 500;
    display: block;
    padding: 0.75rem 1rem;
    transition: color 0.3s ease, background 0.3s ease;
    border-radius: 8px;
    &:hover {
      color: #e67e22; /* Accent color */
      background: rgba(255, 255, 255, 0.1);
    }
  }
  @media (max-width: 768px) {
    margin: 0;
    text-align: center;
    padding: 1rem;
    border-bottom: 1px solid #444;
    &:last-child {
      border-bottom: none;
    }
  }
`;

const MenuToggle = styled.div`
  display: none;
  cursor: pointer;
  @media (max-width: 768px) {
    display: block;
    font-size: 1.8rem;
    color: white;
  }
`;

export default Navbar;
