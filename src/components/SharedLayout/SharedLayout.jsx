import { Outlet } from 'react-router-dom';

import { Header, Nav, StyledNavLink } from './SharedLayout.styled';
import { selectAuthentificated } from 'redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUserThunk } from 'redux/operations';

export const SharedLayout = () => {
    // const token = useSelector(selectToken);
   const dispatch = useDispatch();
  const authentificated = useSelector(selectAuthentificated);

  const handleLogOut = () => {
    dispatch(logoutUserThunk());
  };

  return (
    <div>
      <Header>
        <Nav>
          <StyledNavLink to="/">Home</StyledNavLink>
          {authentificated ? (
            <div>
              <StyledNavLink to="/contacts">Contacts</StyledNavLink>
              <button type="button" onClick={handleLogOut}>
                Log Out
              </button>
            </div>
          ) : (
            <div>
              <StyledNavLink to="/register">Register account</StyledNavLink>
              <StyledNavLink to="/login">Sign in</StyledNavLink>
            </div>
          )}
        </Nav>
      </Header>
      <Outlet />
    </div>
  );
};
// No props to validate
