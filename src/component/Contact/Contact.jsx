
import React, { useRef } from 'react';
import style from "./contact.css";
import emailjs from '@emailjs/browser';
import phone from "./contact_1.png";
import mail from "./contact_2.png";
import loca from "./contact_3.png";


const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_blcc7po', 'template_fqgy27f', form.current, 'ZstkzpBJP0b1mA_8W')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
      <div className="effect">
<div className="info">
  <div className='special'>
    <h1>Let's discuss </h1>
    <h1>your project. </h1>
    </div>
    <div className="svg">
    <img src={phone} alt="" className='icons' /> 692-39-23-33<br/>
    <img src={mail} alt="" className='icons' /> brandonweb511@gmail.com<br/>
    <img src={loca} alt="" className='icons' /> 237 CMR, yaounde omnisport
    </div>
</div>

    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send"  className='button'/>
    </form>
    </div>
  );
};
 export default ContactUs;