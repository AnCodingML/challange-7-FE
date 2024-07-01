import {Breadcrumb, Button, Image, Container, Spinner} from 'react-bootstrap'
import { useCars } from '../../context/carsContext';
import { useEffect, useState } from 'react';
import Edit from '../../assets/Edit.svg'
import { UUID } from 'crypto';
import axios from '../../lib/axios';
import Swal from 'sweetalert2'
import AlertImgCar from '../../assets/img-BeepBeep.svg'
import { Navigate, useOutletContext } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function CarsCms() {
   const navigate = useNavigate()
   const { cars, fetchCars, loading, error } = useCars();
   const [activeFilter, setActiveFilter] = useState('All');
   const [filters, setFilters] = useState({sizeCar:''})
   const { searchCar } = useOutletContext<{ searchCar: string }>();

   const deleteCar = async (carId:UUID) => {
      Swal.fire({
         title: "Menghapus Data Mobil",
         text: "Setelah dihapus, data mobil tidak dapat dikembalikan. Yakin ingin menghapus?",
         imageUrl: AlertImgCar,
         imageWidth: 400,
         imageHeight: 200,
         imageAlt: "Custom image",
         showCancelButton: true,
         confirmButtonColor: "#0D28A6",
         cancelButtonColor: "#d33",
         confirmButtonText: "Ya",
         cancelButtonText: "Tidak"
       }).then((result) => {
         if (result.isConfirmed) {
            try {
               axios.delete(`cars?id=${carId}`)
               Swal.fire({
                  title: "Deleted!",
                  text: "Your file has been deleted.",
                  icon: "success"
                }).then(() => {
                  fetchCars()
                });
             } catch (error) {
               Swal.fire({
                  title: "Gagal Menghapus!",
                  text: "Gagal menghapus item mobil",
                  icon: "warning"
                });
                console.log(error)
             }
         }
       });
   }
   useEffect(() => {
      fetchCars({ ...filters, searchCar });
    }, [filters, searchCar]);

    const handleFilter = (passengerCount:string) => {
      setActiveFilter(passengerCount)
      if (passengerCount === 'All') return setFilters ({sizeCar:''})
      if (passengerCount === 'Small') return setFilters ({sizeCar:'Small'})
      if (passengerCount === 'Medium') return setFilters ({sizeCar:'Medium'})
      if (passengerCount === 'Large') return setFilters ({sizeCar:'Large'})
    } 

    const Header = () => (
      <>
         <Breadcrumb className="custom-breadcrumb bg-transparent">
            <Breadcrumb.Item href="#">Cars</Breadcrumb.Item>
            <Breadcrumb.Item active>List Cars</Breadcrumb.Item>
         </Breadcrumb>
         <div className='d-flex align-items-center'>
            <h1 className='fs-4 mb-0'>List Cars</h1>
            <div className='ms-auto'><Link to='/cms/dashboard/addCar' className='text-decoration-none'><Button className='d-flex bg-darkblue rounded-1 border-0'>+ <div className='ms-3'>Add New Car</div></Button></Link></div>
         </div>
         <div className='gap-2 d-flex mt-3'>
            <Button onClick={() => handleFilter('All')} className={`btn-small btn-filter-cms ${activeFilter === 'All' ? 'active' : ''}`}>All</Button>
            <Button onClick={() => handleFilter('Small')} className={`btn-small btn-filter-cms ${activeFilter === 'Small' ? 'active' : ''}`}>Small</Button>
            <Button onClick={() => handleFilter('Medium')} className={`btn-small btn-filter-cms ${activeFilter === 'Medium' ? 'active' : ''}`}>Medium</Button>
            <Button onClick={() => handleFilter('Large')} className={`btn-small btn-filter-cms ${activeFilter === '>=5' ? 'active' : ''}`}>Large</Button>
         </div>
      </>
   )

    if (loading) {
      return (
         <>
         <section className="cms">
         <Header />
         <Container className="d-flex justify-content-center align-items-center mt-5">
            <Spinner animation="border" variant="primary" />
         </Container>
         </section>
         </>
      );
   }

   if (error) {
      return (
         <>
         <section className="cms">
            <Header />
            </section>
         </>
      );
   }
   

   return (
      <>      
      <section className="cms">
         <Header />
         <div className='d-flex flex-wrap gap-3 mt-4 justify-content-center'>
            {cars.map(car => (
                  <div key={car.id} className="card-car rounded-3 shadow-sm p-3 d-grid border">
                     <div>
                        <Image className="car-img rounded-2" src={`http://localhost:5000/public${car.image}`} 
                          onError={(e) => {
                            if (!e.target.dataset.fallback) {
                              e.target.dataset.fallback = 'true';
                              e.target.src = `https://res.cloudinary.com/dny7zete3/image/upload/v1719396508/${car.image}.webp`;
                            }
                          }}/>
                        <p className="mb-2 mt-4 fw-semibold">{car.manufacture} - {car.model}</p>
                        <div className="mb-2"><b>Rp {car.rentPerDay} / hari</b></div>
                        <p className="description mb-2">{car.description}</p>
                     </div>
                     <div className="align-self-end d-flex gap-3">
                        <Button onClick={() => deleteCar(car.id)} size='lg' className="mt-4 col btn rounded-1 fw-semibold align-items-center flex-wrap d-flex justify-content-center gap-2" variant="outline-danger">
                           <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1.25"  stroke-linecap="round"  stroke-linejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-trash"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 7l16 0" /><path d="M10 11l0 6" /><path d="M14 11l0 6" /><path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" /><path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" /></svg>
                           <p className='mb-0'>Delete</p>
                        </Button>
                        <Button onClick={() => navigate(`/cms/dashboard/editCar?id=${car.id}`)} size='lg' className="mt-4 col btn rounded-1 btn-success border-0 fw-semibold align-items-center flex-wrap d-flex justify-content-center gap-2">
                           <Image src={Edit} alt='edit'/><p className='mb-0'>Edit</p>
                        </Button>
                     </div>
                  </div>
                ))}
         </div>
      </section>
      </>
   )
}