import styled from 'styled-components';

interface ICategoriesProps {
  color: string
}

export const Container = styled.div`
`;

export const CTitle = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
margin-bottom: 7rem;

  > h3 {
    font-size: 3rem;
    opacity: .7;
  }
  > button {
    padding: .5rem;
    border: 1px solid rgba(0,0,0, .2);
    border-radius: 7px;
  }
  > button svg {
    font-size: 2.5rem;
    color: ${props => props.theme.colors.white};
  }
`;

export const CList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const CItem = styled.li`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  margin-bottom: 2rem;
`;

export const CItemIcon = styled.div`
  background-color: ${props => props.color};
  opacity: .7;
  padding: .8rem;
  border-radius: 9px;
  margin-right: 1.4rem;

  > svg {
    font-size: 3rem;
    color: #fff;
  }
`;

export const CItemText = styled.div`
  > p {
    font-size: 1.8rem;
    font-weight: 500;
    opacity: .7;
    margin-bottom: .3rem;
  }
  > span {
    font-size: 1.1rem;
    font-weight: 600;
    opacity: .4;
  }
`;