import styles from '@/styles/Home.module.css'
import mybdr from '../public/imagens/icons/border.png'
import mybdr2 from '../public/imagens/icons/border2.png'
import Image from 'next/image';
export const Pagina1 = () => {
    return (
      <div className='paginaum'>
      <div className={styles.myimages}>
      <div className={styles.education}> 
      <Image
       src={mybdr} alt="border"
        />
      </div>
      
      <div className={styles.myeducation}>
      <h1> Education Quality</h1>

      <div className={styles.educationboxes}>
        
       <div className={styles.edbox}>
        <h1>Post-Degree in Web Development</h1>
        <h2>University Focus (2022 - 2023)</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
       </div>

       <div className={styles.edbox}>
     <h1>Web Development</h1>
        <h2>Curso em Vídeo (2022)</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
       </div>

       <div className={styles.edbox}>
       <h1>Programming</h1>
        <h2>Danki Code (2023)</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
       </div>

       <div className={styles.edbox}>
  <h1>Diploma In Graphic Design</h1>
        <h2>Danki Code (2023)</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
       </div>

       <div className={styles.edbox}>
  <h1>Web UI/UX Design</h1>
        <h2>Danki Code (2023)</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
       </div>

       <div className={styles.edbox}>
          <h1>BSC In Computer Science</h1>
        <h2>University (2023)</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
       </div>

      </div>
      </div>
<div className={styles.education2}> 
<Image
 src={mybdr2} alt="border"
  />
</div>
</div>
</div>
    );
  };

  export default Pagina1