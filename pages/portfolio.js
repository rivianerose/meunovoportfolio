import React from 'react'
import Mygallery from '../pages/components/mygallery'
import styles from '@/styles/myGallery.module.css'
const Portfolio = () => {
  
  
  return (
    <div className='minhagaleria'>
      <div className={styles.mymenu}>
   <h3> PORTFOLIO</h3>
   <h1> Latest Work </h1>
</div>
<div className={styles.galeriadefotos}><Mygallery /></div>
  
     </div>
  )
}

export default Portfolio