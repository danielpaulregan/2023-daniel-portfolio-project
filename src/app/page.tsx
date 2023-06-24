import Image from 'next/image';
import bg from '../assets/background2.jpg';
import ghIconStatic from '../assets/icons8-github-50.png';
import liIconStatic from '../assets/icons8-linkedin-circled-50.png';
import { Fjalla_One } from 'next/font/google';

const mainFont = Fjalla_One({
  weight: '400',
  subsets: ['latin']
})

export default function Home() {
  return (   
    <main className={mainFont.className}>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <title>Daniel Regan - Software Engineer & IT Professional</title>
      <div className="absolute -z-10">
        <Image src={bg} alt={''} quality={100} />
      </div>

      <div className="bg-black bg-opacity-60">
        <div id="nameAndTitle">
          <h1 className="font-semibold text-center w-full">Daniel Regan</h1>
          <h2 className="text-center w-full">Full-Stack Software Engineer & IT Professional</h2>
        </div>
        <nav>
          <ul id="navigationBar" className="text-center outline outline-3">
            <a href="#top"><li>About</li></a>
            <a href=""><li>Projects</li></a>
            <a href=""><li>Get in Touch</li></a>
          </ul>    
        </nav>
      </div>

      <div id="mainContent">
        <h2 className="text-center w-full">Who is Daniel?</h2>
        <p className="text-center w-full">Daniel is a guy who likes to learn and needs a job.</p>
      </div>

      <div id="buttonsModule" className="bg-black bg-opacity-60 w-1/3">
        <div id="ghReference">
          <div id="circularIcon">
            <a href="https://github.com/danielpaulregan">
              <Image src={ghIconStatic} alt={''} quality={100} />
              <span>My Github Profile</span>
            </a>
          </div>
        </div>

        <div id="liReference">
          <div id="circularIcon">
            <a href="https://www.linkedin.com/in/danielpaulregan/">
              <Image src={liIconStatic} alt={''} quality={100} />
              <span>Connect (or hire me) on LinkedIn!</span>
            </a>
          </div>
        </div>
      </div>

      <footer className="text-center align-bottom bg-black bg-opacity-60">
        <h5><a target="_blank" href="https://icons8.com">Icons supplied by Icons8</a></h5>
      </footer>
    </main>
  )
}