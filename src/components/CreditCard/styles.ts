import styled from 'styled-components';

export const Card = styled.div`
  height: 200px;
  width: 340px;
  background-color: #5b4587;
  padding: 40px 50px 20px 40px;
  border-radius: 20px;
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
  font-family: sans-serif;

  .ballon-1,
  .ballon-2,
  .ballon-3,
  .ballon-4,
  .ballon-5{
    height: 200px;
    width: 200px;
    border-radius: 50%;
    background-color: #9986c1;
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
    font-size: 20px;
    margin: 0;
    font-weight: 500;
  }

  .credit {
    display: flex;
    justify-content: flex-start;
    color: #fff;
    margin-top: 40px;
    font-size: 18px;
    
    &__name {
      margin-right: 10px;
      font-weight: 600;
    }
    
    &__number {
      opacity: .4;
    }
  }

  .author {
    color: #fff;
    display: flex;
    justify-content: space-between;
    margin-top: 18px;
    
    &__name {
      margin-bottom: 0;  
      font-weight: 500;
    }
    &__date {
      margin-bottom: 0;
      opacity: .8;
    }
  }
`;