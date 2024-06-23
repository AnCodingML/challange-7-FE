import { Container, Nav, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';

function Footer() {
   return (
      <>
         <Container className="py-5 d-lg-flex text-center text-lg-start justify-content-lg-between gap-4 d-grid break-top">
            <div className="col-lg-3">
               <div>
                  <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
                  <p>binarcarrental@gmail.com</p>
                  <p>081-233-334-808</p>
               </div>
            </div>
            <div>
               <Link to="/" className='text-decoration-none'><Nav className="pt-0 navbar__menu fw-bold justify-content-center justify-content-lg-start">Our Services</Nav></Link>
               <Link to="/" className='text-decoration-none'><Nav className="navbar__menu fw-bold justify-content-center justify-content-lg-start">Why Us</Nav></Link>
               <Link to="/" className='text-decoration-none'><Nav className="navbar__menu fw-bold justify-content-center justify-content-lg-start">Testimonial</Nav></Link>
               <Link to="/" className='text-decoration-none'><Nav className="navbar__menu fw-bold justify-content-center justify-content-lg-start">FAQ</Nav></Link>
            </div>
            <div>
               <p>Connect with us</p>
               <p className="d-flex gap-3 justify-content-center">
                  <Link to="/"><Button className="btn__footer btn rounded-circle"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1"  stroke-linecap="round"  stroke-linejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-brand-facebook"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" /></svg></Button></Link>
                  <Link to="/"><Button className="btn__footer btn rounded-circle"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1"  stroke-linecap="round"  stroke-linejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-brand-instagram"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" /><path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><path d="M16.5 7.5l0 .01" /></svg></Button></Link>
                  <Link to="/"><Button className="btn__footer btn rounded-circle"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1"  stroke-linecap="round"  stroke-linejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-brand-twitter"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c0 -.249 1.51 -2.772 1.818 -4.013z" /></svg></Button></Link>
                  <Link to="/"><Button className="btn__footer btn rounded-circle"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1"  stroke-linecap="round"  stroke-linejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-mail"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" /><path d="M3 7l9 6l9 -6" /></svg></Button></Link>
                  <Link to="/"><Button className="btn__footer btn rounded-circle"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="1"  stroke-linecap="round"  stroke-linejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-brand-twitch"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 5v11a1 1 0 0 0 1 1h2v4l4 -4h5.584c.266 0 .52 -.105 .707 -.293l2.415 -2.414c.187 -.188 .293 -.442 .293 -.708v-8.585a1 1 0 0 0 -1 -1h-14a1 1 0 0 0 -1 1z" /><path d="M16 8l0 4" /><path d="M12 8l0 4" /></svg></Button></Link>
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