import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import { About } from './about'
import  {Services} from './services'
import resum from './resum'
import portfolio from './portfolio'
import blog from './blog'
import contact from './contact'
import Pagina from './pagina'
import Portfolio from './portfolio'
import MyContact from './contact'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='cabecalho'>
     
        
        <div className='menu'>
          <div className='menuprincipal'>
          <div class="logoprincipal">
              <h1> Rivi </h1>  
            </div>
        <nav>
          <ul>
          <li> <Link href="/"  >Home </Link></li>
          <li> <Link href="/about"  >About</Link></li>
          <li> <Link href="/services"  >Services</Link></li>
          <li> <Link href="/resum"  >Resum</Link></li>
          <li> <Link href="/portfolio"  >Portfolio</Link></li>
          <li> <Link href="/blog"  >Blog</Link></li>
          <li> <Link href="/contact"  >Contact</Link></li>
            </ul>
         
        </nav>
        </div>

        <div class="bio">
            <h1> Hello <strong>.</strong> </h1>
            <h2> I am Riviane Marques</h2>
            <h3> Professional Web Developer </h3>
            <a href="./imagens/currículo.pdf" download> 
                <button>    Download CV</button>
            </a>
            </div>
        </div>
   
      <main className={styles.main}>
        <About />
        <Services />
        <Pagina />
        <Portfolio />
        <MyContact />
      </main> 
    </div>
  )
}
