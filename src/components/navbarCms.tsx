import React from 'react';
import { Image, Nav } from 'react-bootstrap';
import HomeImg from '../assets/Home.svg';
import TruckImg from '../assets/Truck.svg';
import { Link } from 'react-router-dom';

interface NavigationCmsProps {
  searchCar: string;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const NavigationCms: React.FC<NavigationCmsProps> = ({ searchCar, handleInputChange }) => {

  return (
    <>
      <Nav id="navbar__left">
        <div id="navbar__menu" className="bg-darkblue text-center pt-3">
          <div className='navbar__list-menu'>
            <p className='ms-auto me-auto mb-0' style={{ height: '34px', width: '34px', backgroundColor: '#CFD4ED' }}></p>
          </div>
          <div className='navbar__list-menu'>
            <Link to="/cms" className='text-decoration-none'>
              <Image src={HomeImg} alt='home' width={24} />
              <p className='text-white fs__navbar mb-0'>Dashboard</p>
            </Link>
          </div>
          <div className='navbar__list-menu'>
            <Link to="/cms/cars" className='text-decoration-none'>
              <Image src={TruckImg} alt='home' width={24} />
              <p className='text-white fs__navbar mb-0'>Cars</p>
            </Link>
          </div>
        </div>
      </Nav>
      <Nav id="navbar__top" className='shadow-sm'>
        <div className='ms-auto me-3 align-content-center'>
          <div className="input-group">
            <input name='search' onChange={handleInputChange} value={searchCar} type="text" className="form-control border-none" placeholder="Search for…" />
          </div>
        </div>
      </Nav>
    </>
  );
}

export default NavigationCms;
