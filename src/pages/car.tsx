import {Container, Image, Col} from 'react-bootstrap';
import ImageCar from '../assets/car.png'

export default function Car() {
   return (
      <>
         <section>
            <Container fluid id='hero__home' className='align-content-center pb-4 pb-lg-0'>
               <Container className='hero__content'>
                  <Col lg={6} className='gap-3 d-grid pe-4'>
                  <h1>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
                  <p className='col-lg-10'>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
                  </Col>
               </Container>
               <Col lg={6} className='ms-auto text-end overflow-hidden d-none d-lg-block pt-4'>
                  <Image src={ImageCar} alt="car" className='car'/>
                  <div className='car-background'></div>
                  </Col>
            </Container>
         </section>
      </>
   )
}