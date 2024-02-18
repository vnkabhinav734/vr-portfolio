import React,{useRef} from 'react';
import './Contact.css'

const Contact = () => {

  const formRef = useRef(null);

  const handleSubmit = () => {
    formRef.current.reset();
  }

  return (
    <div className='contact'>
      <div className='contact-form'>
        <div className='details'>
          <p className='p-contact'>Contact</p>
          <p className='p-touch'>Submit the form to get in touch!!</p>
        </div>
        <div className='form-div'>
          <form action='https://getform.io/f/RdGL37eD' method='POST' className='form' ref={formRef}>
            <input type='text' name='name' placeholder='Enter your name' className='contact-details'/>
            <input type='text' name='email' placeholder='Enter your email' className='contact-details'/>

            <textarea name='message' placeholder='Enter your message' rows='10' className='text-area'></textarea>

            <button className='talkbutton' onClick={handleSubmit}>Let's talk</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact