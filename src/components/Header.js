import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <PageHeader>
      <Heading>MPQ Champion Tracker</Heading>
      <Navbar>

      </Navbar>
    </PageHeader>
  );
};

const Heading = styled.h1`
  color: white;
  margin: 0;
  padding: 2rem 1rem;
`;

const Navbar = styled.navbar`

`;

const NavLink = styled.li`
  
`;

const PageHeader = styled.div`
  background-color: #1a53ff;
  display: flex;
`;

export default Header;
