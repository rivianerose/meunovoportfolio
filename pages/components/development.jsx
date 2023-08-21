
import styles from '@/styles/myGallery.module.css'
import Image from 'next/image';
import { motion } from 'framer-motion';

export const Development = () => {
    return (
      <div className={styles.alljobs}>
   
   <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 2 }}
      transition={{ duration: 1 
      }}
     
    >
      <motion.img
      src="/imagens/galeria/galeria2.jpg"
        alt="Descrição da imagem"
        width={300}
        height={200}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.1 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.3 }}
      />

<motion.img
      src="/imagens/galeria/galeria5.jpg"
        alt="Descrição da imagem"
        width={300}
        height={200}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.3 }}
      />


<motion.img
      src="/imagens/galeria/galeria7.jpg"
        alt="Descrição da imagem"
        width={300}
        height={200}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.3 }}
      />
    </motion.div>
 



</div>

    );
  };
