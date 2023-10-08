import React, { useState } from 'react';
import styles from '@/styles/myContact.module.css'

const MyContact = () => {


  return (
    <div className={styles.formulario}>
      <h2>CONTACT INFO</h2>
      <h1>Write me something: </h1>
      <form >
        <label htmlFor="name" ></label>
        <input type="text" placeholder='Nome' /> 

        <label htmlFor="email"></label>
        <input type="email" placeholder='Email' id="email" name="email" /> <br></br>
        <label htmlFor="email"></label>
        <input type="text" placeholder='Subject' id="subject" name="subject" /> <br></br>
        <label htmlFor="message"></label>
        <textarea  type="text" placeholder='Escreva uma mensagem:' id="message" name="message"  />  
  
      </form> 
       <button className='mybuttonn' type="submit">Enviar</button>
    </div>
  );

};

export default MyContact;
