import React from 'react';
import {useAuthentication} from './hook/useAuth';
import Navigation from './navigation';
import AuthStack from './authStack';

export default function RootNavigation() {
  const { user } = useAuthentication();

  return user ? <Navigation /> : <AuthStack />;
}
