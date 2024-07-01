import React, { useState } from 'react';
import NavigationCms from './navbarCms';
import { Outlet } from 'react-router-dom';

const LayoutCms: React.FC = () => {
  const [searchCar, setSearchCar] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchCar(e.target.value);
  };

  return (
    <>
      <NavigationCms searchCar={searchCar} handleInputChange={handleInputChange} />
      <main>
        <Outlet context={{ searchCar }} />
      </main>
    </>
  );
}

export default LayoutCms;
