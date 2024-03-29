import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
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
        const myname=event.target.myname.value;
        const name=event.target.name.value;
        const status=event.target.status.value;
        const language=event.target.language.value;
        const email=event.target.email.value;
    
    
        // Store user details in local storage
        storeData('useDetails',{myname,name,email,status,language})
        // localStorage.setItem('userDetails', JSON.stringify({ name, email }));
    
        // Redirect to show details page
        // history.push(`/show/${id}`);
      };
    return (
    
    <section id="contact">
   
    <h2>Booking Ticket</h2>
    <div className="container contact__container">

      <form form onSubmit={handleSubmit} >
        <input type="text" name="myname"  placeholder="Your Name" required />
        <input type="text" name="name" defaultValue={`Movie Name:${data.name}`} placeholder="" required />
        <input type="text" name="status" id="" defaultValue={`Status:${data.status}`} required />
        <input type="text" name="language" id="" defaultValue={`Language:${data.language}`} required />
        <input type="email" name="email" id="" placeholder="Your Email" required />
        {/* <textarea name="message" id=""  rows="7" placeholder="Your Message" required></textarea> */}
      <div className='booking-btn'>
      
        <button className="btn btn-primary" type="submit">Book Ticket</button>
      </div>
      </form>
 
    </div>
  </section>
    );
};

export default BookingTicket;