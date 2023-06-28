import Link from 'next/link'

import styles from '../../styles/Home.module.css'


export default function About() {


  return (
    <div className="w-screen h-screen flex flex-col justify-center overflow-x-hidden">
      <div className='self-center justify-center '>

      <div className='flex flex-col justify-center m-56 w-96 h-72 select-none'>
      <h1 className='self-center text-slate-100 text-2xl mb-10'>About me</h1>
      <div className='flex space-x-12 self-center text-slate-200'>
      <a  href='https://santiagoellis.dev' className='hover:text-blue-300 hover:select-none'>/Home</a>
      <a href='https://santiagoellis.dev/SantiagoEllis/Projects' className='hover:text-blue-300 hover:select-none'>/projects</a>
      </div>
      <div className='mt-10'>
      <p className='self-center text-slate-300 text-lg mb-2'>Hi, im <b>
      Santiago Ellis
        </b> a developer based in Buenos Aires, Argentina who has a passion for all things learning and videogames.
      </p>
      <p className='text-slate-300 text-lg'>I love trying <b>new things</b> that keep my mind running and often dabble in language learning.</p>

<p className=' text-slate-300 text-lg'>I strive to push my skills every single day.</p>
<p className='text-slate-300 text-lg'>Be sure to check back often!</p>
      </div>
      </div>
      </div>

        <footer className={styles.footer}>
        <a
          href="https://github.com/santiellis"
          target="_blank"
          rel="noopener noreferrer"
        >
          Made by Santiago Ellis
          <span className={styles.logo}>
          </span>
        </a>
      </footer>
    </div>
  )
}
