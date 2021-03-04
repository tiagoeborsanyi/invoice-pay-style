import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  width: 43%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  @media only screen and (max-width: 1414px) {
    margin-bottom: 2.3rem; 
  }

  @media only screen and (max-width: 1024px) {
    height: fit-content;
    margin-bottom: 2rem;
  }
`;

export const Title = styled.h3`
  font-size: 2.6rem;
  font-weight: 500;
  color: rgba(0,0,0,.45);
  margin-bottom: 2.5rem;

  @media only screen and (max-width: 1414px) {
    margin-bottom: .2rem; 
  }

  @media only screen and (max-width: 1024px) {
   margin-bottom: .2rem; 
  }
`;

export const TotalValue = styled.span`
  font-weight: 700;
  color: rgba(0,0,0,.85);
  margin: 2.6rem 0;

  > span {
    font-size: 3.8rem;
  }

  @media only screen and (max-width: 1414px) {
    margin-bottom: .5rem; 
  }
`;

export const Moves = styled.div`
  display: flex;
  margin-top: 1.5rem;
   > div {
    :not(:last-child) {
      margin-right: 3rem;
    }
   }

   > div .values-gains-expenses {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 1rem;
    
    > p span {
      font-size: 1.5rem;
      font-weight: 500;
      color: rgba(0,0,0,.8);
    }

    .arrow-up {
      color: ${props => props.theme.colors.greenPrimary};;
    }
    .arrow-down {
      color: ${props => props.theme.colors.warning};
    }
    > svg {
      font-size: 1.8rem;
      margin-right: .5rem;
    }
       
  }

   > div span {
     font-size: 1.5rem;
     color: rgba(0,0,0,.45);
     font-weight: 500;
   }
  
`;