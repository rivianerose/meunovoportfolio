import React from "react";
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Pagina1, { Education } from "./pagina1";
import Pagina2 from "./pagina2";
import Pagina3 from "./pagina3";
import styles from '@/styles/Home.module.css'
import  { useState } from 'react';

// const Pagina = () => {
//   const router = useRouter();

//   const { slug } = router.query;

//   let pagina;

//   switch (slug) {
//     case 'pagina1':
//       pagina = <Pagina1 />;
      
//     case 'pagina2':
//       pagina = <Pagina2 />;
     
//     case 'pagina3':
//       pagina = <Pagina3 />;
    
//     default:
//       pagina = <Pagina1 />;
//   }

//   return (
//     <div className={styles.resumo}>
    
    
//         <ul> 
//         <h1> minha pagina</h1>
//           <li>
//             <Link href="/pagina1">
//               Education
//             </Link>
//           </li>
//           <li>
//             <Link href="/pagina2">
//             Skills
//             </Link>
//           </li>
//           <li>
//             <Link href="/pagina3">
//              Experience
//             </Link>
//           </li>
//         </ul>
     

//       {pagina}
//     </div>
//   );
// };

// export default Pagina;

const Pagina = () => {
  const [conteudo, setConteudo] = useState(<Pagina1 />);

  const handleClick = (e) => {
    e.preventDefault();

    const target = e.target.getAttribute('data-target');

    switch (target) {
      case 'conteudo1':
        setConteudo(<Pagina1 />);
        break;
      case 'conteudo2':
        setConteudo(<Pagina2 />);
        break;
        case 'conteudo3':
        setConteudo(<Pagina3 />);
        break;
      default:
        setConteudo(<Pagina1 />);
    }
  };

  return (
    <div className='paginaum'>
    <div className={styles.meuresumo}>
        <ul>
          <li>
            <Link href="#" data-target="conteudo1" onClick={handleClick}>
              Education
            </Link>
          </li>
          <li>
            <Link href="#" data-target="conteudo2" onClick={handleClick}>
             Skills 
            </Link>
          </li>

          <li>
            <Link href="#" data-target="conteudo3" onClick={handleClick}>
             Experience
            </Link>
          </li>
        </ul>
     

      {conteudo}
    </div> 
     </div>
  );
};

export default Pagina;
