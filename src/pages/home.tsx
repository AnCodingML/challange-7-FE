import {Container ,Button, Col, Image, Accordion} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { SplideTrack} from '../../node_modules/@splidejs/react-splide/src/js/components/SplideTrack/SplideTrack.tsx';
import '@splidejs/react-splide/css';
import Car from '../assets/car.png'
import ImageService from '../assets/service.png'
import ImageComplete from '../assets/icon_complete.svg'
import ImagePrice from '../assets/icon_price.svg'
import Image24hrs from '../assets/icon_24hrs.svg'
import ImageProffesional from '../assets/icon_professional.svg'
import Profil_1 from '../assets/profil1.png'
import Profil_2 from '../assets/profil2.png'
import Profil_3 from '../assets/profil3.jpg'
import Profil_4 from '../assets/profil4.webp'
import Star from '../assets/star.svg'

export default function Home() {
   return (
      <>      
         <section>
            <Container fluid id='hero__home' className='align-content-center pb-4 pb-lg-0'>
               <Container className='hero__content'>
                  <Col lg={6} className='gap-3 d-grid pe-4'>
                  <h1>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
                  <p className='col-lg-10'>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
                  <Col><Link to="car"><Button className='navbar__button rounded-1 px-3 fw-bold' variant="success">Mulai Sewa Mobil</Button></Link></Col>
                  </Col>
               </Container>
               <Col lg={6} className='ms-auto text-end overflow-hidden d-none d-lg-block pt-4'>
                  <Image src={Car} alt="car" className='car'/>
                  <div className='car-background'></div>
                  </Col>
            </Container>
         </section>

         <section className='break-top'>
            <Container className='d-grid d-lg-flex justify-content-between gap-5 gap-lg-0'>
               <Col lg={6} className='text-center'>
                  <Image src={ImageService} alt='service' className='w-100 service-image'/>
               </Col>
               <Col lg={6} className='d-grid align-content-around gap-4'>
                  <h2 className='mb-2 mb-lg-0'>Best Car Rental for any kind of trip in (Lokasimu)!</h2>
                  <p className='mb-2 mb-lg-0'>Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.</p>
                  <ul className='mb-0 image-list'>
                     <li><p>Sewa Mobil Dengan Supir di Bali 12 Jam</p></li>
                     <li><p>Sewa Mobil Lepas Kunci di Bali 24 Jam</p></li>
                     <li><p>Sewa Mobil Jangka Panjang Bulanan</p></li>
                     <li><p>Gratis Antar - Jemput Mobil di Bandara</p></li>
                     <li><p>Layanan Airport Transfer / Drop In Out</p></li>
                  </ul>
               </Col>
            </Container>
         </section>

         <section className='break-top'>
            <Container>
               <h2 className="fw-bolder fs-4 mb-3">Why Us?</h2>
               <p>Mengapa harus pilih Binar Car Rental</p>
               <Col xs={12} sm={8} md={6} lg={12} className="d-lg-flex d-grid mt-5 gap-4 justify-items-center ms-auto me-auto">
                  <Col className="border p-4 d-grid gap-3 rounded-3">
                     <Image src={ImageComplete} height="32px" width="32px" alt=""/>
                     <h3 className="fs-6 fw-bold mb-0">Mobil Lengkap</h3>
                     <p className="mb-0">Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat</p>
                  </Col>
                  <Col className="border p-4 d-grid gap-3 rounded-3">
                     <Image src={ImagePrice} height="32px" width="32px" alt=""/>
                     <h3 className="fs-6 fw-bold mb-0">Harga Murah</h3>
                     <p className="mb-0">Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain</p>
                  </Col>
                  <Col className="border p-4 d-grid gap-3 rounded-3">
                     <Image src={Image24hrs} height="32px" width="32px" alt=""/>
                     <h3 className="fs-6 fw-bold mb-0">Layanan 24 jam</h3>
                     <p className="mb-0">Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu</p>
                  </Col>
                  <Col className="border p-4 d-grid gap-3 rounded-3">
                     <Image src={ImageProffesional} height="32px" width="32px" alt=""/>
                     <h3 className="fs-6 fw-bold mb-0">Sopir Profesional</h3>
                     <p className="mb-0">Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu</p>
                  </Col>
               </Col>
            </Container>
         </section>

         <section className='break-top'>
            <h2 className="fw-bolder text-center mb-3">Testimonial</h2>
            <p className="text-center mb-4">Berbagai review positif dari para pelanggan kami</p>
            <Splide hasTrack={ false } options={{ 
               pagination: false, type   : 'loop', padding: '5rem', 
               gap: '1rem', focus:'center',
               breakpoints: {992: { padding: "0.75rem"}}}} aria-label="Testimonial">
               <SplideTrack>
                  <SplideSlide style={{maxWidth:"619px"}} className="rounded-3">
                     <Col className="rounded-3 shadow-sm d-sm-flex p-5 align-items-center gap-5 text-sm-start text-center" style={{minHeight:"270px"}}>
                        <Image className='rounded-circle profil' src={Profil_1} alt="Image 1" height={80} width={80} />
                        <div>
                           <div className="d-flex mb-3 justify-content-center justify-content-sm-start mt-3 mt-sm-0 ">
                           <img src={Star} height="18px" width="auto" alt=""/>
                           <img src={Star} height="18px" width="auto" alt=""/>
                           <img src={Star} height="18px" width="auto" alt=""/>
                           <img src={Star} height="18px" width="auto" alt=""/>
                           <img src={Star} height="18px" width="auto" alt=""/>
                           </div>
                           <p className="mb-2">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”</p>
                           <p className="fw-semibold">John Dee 32, Bromo</p>
                        </div>
                     </Col>
                  </SplideSlide>
                  <SplideSlide style={{maxWidth:"619px"}} className="rounded-3">
                     <Col className="rounded-3 shadow-sm d-sm-flex p-5 align-items-center gap-5 text-sm-start text-center" style={{minHeight:"270px"}}>
                        <Image className='rounded-circle profil' src={Profil_2} alt="Image 1" height={80} width={80} />
                        <div>
                           <div className="d-flex mb-3 justify-content-center justify-content-sm-start mt-3 mt-sm-0 ">
                           <img src={Star} height="18px" width="auto" alt=""/>
                           <img src={Star} height="18px" width="auto" alt=""/>
                           <img src={Star} height="18px" width="auto" alt=""/>
                           <img src={Star} height="18px" width="auto" alt=""/>
                           <img src={Star} height="18px" width="auto" alt=""/>
                           </div>
                           <p className="mb-2">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”</p>
                           <p className="fw-semibold">John Dee 32, Bromo</p>
                        </div>
                     </Col>
                  </SplideSlide>
                  <SplideSlide style={{maxWidth:"619px"}} className="rounded-3">
                     <Col className="rounded-3 shadow-sm d-sm-flex p-5 align-items-center gap-5 text-sm-start text-center" style={{minHeight:"270px"}}>
                        <Image className='rounded-circle profil' src={Profil_3} alt="Image 1" height={80} width={80} />
                        <div>
                           <div className="d-flex mb-3 justify-content-center justify-content-sm-start mt-3 mt-sm-0 ">
                           <img src={Star} height="18px" width="auto" alt=""/>
                           <img src={Star} height="18px" width="auto" alt=""/>
                           <img src={Star} height="18px" width="auto" alt=""/>
                           <img src={Star} height="18px" width="auto" alt=""/>
                           <img src={Star} height="18px" width="auto" alt=""/>
                           </div>
                           <p className="mb-2">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”</p>
                           <p className="fw-semibold">John Dee 32, Bromo</p>
                        </div>
                     </Col>
                  </SplideSlide>
                  <SplideSlide style={{maxWidth:"619px"}} className="rounded-3">
                     <Col className="rounded-3 shadow-sm d-sm-flex p-5 align-items-center gap-5 text-sm-start text-center" style={{minHeight:"270px"}}>
                        <Image className='rounded-circle profil' src={Profil_4} alt="Image 1" height={80} width={80} />
                        <div>
                           <div className="d-flex mb-3 justify-content-center justify-content-sm-start mt-3 mt-sm-0 ">
                           <img src={Star} height="18px" width="auto" alt=""/>
                           <img src={Star} height="18px" width="auto" alt=""/>
                           <img src={Star} height="18px" width="auto" alt=""/>
                           <img src={Star} height="18px" width="auto" alt=""/>
                           <img src={Star} height="18px" width="auto" alt=""/>
                           </div>
                           <p className="mb-2">“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”</p>
                           <p className="fw-semibold">John Dee 32, Bromo</p>
                        </div>
                     </Col>
                  </SplideSlide>

               </SplideTrack>   
               <div className="splide__arrows">
                  <button className="splide__arrow splide__arrow--prev"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 6l6 6l-6 6" /></svg></button>
                  <button className="splide__arrow splide__arrow--next"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 6l6 6l-6 6" /></svg></button>
               </div>
            </Splide>
         </section>

         <section className='break-top__big'>
            <Container>
               <div className="rounded-3 p-5 d-grid align-content-center justify-items-center bg-darkblue">
                  <h2 className="fw-bolder mb-4 text-center text-white">Sewa Mobil di (Lokasimu) Sekarang</h2>
                  <p className="col-lg-6 text-center text-white mx-auto mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                  <Col className="text-center"><Link to="car"><Button className='navbar__button rounded-1 px-3 fw-bold' variant="success">Mulai Sewa Mobil</Button></Link></Col>
               </div>
            </Container>
         </section>

         <section className='break-top'>
            <Container className="pt-5 d-lg-flex mb-5">
               <div className="col-lg-5">
                  <h2 className="fw-bolder fs-4 mb-4">Frequently Asked Question</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
               </div>
               <Accordion className="col-lg-7 d-grid gap-3 gap-lg-2" defaultActiveKey="0">
                  <Accordion.Item className="rounded-3 shadow-sm" eventKey="0" style={{border:"0.5px solid #D4D4D4"}}>
                     <Accordion.Header className="rounded-4 border-0">Apa saja syarat yang dibutuhkan</Accordion.Header>
                     <Accordion.Body>
                        <p className="mb-0">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</p>
                     </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item className="rounded-3 shadow-sm" eventKey="1" style={{border:"0.5px solid #D4D4D4"}}>
                     <Accordion.Header className="rounded-4 border-0">Berapa hari minimal sewa mobil lepas kunci?</Accordion.Header>
                     <Accordion.Body>
                        <p className="mb-0">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</p>
                     </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item className="rounded-3 shadow-sm" eventKey="2" style={{border:"0.5px solid #D4D4D4"}}>
                     <Accordion.Header className="rounded-3">Berapa hari sebelumnya sabaiknya booking sewa mobil?</Accordion.Header>
                     <Accordion.Body>
                        <p className="mb-0">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</p>
                     </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item className="rounded-3 shadow-sm" eventKey="3" style={{border:"0.5px solid #D4D4D4"}}>
                     <Accordion.Header className="rounded-3">Apakah Ada biaya antar-jemput?</Accordion.Header>
                     <Accordion.Body>
                        <p className="mb-0">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</p>
                     </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item className="rounded-3 shadow-sm" eventKey="4" style={{border:"0.5px solid #D4D4D4"}}>
                     <Accordion.Header className="rounded-3">Bagaimana jika terjadi kecelakaan</Accordion.Header>
                     <Accordion.Body>
                        <p className="mb-0">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</p>
                     </Accordion.Body>
                  </Accordion.Item>
               </Accordion>
            </Container>
         </section>
    </>
   )
}