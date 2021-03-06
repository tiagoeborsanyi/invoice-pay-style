import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  grid-area: AS;
  
  background-color: #fff;
  height: 100vh;
  width: 12rem;
  max-width: 20rem;
  transition: all .5s;

  &.expand {
    width: 30rem;
    align-items: flex-start;
    padding-left: 5rem;
  }

  /* @media only screen and (max-width: 768px) {
    display: none;
  } */
`;

export const Header = styled.header`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 55px;
  transition: all .5s;

  &.header-expand {
    justify-content: flex-start;
    margin-left: -15px;
  }
`;

export const LogoImg  = styled.img`
  height: 5.5rem;
`;

export const MenuContainer  = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  margin-top: 5rem;
`;

export const MenuItemLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.colors.white};
  text-decoration: none;

  &:hover,
  &.selected {
    color: ${props => props.theme.colors.primary}
  }

  &:not(:first-child) {
    margin-top: 4.6rem;
  }

  > svg {
    font-size: 2.9rem;
  }

  & > .expandTitle {
    font-size: 1.6rem;
    padding-left: 1rem;
  }
`;

export const ExpandButton = styled.button`
  color: ${props => props.theme.colors.white};
  margin-top: auto;
  margin-bottom: 8rem;
  background-color: transparent;

  &:hover {
    color: ${props => props.theme.colors.tertiaryGray}
  }

  > svg {
    font-size: 2.9rem;
  }
`;