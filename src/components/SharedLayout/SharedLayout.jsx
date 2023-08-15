import { Outlet } from 'react-router-dom';

import {
  CustomFcBusinessman,
  Header,
  LogOutBtn,
  LogedInNav,
  LogedOutNav,
  Nav,
  StyledNavLink,
  UserEmail,
  UserInfo,
} from './SharedLayout.styled';
import {
  selectAuthentificated,
  selectUserData,
} from 'redux/auth/selectorsAuth';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUserThunk } from 'redux/auth/operationsAuth';

export const SharedLayout = () => {
  const dispatch = useDispatch();
  const authentificated = useSelector(selectAuthentificated);
  const userData = useSelector(selectUserData);

  const handleLogOut = () => {
    dispatch(logoutUserThunk());
  };

  return (
    <div>
      <Header>
        <Nav>
          {authentificated ? (
            <LogedInNav>
              <StyledNavLink to="/">Home</StyledNavLink>
              <StyledNavLink to="/contacts">Contacts</StyledNavLink>
              <UserInfo>
                <CustomFcBusinessman />
                <UserEmail>{userData.email}</UserEmail>
                <LogOutBtn type="button" onClick={handleLogOut}>
                  Log Out
                </LogOutBtn>
              </UserInfo>
            </LogedInNav>
          ) : (
            <LogedOutNav>
              <StyledNavLink to="/">Home</StyledNavLink>
              <StyledNavLink to="/register">Register</StyledNavLink>
              <StyledNavLink to="/login">Sign in</StyledNavLink>
            </LogedOutNav>
          )}
        </Nav>
      </Header>
      <Outlet />
    </div>
  );
};
// No props to validate
