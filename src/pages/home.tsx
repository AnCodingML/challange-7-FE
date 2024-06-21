import {Container ,Button, Col, Image} from 'react-bootstrap';
import Car from '../assets/car.png'
// import ImgService from '../assets/service.png'

export default function Home() {
   return (
      <>      
         <section>
            <Container fluid id='hero__home' className='align-content-center pb-4 pb-lg-0'>
               <Container className='hero__content'>
                  <Col lg={6} className='gap-3 d-grid pe-4'>
                  <h1>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
                  <p className='col-lg-10'>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
                  <Col><Button className='navbar__button rounded-1 px-3' variant="success">Mulai Sewa Mobil</Button></Col>
                  </Col>
               </Container>
               <Col lg={6} className='ms-auto text-end overflow-hidden d-none d-lg-block pt-4'>
                  <Image src={Car} alt="" className='car'/>
                  <div className='car-background'></div>
                  </Col>
            </Container>
         </section>

         
    </>
   )
}