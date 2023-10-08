import React, { useState } from 'react';
import styles from '@/styles/myContact.module.css'

const MyContact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://backend-pg.vercel.app/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        console.log('Formulário enviado com sucesso');
      } else {
        console.error('Falha ao enviar o formulário');
      }
    } catch (error) {
      console.error('Erro ao enviar o formulário:', error);
    }
  };

  return (
    <div className={styles.formulario}>
      <h1>Entre em Contato :</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name" ></label>
        <input type="text" placeholder='Nome' id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} required /> <br></br>

        <label htmlFor="email"></label>
        <input type="email" placeholder='Email' id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required /> <br></br>

        <label htmlFor="message"></label>
        <textarea  type="text" placeholder='Escreva uma mensagem:' id="message" name="message" value={message} onChange={(e) => setMessage(e.target.value)} required  />  <br></br>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default MyContact;
