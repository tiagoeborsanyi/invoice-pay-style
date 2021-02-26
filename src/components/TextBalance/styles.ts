import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  width: 43%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const Title = styled.h3`
  font-size: 2.5rem;
  font-weight: 500;
  color: rgba(0,0,0,.5);
`;

export const TotalValue = styled.span`
  font-size: 4rem;
  font-weight: 700;
  margin: 2.6rem 0;
`;

export const Moves = styled.div`
  display: flex;
   > div {
    :not(:last-child) {
      margin-right: 3rem;
    }
   }

   > div p {
     font-size: 1.6rem;
     margin-bottom: 1rem;
   }

   > div span {
     font-size: 1.5rem;
     color: rgba(0,0,0,.6);
     font-weight: 500;
   }
  
`;