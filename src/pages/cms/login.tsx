import { Form } from "react-bootstrap";

export default function Login() {
   const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
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
                  />
               </Form.Group>
               <Form.Group controlId="formPassword" className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                     type="password"
                     name="password"
                     placeholder="Masukan Password"
                  />
               </Form.Group>
               <button type="submit" className="btn btn-primary w-100 mt-3 bg-darkblue rounded-1">Sign In</button>
            </Form>
         </div>
      </section>
   );
}