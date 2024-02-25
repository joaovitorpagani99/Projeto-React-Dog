import React from 'react';
import { UserContext } from '../../UseContext';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ element }) => {
  const { login } = React.useContext(UserContext);

  if (login === true) return element;
  else if (login === false) return <Navigate to="/login" />;
  else return null;
};

export default ProtectedRoute;