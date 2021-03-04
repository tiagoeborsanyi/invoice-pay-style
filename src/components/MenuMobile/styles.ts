import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 30%;
  text-align: center;
  padding-top: 35rem;
  background-color: #fdf;
  position: absolute;
  top: 0;
  left: -50%;
  z-index: 100;
  transition: all .3s;

  /* &.open {
    display: none
  } */

  > h1 {
    font-size: 3rem;
  }

  @media only screen and (max-width: 768px) {
    height: 120vh;
    width: 40%;
  }

  @media only screen and (max-width: 425px) {
    height: 100%;
    width: 45%;
  }
`;