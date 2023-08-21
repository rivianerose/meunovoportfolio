import React from 'react'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import dg from '../public/imagens/icons/design-grafico (1).png'
import dw from '../public/imagens/icons/designer-de-web.png'

import fm from '../public/imagens/icons/formulario-de-registro.png'

import fotophp from '../public/imagens/icons/php.png'
import myjs from '../public/imagens/icons/script-java (1).png'

import wd from '../public/imagens/icons/web-developer.png'

export const Services = () => {
  return (
    <div className={styles.whatido}>
  <div class={styles.ido}>
                <h2> SERVICES </h2>
                <h1> What I Do? </h1>
            </div>

            <div class={styles.boxes}>
                <div class={styles.box}>
                    <Image
                    src={dg}
                    />
                    <h2>UI/UX Design</h2>
                    <p>Passionate UI/UX designer and proficient in creating intuitive user interfaces and seamless interactions that enhance user satisfaction. </p>
                </div>

                <div class={styles.box}>
                <Image
                    src={dw}
                    />
                    <h2>Web Development</h2>
                    <p> Web developer with a passion for creating impactful online experiences, including Next.js, JavaScript, HTML, CSS, PHP, MySQL, and Node.js. </p>
                
                </div>

                <div class={styles.box}>
                <Image
                    src={fm}
                    />
                  
                    <h2>Forms</h2>
                    <p> Proficient in crafting forms that streamline information gathering and enhance user engagement. </p>
                </div>

                <div class={styles.box}>
                <Image
                    src={fotophp}
                    />
                    <h2>PHP </h2>
                    <p>Experienced PHP developer and proficient in creating efficient backend systems and database interactions that power seamless user experiences.</p>
                </div>


                <div class={styles.box}>
                <Image
                    src={myjs}
                    />
                    <h2>MySQL</h2> 
                    <p>Skilled in MySQL, I specialize in designing and managing databases that fuel dynamic web applications. </p>
                </div>

                <div class={styles.box}>
                <Image
                    src={wd}
                    />
                    <h2> Next JS</h2>
                    <p>Passionate Next.js developer at the forefront of modern web development. Mastering server-side rendering and React, I craft high-performance websites. </p>
                </div>
            </div>


    </div>
  )
}

export default Services