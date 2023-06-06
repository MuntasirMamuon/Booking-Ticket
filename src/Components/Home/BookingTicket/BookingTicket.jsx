import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import './BookingTicket.css'
import storeData from '../../../Helper/Storage';
const BookingTicket = () => {
    // const history = useHisto();
    // const [name, setName] = useState('');
    // const [email, setEmail] = useState('');
    const data=useLoaderData()
    console.log(data.name);
   
    const handleSubmit = event => {
        event.preventDefault();
        const name=event.target.name.value;
        const email=event.target.email.value;
    
    
        // Store user details in local storage
        storeData('useDetails',{name,email})
        // localStorage.setItem('userDetails', JSON.stringify({ name, email }));
    
        // Redirect to show details page
        // history.push(`/show/${id}`);
      };
    return (
    
    <section id="contact">
   
    <h2>Booking Ticket</h2>
    <div className="container contact__container">

      <form form onSubmit={handleSubmit} >
        <input type="text" name="name" defaultValue={data.name} placeholder="" required />
        <input type="email" name="email" id="" placeholder="Your Email" required />
        {/* <textarea name="message" id=""  rows="7" placeholder="Your Message" required></textarea> */}
        <button className="btn btn-primary" type="submit">Book Ticket</button>
      </form>
 
    </div>
  </section>
    );
};

export default BookingTicket;