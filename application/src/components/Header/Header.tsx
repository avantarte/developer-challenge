import React from "react";
import logo from "../../styles/logo.svg";
import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;

  box-shadow: ${(props) => props.theme.header.boxShadowSm.boxShadow};
`;

const StyledHeaderTitle = styled.span`
  ${(props) => props.theme.header.visuallyHidden}
`;

const StyledHeaderImage = styled.img`
  height: 35px;
  padding: 10px;
  vertical-align: top;
`;

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <a href="/">
        <StyledHeaderTitle>Avant Arte</StyledHeaderTitle>
        <StyledHeaderImage alt="AvantArte" src={logo} />
      </a>
    </StyledHeader>
  );
};

export default Header;
