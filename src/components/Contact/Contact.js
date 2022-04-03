import React, { useRef } from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser'

export default function Contact() {

    const refForm = useRef()

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_4c7vs8b', 'template_e9sf2uh', refForm.current, 'Wv211nlp71CLy9uzs')
            .then(() => {
                alert('Message succesfully sent!');
            }, () => {
                alert('Failed to send the message, please try again');
            });
    };

    return (
        <section id="contact">
            <div className='contact-section'>
                <div className="contact-form"></div>
                <h1 className='contact-title'>Contact</h1>
                <p className='contact-text'>If you have any question or request, don't hesitate to contact me using the form below
                    or via contact@carolinanonato.ca </p>

                <div className="form">
                    <form ref={refForm} onSubmit={sendEmail}>

                        <ul>
                            <li>
                                <input type="text" name="name" placeholder='Name' required />
                            </li>
                            <li>
                                <input type="email" name="email" placeholder='E-mail' required />
                            </li>
                            <li>
                                <input type="text" placeholder='Subject' name="subject" />
                            </li>
                            <li>
                                <textarea name="message" placeholder='Message' required></textarea>
                            </li>
                            <li>
                                <input type="submit" className='submit-button' />
                            </li>
                        </ul>

                    </form>


                </div>


            </div >
        </section>
    )
}
