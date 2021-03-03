import styled from 'styled-components';

// interface ITransactionsProps {
//   color: string;
//   badge: string;
// }

export const Container = styled.div`
  height: 100%;
  flex: 1;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const TTitle = styled.div`
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
    padding: .7rem 1rem;
    border: 1px solid rgba(0,0,0, .1);
    border-radius: 7px;
    font-size: 1.3rem;
    transition: all .4s;

    :hover {
      transform: scale(.95);
      box-shadow: 0 2px 5px 0 rgba(0,0,0, .4);
    }
  }
`;

export const TList = styled.ul`
  width: 100%;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const TItem = styled.li`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  margin-bottom: 4rem;
  

  &:hover {
    cursor: pointer;
  }
  &:hover .icon {
    background-color: rgba(0, 0, 0, .2);
  }
  &:hover .iconbadge {
    background-color: rgba(0, 0, 0, .1);
  }
  &:hover p {
    opacity: .9;
  }
`;

export const TItemIcon = styled.div`
  background-color: rgba(0, 0, 0, .1);
  opacity: .7;
  padding: .8rem;
  border-radius: 9px;
  margin-right: 1.4rem;
  transition: all .3s;

  > svg {
    font-size: 3rem;
    color: ${props => props.color};
  }
`;

export const TItemText = styled.div`
  > p {
    font-size: 1.8rem;
    font-weight: 500;
    opacity: .7;
    margin-bottom: .3rem;
    transition: all .3s;
  }
  > span {
    font-size: 1.1rem;
    font-weight: 600;
    opacity: .4;
  }
`;

export const TItemBadge = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  padding: .5rem .8rem;
  border-radius: 20px;
  background-color: rgba(0, 0, 0, .08);
  transition: all .3s;

  > span {
    color: ${props => props.color};;
    font-size: 1.2rem;
    font-weight: 600;
    opacity: .8;
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2rem;
    width: 2rem;
    margin-right: 1rem;
    border-radius: 50%;
    background-color: ${props => props.color};
    ${props => (props.color === 'red' || props.color === 'green') && 'transform: rotate(30deg);'}
  }

  > div svg {
    font-size: 1.5rem;
    color: #fff;

  }
`;