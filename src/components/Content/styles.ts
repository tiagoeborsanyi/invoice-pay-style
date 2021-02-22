import styled from 'styled-components';

export const Container = styled.div`
  grid-area: CT;
  width: calc(100vw - 12rem);
  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.black};

  padding: 25px;

  height: calc(100vh - 70px);
`;