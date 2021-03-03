import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;

  @media only screen and (max-width: 1440px) {
    height: 1000px;
    flex-direction: column;
    justify-content: space-between;
  }
`;