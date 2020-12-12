import React from 'react';
import Auth from '../Components/Auth';
import Loader from '../Components/Loader';
import HomeComponent from '../Components/HomeComponent';

export default function Home({ user }) {
  const loadComponent = () => {
    let component = '';
    if (user === null) {
      component = <Loader />;
    } else if (user) {
      component = <HomeComponent />;
    } else {
      component = <Auth />;
    }
    return component;
  };

  return (
    <div>
      <h1>Atlas Reign</h1>
      {loadComponent()}
    </div>
  );
}
