import React, { Suspense } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts, refreshUserThunk } from 'redux/operations';
import {
  selectAuthentificated,
  selectError,
  selectIsLoading,
  selectToken,
} from 'redux/selectors';

import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from 'components/SharedLayout/SharedLayout';
import HomePage from 'components/pages/HomePage/HomePage';
import RegisterPage from 'components/pages/RegisterPage/RegisterPage';
import LoginPage from 'components/pages/LoginPage/LoginPage';
import ContactsPage from 'components/pages/ContactsPage/ContactsPage';
import PrivateRoute from 'components/PrivateRoute/PrivateRoute';

const App = () => {
  const dispatch = useDispatch();
  // const isLoading = useSelector(selectIsLoading);
  // const error = useSelector(selectError);
  // const token = useSelector(selectToken);
  // const authentificated = useSelector(selectAuthentificated);

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

    useEffect(() => {
      if (!selectToken || selectAuthentificated) return;

      dispatch(refreshUserThunk());
    }, [dispatch]);

  return (
    <div>
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route
              path="/contacts"
              element={
                <PrivateRoute redirectTo="/login">
                  <ContactsPage />
                </PrivateRoute>
              }
            />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
