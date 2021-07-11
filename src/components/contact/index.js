import React from 'react';

function ContactForm(){
    return(
        <section>
            <h1>Contact Me</h1>
            <form id="contact-form">
                <div>
                    <label htmlFor="name"></label>
                    <input type="text" name="name">Name </input>
                </div>
                <div>
                    <label htmlFor="email"></label>
                    <input type="email" name="email">Email</input>
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" row="5"/>
                </div>
                <button type="submit">Submit</button>
            </form>
        </section>
    )
}

export default ContactForm;