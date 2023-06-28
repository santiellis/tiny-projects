import Image from 'next/image'
import styles from '../../styles/Home.module.css'
// import CloudinaryImage from ''

export default function PagesPage() {
  return (
    <div className={styles.container}>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to my projects
        </h1>

      <div className='flex space-x-3'>
        <a href='https://santiagoellis.dev' className='hover:text-blue-200'><p>Home</p></a>
        <a href='https://santiagoellis.dev/SantiagoEllis/about' className='hover:text-blue-200'><p>About</p></a>
      </div>
        <div className={styles.grid}>
          <a
            href="https://santiagoellis.dev/cloudinary/cloudinaryHome"
            className={styles.card}
          >
            <div className='flex'>
            <div>
            <h2>Cloudinary &rarr;</h2>
            <p>
             Add images, look at them from the main page.
            </p>
            </div>
            </div>
          
          <div className='flex justify-center mt-4 rounded-2xl hover:border-blue-200 border-2 border-blue-400'> 

          <Image src={"/Cloudinary.png"} className='rounded' width={400} height={400} alt="Cloudinary Page"/>
          </div>
          </a>
        </div>
        <div className='flex align-center justify-center flex-wrap'>
          <a
            href="https://santiagoellis.dev/tic-tac-toe/tic-tac-toe"
            className={styles.card}
          >
            <div className='flex'>
            <div>
            <h2>Tic-Tac-Toe &rarr;</h2>
            <p>
              Play a game of Tic-Tac-Toe.
            </p>
            </div>
            </div>
            
            
            <div className='flex justify-center mt-4 rounded-2xl hover:border-blue-200 border-2 border-blue-400'> 

             <Image src={"/TicTacToe.png"} className='rounded' width={400} height={400} alt="Tic-Tac-Toe page"/>
            </div>
          </a>
        </div>
   

        <div className={styles.grid}>
          <a
          href='https://santiagoellis.dev/pc-presentation/pc-presentation'
          className={styles.card}
          >
            <div className='flex'>
            <div>
            <h2>PC Presentation &rarr;</h2>
            <p>
              Landing page and css for a computer style page.
            </p>
            </div>
            </div>
              <div className='flex justify-center mt-4 rounded-2xl hover:border-blue-200 border-2 border-blue-400'>
            <Image src={"/PC-projects2.png"} className='rounded' width={400} height={400} alt="PC Project Page"/>
              </div>
          </a>
        </div>

        <div className={styles.grid}>
          <a
          href="https://piano.santiagoellis.dev"
          className={styles.card}
          >
            <div className='flex'>
            <div>
            <h2>3D Piano &rarr;</h2>
            <p>
              A 3d piano with sound and lights
            </p>
            </div>
            </div>
           
           <div className='flex justify-center mt-4 rounded-2xl hover:border-blue-200 border-2 border-blue-400'> 

             <Image src={"/3d-piano.png"} className='rounded' width={400} height={400} alt="3d Piano Page"/>
           </div>

          </a>
        </div>
       

        <div className={styles.grid}>
          <a
          href="https://t3-proyect.santiagoellis.dev/"
          className={styles.card}
          >
            <div className='flex'>
            <div>
            <h2>T3-Proyect&rarr;</h2>
            <p>
              A Twitter based T3-Stack page made with the course of (Theo - t3․gg)
            </p>
            </div>
            </div>
              
              <div className='flex justify-center mt-4 rounded-2xl hover:border-blue-200 border-2 border-blue-400'> 

              <Image src={"/T3-Project.png"} className='rounded' width={400} height={400} alt="T3-Project Page"/>
              </div>
          </a>
        </div>
      </main>

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
