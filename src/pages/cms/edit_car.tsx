import { useLocation } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { Form, Button, Breadcrumb } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useCars, Car } from '../../context/carsContext';
import axios from '../../lib/axios';
import Swal from 'sweetalert2';

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const EditCar: React.FC = () => {
  const query = useQuery();
  const { cars, fetchCars } = useCars();
  const carId = query.get('id'); // Mengambil nilai dari query parameter 'id'
  const [filters, setFilters] = useState({ id: carId });
  const [car, setCar] = useState<Car | undefined>(undefined);
  const [imageCar, setImageCar] = useState({ image: '' });
  const navigate = useNavigate();

  useEffect(() => {
    fetchCars({ ...filters });
  }, []);

  useEffect(() => {
    if (cars) {
      const selectedCar = cars.find((c: Car) => c.id === carId);
      if (selectedCar) {
        setCar({
          plate: selectedCar.plate,
          manufacture: selectedCar.manufacture,
          model: selectedCar.model,
          image: selectedCar.image,
          rentPerDay: selectedCar.rentPerDay,
          capacity: selectedCar.capacity,
          description: selectedCar.description,
          transmission: selectedCar.transmission,
          available: selectedCar.available,
          type: selectedCar.type,
          year: selectedCar.year,
          options: selectedCar.options,
          specs: selectedCar.specs,
        });
        setImageCar({
          image: selectedCar.image
        })
      }
    }
  }, [cars, carId]);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type, checked, files } = e.target;
    setCar((prevCar) => ({
      ...prevCar,
      [name]: type === 'checkbox' ? checked : type === 'file' ? files?.[0] : value
    }));
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImageCar({ image: imageUrl });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    console.log(car)
    e.preventDefault();
    const formData = new FormData();
    Object.entries(car).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        formData.append(key, JSON.stringify(value));
        console.log("jalan")
      } else {
        formData.append(key, value as Blob | string);
      }
    });
    console.log(formData.values)
    try {
      await axios.put(`/cars?id=${carId}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then(() => {
        Swal.fire({
          title: "Success!",
          text: "Data berhasil diupdate",
          icon: "success"
        }).then(() => {
          navigate('/cms/cars');
        });
      });
      
    } catch (e) {
      Swal.fire({
        title: "Failed!",
        text: "Data gagal diupdate",
        icon: "warning"
      })
      console.log(e);
    }
  };

  if (!car) {
    return <div>Loading...</div>;
  }

  return (
    <section className='cms'>
      <Breadcrumb className="custom-breadcrumb bg-transparent">
        <Breadcrumb.Item href="#">Cars</Breadcrumb.Item>
        <Breadcrumb.Item active>List Cars</Breadcrumb.Item>
      </Breadcrumb>
      <h1 className='fs-4 mb-0'>Edit Car</h1>
      <Form onSubmit={handleSubmit} className=''>
        <div className='d-grid bg-white p-4 my-4'>
          <Form.Group controlId="formAvailable" className='mb-4'>
            <Form.Check
              type="checkbox"
              label="Available"
              name="available"
              checked={car.available}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formPlate">
            <Form.Label>Plate <span style={{ color: 'red' }}>*</span></Form.Label>
            <Form.Control
              type="text"
              name="plate"
              value={car.plate}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="formManufacture">
            <Form.Label>Manufacture <span style={{ color: 'red' }}>*</span></Form.Label>
            <Form.Control
              type="text"
              name="manufacture"
              value={car.manufacture || ''}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="formModel">
            <Form.Label>Model <span style={{ color: 'red' }}>*</span></Form.Label>
            <Form.Control
              type="text"
              name="model"
              value={car.model || ''}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="formImage">
            <Form.Label>Image</Form.Label>
            <div className='d-grid form-control border-0 p-0 mb-0'>
            <Form.Control
              type="file"
              name="image"
              onChange={handleChange}
              accept="image/*"
              // required
            />
            <img style={{ width: '300px', height: '200px' }} className="car-img rounded-2 mt-2" src={imageCar.image} 
              onError={(e) => {
                if (!e.target.dataset.fallback) {
                  e.target.dataset.fallback = 'true';
                  e.target.src = `https://res.cloudinary.com/dny7zete3/image/upload/v1719396508/${imageCar.image}.webp`;
                } else if (e.target.dataset.fallback === 'true') {
                  e.target.dataset.fallback = 'false';
                  e.target.src = `http://localhost:5000/public${imageCar.image}`;
                }
              }}/>
            </div>
          </Form.Group>
          <Form.Group controlId="formRentPerDay">
            <Form.Label>Rent Per Day <span style={{ color: 'red' }}>*</span></Form.Label>
            <Form.Control
              type="number"
              name="rentPerDay"
              value={car.rentPerDay || ''}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="formCapacity">
            <Form.Label>Capacity <span style={{ color: 'red' }}>*</span></Form.Label>
            <Form.Control
              type="number"
              name="capacity"
              value={car.capacity || ''}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="formDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              name="description"
              value={car.description || ''}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formTransmission">
            <Form.Label>Transmission <span style={{ color: 'red' }}>*</span></Form.Label>
            <Form.Control
              type="text"
              name="transmission"
              value={car.transmission || ''}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="formType">
            <Form.Label>Type <span style={{ color: 'red' }}>*</span></Form.Label>
            <Form.Control
              type="text"
              name="type"
              value={car.type || ''}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="formYear">
            <Form.Label>Year <span style={{ color: 'red' }}>*</span></Form.Label>
            <Form.Control
              type="number"
              name="year"
              value={car.year || ''}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="formOptions">
            <Form.Label>Options</Form.Label>
            <Form.Control
              type="text"
              name="options"
              value={car.options?.join(',') || ''}
              onChange={(e) => setCar({ ...car, options: e.target.value.split(',').map(option => option.trim()) })}
            />
          </Form.Group>
          <Form.Group controlId="formSpecs">
            <Form.Label>Specs</Form.Label>
            <Form.Control
              type="text"
              name="specs"
              value={car.specs?.join(',') || ''}
              onChange={(e) => setCar({ ...car, specs: e.target.value.split(',').map(spec => spec.trim()) })}
            />
          </Form.Group>
        </div>
        <div className='d-flex gap-2'>
          <Button onClick={() => navigate('/cms/dashboard/cars')} className="mt-3 bg-white btn btn-filter-cms active rounded-1" style={{ width: '100px' }}>
            Cancel
          </Button>
          <Button type="submit" className="mt-3 bg-darkblue rounded-1" style={{ width: '100px', border: '1px solid #0D28A6' }}>
            Save
          </Button>
        </div>
      </Form>
    </section>
  );
};

export default EditCar;
