import styled from 'styled-components';

export const Container = styled.div`
  grid-area: CT;
  /* width: calc(100vw - 12rem); */
  height: 100%;
  width: 100%;
  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.black};

  padding: 55px 25px 25px 25px;

  height: calc(100vh - 70px);

  @media only screen and (max-width: 425px) {
    height: 3150px;
  }
`;