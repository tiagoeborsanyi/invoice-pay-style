import styled from 'styled-components';

export const Container = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .menu-mobile {
    display: none;
  }

  @media only screen and (max-width: 1024px) {
    .menu-mobile {
      display: block;
      height: 5rem;
      width: 5rem;
      color: black;
    }
  }
`;

export const Form = styled.form`
  display: block;
  position: relative;

  & > input {
    height: 5rem;
    width: 50rem;
    font-size: 1.3rem;
    background-color: rgba(203,206,202,.05);
    border: 1px solid rgba(0,0,0, .1);
    border-radius: 50px;
    padding: 0 1rem 0 5rem;
    transition: all .4s;

    &:focus {
      width: 60rem;
      background-color: rgba(203,206,202,.05);
      border: 1px solid rgba(0,0,0, .1);

      @media only screen and (max-width: 1024px) {
        width: 51rem;
      }
    }

    &::placeholder {
      font-weight: 300;
    }
  }

  > svg {
      font-size: 2.5rem;
      color: ${props => props.theme.colors.gray};

      position: absolute;
      left: .9rem;
      top: 1.2rem;
    }
`;

export const ItemsContentHeader = styled.div`
  display: flex;
  align-items: center;
`;

export const ItemContentHeader = styled.div`
  margin-left: 6rem;

  @media only screen and (max-width: 1024px) {
    margin-left: 3rem;
  }

  &.item-date {
    display: flex;
    align-items: center;
    margin-right: 12rem;

    @media only screen and (max-width: 1024px) {
      margin-right: 0;
    }

    & > span {
      font-size: 1.3rem;
      color: rgba(0,0,0,.6);
      margin-right: 1.7rem;
    }

    > svg {
      color: rgba(0,0,0,.7);
      transition: all .3s;
    }

    > svg:hover {
      color: rgba(0,0,0,.5);
      cursor: pointer;
    }
  }

  & > img {
    height: 5rem;
  }

  &.item-img {
    padding: .8rem;
    background-color: rgba(0,0,0,.3);
    border-radius: 9px;
  }

  > svg {
    font-size: 3rem;
    color: ${props => props.theme.colors.gray};
    
  }

  &.item-svg {
    position: relative;
    
    &::before {
      content: "";
      height: 1.3rem;
      width: 1.3rem;
      border-radius: 50%;
      background-color: ${props => props.theme.colors.warning};

      position: absolute;
      top: -4px;
      right: 3px;
    }

    > svg {
      transition: all .2s;
    }

    > svg:hover {
      cursor: pointer;
      color: rgba(0,0,0,.4);
    }
  }
`;