
import styles from '@/styles/myGallery.module.css'
import Image from 'next/image';
import { motion } from 'framer-motion';
export const Design = () => {
    return (
      
      <div className={styles.alljobs}>
      
      <motion.div
      initial={{ opacity: -1 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1
      }}
     
    >
      <motion.img
      src="/imagens/galeria/galeria8.jpg"
        alt="Descrição da imagem"
        width={300}
        height={200}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.1 }}
       
      />

<motion.img
      src="/imagens/galeria/galeria3.jpg"
        alt="Descrição da imagem"
        width={300}
        height={200}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.3 }}
      />
    </motion.div>
 


</div>

    );
  };
