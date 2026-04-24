import React from 'react';
import './Contact.css';

function Contact() {
  const socialLinks = [
    { name: 'WhatsApp', image: 'images/whatsapp.svg', link: 'https://wa.me/+2347025183733' },
    { name: 'Twitter', image: 'images/twitter.svg', link: 'https://x.com/emmanuel_t98185' },
    { name: 'LinkedIn', image: 'images/linkedin.svg', link: 'https://www.linkedin.com/in/emmanuel-taiwo-38097937b?utm_source=share_via&utm_content=profile&utm_medium=member_android' },
    { name: 'Instagram', image: 'images/instagram.svg', link: 'https://www.instagram.com/dayo_2.0.2.5?igsh=MjlzbWM5N2dhMDBm' },
    { name: 'Facebook', image: 'images/facebook.svg', link: 'https://www.facebook.com/share/14b5UZKWsHt/' },
    { name: 'Github', image: 'images/github.svg', link: 'https://github.com/EmmDevX' }
  ];

  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <h2 className="contact-title">Get in touch with me</h2>
        <p className="contact-subtitle">Connect with me to build responsive website</p>
        
        <div className="social-icons">
          {socialLinks.map((social, index) => (
            <a 
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              title={social.name}
            >
              <img src={social.image} alt={social.name} className="social-icon" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contact;