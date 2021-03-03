import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  padding-top: 5rem;
`;

export const CLeft = styled.div`
  flex: 0 0 73%;
  margin: 2rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  position: relative;

  @media only screen and (max-width: 1024px) {
    flex: 0 0 65%;
    width: 68%;
    height: 1150px;
  }
`;

export const Lineone = styled.div`
  height: 40%;
  width: 100%;
  display: flex;
  align-items: center;
  overflow: hidden;

  .credits {
    width: 100%;
    display: flex;
    margin-right: -100px;
  }

  > button {
    height: 5rem;
    width: 5rem;
    border-radius: 50%;

    position: absolute;
    top: 17%;
    right: -2.5rem;
    z-index: 100;
    box-shadow: 0 2px 3px 1px rgba(0,0,0,.3);
    transition: all .3s;
  }

  > button svg {
    font-size: 3rem;
    color: black;
  }

  > button:active,
  > button:hover {
    box-shadow: 0 2px 2px 1px rgba(0,0,0,.5);
    transform: translateY(3px) scale(.95);
  }

  @media only screen and (max-width: 1024px) {
    flex-direction: column;

    > button {
      display: block;
      top: 25%;
    }
  }
`;

export const Linetwo = styled.div`
  height: 55%;
  width: 100%;
`;

export const CRight = styled.div`
  /* background-color: blueviolet; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  margin: 2rem;

  @media only screen and (max-width: 1024px) {
   height: 1150px;
  }
`;

export const Imagem = styled.div`
  height: 40%;
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;
`;

export const Categories = styled.div`
  height: 55%;
  width: 100%;
`;