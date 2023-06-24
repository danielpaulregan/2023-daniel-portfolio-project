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
            <li><a href="#top">Home</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Projects</a></li>
            <li><a href="">Get in Touch</a></li>
          </ul>    
        </nav>
      </div>

      <div>
        <h2 className="text-center">Who is Daniel?</h2>
        <p className="text-center">Daniel is a guy who likes to learn and needs a job.</p>
      </div>

      <div>
        <div id="ghReference">
          <div id="circularIcon" className="text-center">
            <a href="https://github.com/danielpaulregan">
              <Image src={ghIconStatic} alt={''} quality={100} className="float-left" />
              <span>My Github Profile</span>
            </a>
          </div>
        </div>

        <div id="liReference">
          <div id="circularIcon" className="">
            <a href="https://www.linkedin.com/in/danielpaulregan/">
              <Image src={liIconStatic} alt={''} quality={100} className="float-left" />
              <span>Connect (or hire me) on LinkedIn!</span>
            </a>
          </div>
        </div>
      </div>

      <footer className="align-bottom">
        <h5><a target="_blank" href="https://icons8.com">Icons supplied by Icons8</a></h5>
      </footer>
    </main>
  )
}