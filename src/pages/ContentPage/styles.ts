import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  padding-top: 5rem;
`;

export const CLeft = styled.div`
  flex: 0 0 75%;
  margin: 2rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Lineone = styled.div`
  height: 40%;
  width: 100%;
  background-color: rgba(0,0,0,.2);
  display: flex;
  align-items: center;
`;

export const Linetwo = styled.div`
  height: 55%;
  width: 100%;
  background-color: yellowgreen;
`;

export const CRight = styled.div`
  background-color: blueviolet;
  flex: 1;
  margin: 2rem;
`;