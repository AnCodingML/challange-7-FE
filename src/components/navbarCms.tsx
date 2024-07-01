import React, { useState, useEffect } from 'react';
import { Image, Nav } from 'react-bootstrap';
import HomeImg from '../assets/Home.svg';
import TruckImg from '../assets/Truck.svg';
import { Link } from 'react-router-dom';
import { useCars } from '../context/carsContext';
import Swal from 'sweetalert2';

interface NavigationCmsProps {
  searchCar: string;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const NavigationCms: React.FC<NavigationCmsProps> = ({ searchCar, handleInputChange }) => {
  const [profile, setProfile] = useState({
    nama: '',
    email: '',
    avatar: '',
    role: ''
  });

  useEffect(() => {
    const bearer = localStorage.getItem('users');
    if (bearer) {
      const user = JSON.parse(bearer);
      setProfile({
        nama: user.nama,
        email: user.email,
        avatar: user.avatar,
        role: user.role
      })
    }
  }, []);
  
  const handleProfile = () => {
    const swalCustom = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
        image: "rounded-2 swal__custom-img"
      }
    });
    swalCustom.fire({
      imageUrl: `http://localhost:5000/public${profile.avatar}`,
      imageWidth: 400,
      imageHeight: 200,
      title: `${profile?.nama}`,
      html: `
        <p class="text-center mb-0">${profile?.email}</p>
        <p class="text-center">${profile?.role}</p>
      `,
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Logout",
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem('users');
        window.location.reload();
      }
    })
  }

  return (
    <>
      <Nav id="navbar__left">
        <div id="navbar__menu" className="bg-darkblue text-center pt-3">
          <div className='navbar__list-menu'>
            <p className='ms-auto me-auto mb-0' style={{ height: '34px', width: '34px', backgroundColor: '#CFD4ED' }}></p>
          </div>
          <div className='navbar__list-menu'>
            <Link to="/cms/dashboard" className='text-decoration-none'>
              <Image src={HomeImg} alt='home' width={24} />
              <p className='text-white fs__navbar mb-0'>Dashboard</p>
            </Link>
          </div>
          <div className='navbar__list-menu'>
            <Link to="/cms/dashboard/cars" className='text-decoration-none'>
              <Image src={TruckImg} alt='home' width={24} />
              <p className='text-white fs__navbar mb-0'>Cars</p>
            </Link>
          </div>
        </div>
      </Nav>
      <Nav id="navbar__top" className='shadow-sm'>
        <div className='ms-auto me-3 align-content-center'>
          <div className='d-flex'>
            <input name='search' onChange={handleInputChange} value={searchCar} type="text" className="form-control border-none rounded-1" placeholder="Search for…" />
            <div id='navbar__profile' className='d-flex' onClick={handleProfile}>
            <Image className="img__profile rounded-circle ms-4" src={`http://localhost:5000/public${profile.avatar}`} 
              onError={(e) => {
                if (!e.target.dataset.fallback) {
                  e.target.dataset.fallback = 'true';
                  e.target.src = `https://res.cloudinary.com/dny7zete3/image/upload/v1719396508/${profile.avatar}.webp`;
                }
              }}/>
            <p className='align-self-center mb-0 ms-2'>{profile.nama}</p>
            </div>
          </div>
          
        </div>
      </Nav>
    </>
  );
}

export default NavigationCms;
