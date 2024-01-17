import React from 'react'

const Footer = () => {
    const handleClick = () => {
        // Replace "recipient@example.com" with the actual email address you want to send to
        const email = 'gamingjasser@gmailcom';
    
        // Replace "Subject" with the desired subject for the email
        const subject = 'I want to work with you!';
    
        // Replace "Body" with the desired body content for the email
        const body = 'write here mail';
    
        // Construct the mailto link
        const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
        // Open the default email client
        window.location.href = mailtoLink;
      };
  return (
    <div className='text-center mt-[7rem] pb-5'>
        <p
        onClick={handleClick}
        >gamingjasser@gmail.com</p>
    </div>
  )
}

export default Footer