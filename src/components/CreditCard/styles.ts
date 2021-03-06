import styled from 'styled-components';

interface IBackCardColor {
  backColor: string
  ballonOne: string
}

export const Card = styled.div<IBackCardColor>`
  height: 22rem;
  width: 36rem;
  background-color: ${props => props.backColor};
  padding: 40px 50px 20px 40px;
  border-radius: 20px;
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
  font-family: sans-serif;
  position: relative;

  @media only screen and (max-width: 1414px) {
    height: 18rem;
    width: 30rem;
  }

  @media only screen and (max-width: 768px) {
    height: 16rem;;
    padding-top: 20px;
  }

  :not(:last-child) {
    margin-right: 3rem;
  }

  .ballon-1,
  .ballon-2,
  .ballon-3,
  .ballon-4,
  .ballon-5{
    height: 200px;
    width: 200px;
    border-radius: 50%;
    background-color: ${props => props.ballonOne};
    opacity: .25;
    
    position: absolute;
  }

  .ballon-1 {
    right: -100px;
    top: -110px;
    
  }
  .ballon-2 {
    right: -70px;
    top: -130px;
  }
  .ballon-3 {
    right: -30px;
    top: -150px;
  }
  .ballon-4 {
    bottom: -160px;
    left: 50px;
  }
  .ballon-5 {
    bottom: -150px;
    left: 100px;
    background-color: #afa1ce;
    opacity: .1
  }

  .value {
    color: #fff;
    margin: 0;
    font-weight: 500;

    > span {
      font-size: 20px;
    }
  }

  .icon-card {
    font-size: 2rem;
    color: #fff;
    position: absolute;
    right: 4rem;
    top: 3rem;
  }

  .credit {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    color: #fff;
    margin-top: 3rem;
    font-size: 18px;

    @media only screen and (max-width: 768px) {
    margin-top: 1.5rem;
  }
    
    &__name {
      font-size: 4rem;
      margin-right: 10px;
      font-weight: 600;
    }
    
    &__number {
      font-size: 1.4rem;
      opacity: .4;
    }
  }

  .author {
    color: #fff;
    display: flex;
    justify-content: space-between;
    margin-top: 2.2rem;
    
    &__name {
      font-size: 1.4rem;
      margin-bottom: 0;  
      font-weight: 500;
    }
    &__date {
      font-size: 1.1rem;
      margin-bottom: 0;
      opacity: .8;
    }
  }
`;