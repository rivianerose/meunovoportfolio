import { All } from "./all";
import {Design }from './design';
import {Development} from './development';
import {Marketing} from './marketing';
import  { useState } from 'react';
import styles from '@/styles/myGallery.module.css'
import Head from 'next/head';
import Link from 'next/link';

const myGallery = () => {
    const [conteudo, setConteudo] = useState(<All />);
  
    const handleClick = (e) => {
      e.preventDefault();
  
      const target = e.target.getAttribute('data-target');
  
      switch (target) {
        case 'conteudo1':
          setConteudo(<All/>);
          break;
        case 'conteudo2':
          setConteudo(<Design />);
          break;
          case 'conteudo3':
          setConteudo(<Development />);
          break;
          case 'conteudo4':
          setConteudo(<Marketing />);
          break;
        default:
          setConteudo(<All />);
      }
    };
  
    return (
      <div className='paginaum'>
      <div className={styles.meuresumo}>
          <ul>
            <li>
              <Link href="#" data-target="conteudo1" onClick={handleClick}>
                All
              </Link>
            </li>
            <li>
              <Link href="#" data-target="conteudo2" onClick={handleClick}>
               Design 
              </Link>
            </li>
  
            <li>
              <Link href="#" data-target="conteudo3" onClick={handleClick}>
              Development
              </Link>
            </li>

            <li>
              <Link href="#" data-target="conteudo4" onClick={handleClick}>
              Marketing
              </Link>
            </li>
          </ul>
       
  
        {conteudo}
      </div> 
       </div>
    );
  };
  
  export default myGallery;
  