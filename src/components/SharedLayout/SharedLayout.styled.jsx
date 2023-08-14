import styled from '@emotion/styled';
import { FcBusinessman } from 'react-icons/fc';
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

export const LogOutBtn = styled.button`
  font-size: ${props => props.theme.fontSizes.medium};
  font-weight: ${props => props.theme.FontWeight.light};
  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.accent};
  padding: ${props => props.theme.spacing(1)};
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: blue;
  }
`;
export const LogedOutNav = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;


export const LogedInNav = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  // flex-direction: row;
  // justify-content: space-between;
`;

export const UserInfo = styled.div`
  margin-left: auto;
  display: inline-flex;
  align-items: center;
  gap: 10px;

  .FcBusinessman {
    width:20px;
    height: 20px;
  }
`;

export const UserEmail = styled.p`
  margin: 0;
`;

export const CustomFcBusinessman = styled(FcBusinessman)`
  width: 40px; /* Set your desired width */
  height: 40px; /* Set your desired height */
`;
