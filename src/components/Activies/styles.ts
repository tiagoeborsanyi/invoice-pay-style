import styled from 'styled-components';

export const Container = styled.div`
  flex: 0 0 60%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-right: 2rem;
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