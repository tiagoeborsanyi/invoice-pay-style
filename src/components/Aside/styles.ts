import styled from 'styled-components';

export const Container = styled.div`
  grid-area: AS;
  
  background-color: ${props => props.theme.colors.black};
  width: 12rem;
  max-width: 20rem;
`;

export const Header = styled.header`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LogoImg  = styled.img`
  height: 4rem;
`;

export const MenuContainer  = styled.nav`
  display: flex;
  flex-direction: column;

  margin-top: 5rem;
`;

export const MenuItemLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${props => props.theme.colors.gray};
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
`;