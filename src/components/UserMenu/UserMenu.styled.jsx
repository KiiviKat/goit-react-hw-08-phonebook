import styled from 'styled-components';

export const UserBox = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const UserText = styled.p`
  max-width: 120px;
  font-size: 16px;
  line-height: 1.4;
  font-weight: 500;
`;

export const LogOutButton = styled.button`
  color: inherit;
  padding: 4px;
  font-size: 12px;
  border: 1px solid DarkSlateBlue;
  border-radius: 4px;
  background-color: Plum;
  cursor: pointer;

  &:hover,
  &:focus,
  &:active {
    background-color: DarkSlateBlue;
    color: White;
  }
`;
