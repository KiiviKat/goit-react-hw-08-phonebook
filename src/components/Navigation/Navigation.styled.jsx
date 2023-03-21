import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledNavLink = styled(NavLink)`
  display: inline-block;
  color: inherit;
  padding: 8px;
  font-size: 16px;
  border: 1px solid DarkSlateBlue;
  border-radius: 4px;
  background-color: Plum;
  cursor: pointer;
  text-decoration: none;

  &:hover,
  &:focus,
  &:active {
    background-color: DarkSlateBlue;
    color: White;
  }
`;

export const Auth = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
`;
