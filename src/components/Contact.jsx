import { useRef } from 'react';
import React from 'react'
import '../styles/Contact.css';
import emailjs from '@emailjs/browser';

const Contact = () => {

  const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_swo1jtr', 'template_ojf21aj', form.current, 'B251vtNzlYaOYVSVZ')
        .then((result) => {
            console.log(result.text);
            e.target.reset();
        }, (error) =>  console.log(error.text)
        );
    };


  return (
    <div className='container'>
      
      <h2>Contact</h2>
        
        <div className="card">
            <form ref={form} className='form' onSubmit={sendEmail}>
              <div className='inputs'>
                  <div>
                    <p>Name</p>
                    <input placeholder='Jack Sparrow' type="text" name="user_name" required/>
                  </div>
                  <div>
                    <p>Email</p>
                    <input id='email' placeholder='jacksparrow@gmail.com' type="email" name="user_email" required/>
                  </div>
              </div>
              <div className='input2'>
                  <p>Message</p>
                  <textarea placeholder='Savy?' name="message" />
                  <button id='btn' type='submit'>Send</button>
              </div>
            </form>
        </div>

        <div className="thankyouCard">
            <h1>Thank you for reaching out!</h1>
        </div>
      </div>
  )
}

export default Contact
