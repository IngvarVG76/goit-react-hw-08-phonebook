import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';


export const Header = styled.header`
  background: linear-gradient(
    to left,
    #f64f59,
    #c471ed,
    #12c2e9
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  padding: 16px;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 5px;
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #333;
  margin-right: 16px;
  font-size: 18px;
  font-weight: bold;

  &.active {
    color: white;
  }
`;