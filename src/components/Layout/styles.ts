import styled from 'styled-components';

export const Grid = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 70px auto;

  grid-template-areas: 
  'AS CT'
  'AS CT';

  height: 100vh;
`;