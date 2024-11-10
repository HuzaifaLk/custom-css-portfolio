import React from 'react';
import { TbMailFilled, TbPhoneCall } from "react-icons/tb";
import Navbar from '@/components/Navbar';
import '../styles/contact.css';

const Contact = () => {
  return (
    <div id="contact">
      <Navbar />
      <div className="grid">
        <div className="space-y-8 pt-8">
          <h2 className="text-8xl pl-12">Contact Huzaifa!</h2>
          <p className="text-white text-18px pl-12">
            Get in touch, call me or send me an email or just fill the contact form.
          </p>
          <div className="contact-info">
            <TbMailFilled size={30} /> huzaifa123@gmail.com
          </div>
          <div className="contact-info">
            <TbPhoneCall size={30} /> 03041020576
          </div>
        </div>
        <div className="space-y-8">
          <div className="flex flex-col gap-1">
            <label htmlFor="name" className="label">Name</label>
            <input type="text" className="input" id="name" />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="label">Email</label>
            <input type="text" className="input" id="email" />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="message" className="label">Message</label>
            <textarea className="textarea" id="message" rows={8}></textarea>
          </div>
          <button className="button">Send</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
