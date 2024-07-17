import React from 'react';
import './contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2>Contact</h2>
      <div className="contact-info">
        <p>
          You can type in the details here, but unfortunately this won't work. But don't worry, if I build your form, it will work.
        </p>
        <p>
          I can use ReactJS and Formik for the frontend.
          For the backend, I can use ExpressJS and Node.js or Flask with MySQL or MongoDB, and Nodemailer as well.
        </p>
      </div>
      <form className="contact-form">
        <div className="form-group">
          <input type="text" placeholder="Your name" required />
          <input type="email" placeholder="Your email" required />
        </div>
        <input type="text" placeholder="Subject" required />
        <textarea placeholder="Message" required></textarea>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default Contact;
