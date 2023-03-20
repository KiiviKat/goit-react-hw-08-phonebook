import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  gap: 8px;
  flex-direction: column;
`;

export const Item = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

export const ListTitle = styled.h3`
  font-size: 18px;
  line-height: 1.4;
  font-weight: 500;
  margin-bottom: 8px;
`;
