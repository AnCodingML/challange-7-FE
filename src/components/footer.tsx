import { Image, Container, Nav } from "react-bootstrap";
import { Link } from 'react-router-dom';

function Footer() {
   return (
      <>
         <Container className="pt-5 d-lg-flex text-center text-lg-start justify-content-lg-between gap-4 d-grid">
            <div className="col-lg-3">
               <div>
                  <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
                  <p>binarcarrental@gmail.com</p>
                  <p>081-233-334-808</p>
               </div>
            </div>
            <div>
               <Link to="/" className='text-decoration-none'><Nav className="navbar__menu fw-bold justify-content-center justify-content-lg-start">Our Services</Nav></Link>
              <Link to="/" className='text-decoration-none'><Nav className="navbar__menu fw-bold justify-content-center justify-content-lg-start">Why Us</Nav></Link>
              <Link to="/" className='text-decoration-none'><Nav className="navbar__menu fw-bold justify-content-center justify-content-lg-start">Testimonial</Nav></Link>
              <Link to="/" className='text-decoration-none'><Nav className="navbar__menu fw-bold justify-content-center justify-content-lg-start">FAQ</Nav></Link>
            </div>
            <div>
               <p>Connect with us</p>
               <p className="d-flex gap-3 justify-content-center">
                  <Link to="/"><Image src="./assets/icon/icon_facebook.svg" alt="" height="32px" width="32px"/></Link>
                  <Link to="/"><Image src="./assets/icon/icon_instagram.svg" alt=""  height="32px" width="32px"/></Link>
                  <Link to="/"><Image src="./assets/icon/icon_twitter.svg" alt="" height="32px" width="32px"/></Link>
                  <Link to="/"><Image src="./assets/icon/icon_mail.svg" alt="" height="32px" width="32px"/></Link>
                  <Link to="/"><Image src="./assets/icon/icon_twitch.svg" alt="" height="32px" width="32px"/></Link>
               </p>
            </div>
            <div>
               <p>Copyright Binar 2022</p>
               <p className="logo ms-auto me-auto"></p>
            </div>
         </Container>
      </>
   )
}

export default Footer;