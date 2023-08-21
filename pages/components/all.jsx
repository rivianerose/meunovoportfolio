
import styles from '@/styles/myGallery.module.css'
import Image from 'next/image';
import { motion } from 'framer-motion';

export const All = () => {
    return (
      <div className={styles.alljobs}>
      
      <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 2 }}
      transition={{ duration: 1 
      }}
     
    >
      <motion.img
      src="/imagens/meusprojetos/cleanpage.png"
        alt="Descrição da imagem"
        width={300}
        height={200}
        whileHover={{ scale: 2.1, transition: { duration: 2 } }}
        whileTap={{ scale: 0.3 }}
      />

<motion.img
     src="/imagens/meusprojetos/redpage.png"
        alt="Descrição da imagem"
        width={300}
        height={200}
        whileHover={{ scale: 2.1, transition: { duration: 2 } }}
        whileTap={{ scale: 0.9 }}
      />

<motion.img
      src="/imagens/meusprojetos/londonparalax.png"
        alt="Descrição da imagem"
        width={300}
        height={200}
        whileHover={{ scale: 2.1, transition: { duration: 2 } }}
        whileTap={{ scale: 0.9 }}
      />


<motion.img
 src="/imagens/meusprojetos/cakepage.png"
        alt="Descrição da imagem"
        width={300}
        height={200}
        whileHover={{ scale: 2.1, transition: { duration: 2 } }}
        whileTap={{ scale: 0.9 }}
      />

<motion.img
      src="/imagens/meusprojetos/hikerpage.png"
        alt="Descrição da imagem"
        width={300}
        height={200}
        whileHover={{ scale: 2.1, transition: { duration: 2 } }}
        whileTap={{ scale: 0.9 }}
      />

<motion.img
      src="/imagens/meusprojetos/outdoors.png"
        alt="Descrição da imagem"
        width={300}
        height={200}
        whileHover={{ scale: 2.1, transition: { duration: 2 } }}
        whileTap={{ scale: 0.9 }}
      />
    </motion.div>
 

</div>

    );
  };
