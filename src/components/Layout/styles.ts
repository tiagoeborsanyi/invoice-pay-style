import styled from 'styled-components';

export const Grid = styled.div`
  display: grid;
  grid-template-columns: max-content auto;
  grid-template-rows: 70px auto;

  grid-template-areas: 
  'AS CT'
  'AS CT';

  width: auto;
  max-width: 170rem;
  height: 100vh;
  margin: 0 auto;

  @media only screen and (max-width: 1024px) {
    height: auto;
  }

  @media only screen and (max-width: 768px) {
    .aside-mobile {
      display: none;
    }
  }
`;