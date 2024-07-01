import { Form } from "react-bootstrap";
import { useState } from "react";
import axios from "../../lib/axios";
import { useAuth } from "../../hooks/useAuth";

export default function Login() {
   const [login, setLogin] = useState({ email: '', password: '' });
   const { makeLogin } = useAuth();
   const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      const formData = new FormData();
      Object.entries(login).forEach(([key, value]) => {
         formData.append(key, value);
      })
      try{
         const data = await axios.post('/login', formData,{
            headers: {
               'Content-Type': 'application/json'
            }
         })
         makeLogin(data.data.data)
      }catch(e){
         console.log(e)
      }
   }
   const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setLogin({ ...login, [name]: value });
   }
   return (
      <section className="cms__login">
         <div className="cms__form-login">
            <div className="logo mb-5"></div>
            <h1 className="mb-5">Welcome, Admin BCR</h1>
            <Form onSubmit={handleSubmit}>
               <Form.Group controlId="formEmail" className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                     type="email"
                     name="email"
                     placeholder="Masukan Email"
                     onChange={handleOnChange}
                  />
               </Form.Group>
               <Form.Group controlId="formPassword" className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                     type="password"
                     name="password"
                     placeholder="Masukan Password"
                     onChange={handleOnChange}
                  />
               </Form.Group>
               <button type="submit" className="btn btn-primary w-100 mt-3 bg-darkblue rounded-1">Sign In</button>
            </Form>
         </div>
      </section>
   );
}