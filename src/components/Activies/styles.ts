import styled from 'styled-components';

export const Container = styled.div`
  flex: 0 0 60%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-right: 5rem;
  position: relative;
`;

export const ATitle = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: space-between;
margin-bottom: 7rem;

  > h3 {
    font-size: 3rem;
    opacity: .7;
  }
  > button {
    padding: .5rem .9rem;
    border: 1px solid rgba(0,0,0, .1);
    border-radius: 4px;
    font-size: 1.1rem;
  }
`;

export const ChartContainer = styled.div`
  height: 65%;
  width: 93%;
  font-size: 600px;
  position: absolute;
  top: 71px;
  left: 0px;
`;

export const ChartInfo = styled.div`
  font-size: 3rem;
  position: absolute;
  top: 5%;
  left: 45%;

  > h5 {
    font-size: 1rem;
    font-weight: 600;
    color: rgba(0,0,0,.7);
    line-height: 0;
  }

  > span {
    font-size: 1.5rem;
    font-weight: 600;
    letter-spacing: 2px;
  }

`;