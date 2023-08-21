import React from 'react'
import styles from '@/styles/Home.module.css'
import Image from 'next/image'
import eu from '../public/imagens/eu.jpg'
export const About = () => {
  return (
    <div>
        <main>
        <section class={styles.tudosobremim}>
    <div class={styles.menuabout}>
   <h3> BIOGRAPHY</h3>
   <h1> Who am I ? </h1>
</div>

<div class={styles.sobremim}>
<div class={styles.foto}>
 <Image
src={eu}
 
 />


</div>

<div class={styles.sobre}>
<h2> About Me </h2>
<h1> Riviane Rose's Details</h1>
<p> 
Hello, I'm Riviane Rose, a skilled web developer with an advanced post-degree education in web development. My expertise spans a variety of essential languages and technologies, including Next.js, JavaScript, HTML, CSS, PHP, MySQL, and Node.js.
</p>

<div class={styles.detalhes}>
<div className={styles.detalhesdois}>
    <h2> Name</h2>
    <h3> Riviane Marques</h3>
</div>
<div>
    <h2> Email</h2>
    <h3> roseriviane@gmail.com</h3>
</div>
<div>
    <h2> Adress</h2>
    <h3> Praia Grande</h3>
</div>
<div>
    <h2>Phone No. </h2>
    <h3> +55 (13) 99654-7656</h3>

</div>

</div>
<div class={styles.butao}>
<a href="./imagens/currículo.pdf" download> 
    <button>    Download CV</button>
</a></div>
</div>
</div>
</section>
</main>
    </div>
  )
}

export default About