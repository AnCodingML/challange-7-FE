import axios from '../../lib/axios';
import React, { useState } from 'react';
import { Form, Button, Breadcrumb } from 'react-bootstrap';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

interface Car {
  plate: string;
  manufacture: string | null;
  model: string | null;
  image: string | null;
  rentPerDay: number | null;
  capacity: number | null;
  description: string | null;
  transmission: string | null;
  available: boolean;
  type: string | null;
  year: number | null;
  options: Array<string> | null;
  specs: Array<string> | null;
  created_by: string;
}

const CarForm: React.FC = () => {
  const navigate = useNavigate();
  const [imageCar, setImageCar] = useState({ image: '' });
  const [car, setCar] = useState<Car>({
    plate: '',
    manufacture: null,
    model: null,
    image: null,
    rentPerDay: null,
    capacity: null,
    description: '',
    transmission: null,
    available: false,
    type: null,
    year: null,
    options: [],
    specs: [],
    created_by: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type, checked, files } = e.target;
    setCar({
      ...car,
      [name]: type === 'checkbox' ? checked : type === 'file' ? files?.[0] : value
    });
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImageCar({ image: imageUrl });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData();
    Object.entries(car).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        formData.append(key, JSON.stringify(value));
      } else {
        formData.append(key, value as Blob | string);
      }
    });
  
    try {
      await axios.post('/cars', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then(() => {
        Swal.fire({
          title: "Success!",
          text: "Data berhasil ditambahkan",
          icon: "success"
        }).then(() => {
          navigate('/cms/dashboard/cars');
        });
      });
      
    } catch (e) {
      Swal.fire({
        title: "Failed!",
        text: "Data gagal ditambahkan",
        icon: "warning"
      })
      console.log(e);
    }
  };

  return (
    <section className='cms'>
      <Breadcrumb className="custom-breadcrumb bg-transparent">
          <Breadcrumb.Item href="#">Cars</Breadcrumb.Item>
          <Breadcrumb.Item active>List Cars</Breadcrumb.Item>
        </Breadcrumb>
      <h1 className='fs-4 mb-0'>Add New Car</h1>
      <Form onSubmit={handleSubmit} className=''>
        <div className='d-grid bg-white  p-4 my-4'>
        <Form.Group controlId="formAvailable" className='mb-4 gap-3'>
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
          <Form.Label>Image <span style={{ color: 'red' }}>*</span></Form.Label>
          <div className='d-grid form-control p-0 border-0 mb-0'>
          <Form.Control
            type="file"
            name="image"
            onChange={handleChange}
            accept="image/*"
            required
          />
          <img className="car-img rounded-2 mt-2" style={{ 
            width: imageCar.image === '' ? '0px' : '300px', 
            height: imageCar.image === '' ? '0px' : '200px' }} 
            src={imageCar.image} alt={imageCar.image} 
          />
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
          <Button onClick={() => navigate('/cms/dashboard/cars')} className="mt-3 bg-white btn btn-filter-cms active rounded-1" style={{width: '100px'}}>
            Cancel
          </Button>
          <Button type="submit" className="mt-3 bg-darkblue rounded-1" style={{width: '100px', border:'1px solid #0D28A6'}}>
            Save
          </Button>
        </div>
      </Form>
    </section>
  );
}

export default CarForm;
