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

      <nav className="bg-black bg-opacity-60 pt-10">
        <div id="ghIcon">
          <div id="circularIcon" className="px-10 float-left">
            <a href="https://github.com/danielpaulregan">
              <Image src={ghIconStatic} alt={''} quality={100} />
              <p className="py-2">Check out my Github!</p>
            </a>
          </div>
        </div>
        <div id="liIcon">
          <div id="circularIcon" className="px-10 float-right">
            <a href="https://www.linkedin.com/in/danielpaulregan/">
              <Image src={liIconStatic} alt={''} quality={100} />
              <p className="py-2">Check out my LinkedIn!</p>
            </a>
          </div>
        </div>

        <h1 className="text-7xl font-semibold text-center">Daniel Regan</h1>
        <h2 className="pb-10 text-2xl pt-5 text-center">Full-Stack Software Engineer & IT Professional</h2>

        <ul id="navigationBar" className="text-center bg-opacity-60 outline outline-3">
          <li><a href="#top">Home</a></li>
          <li><a href="">About</a></li>
          <li><a href="">Projects</a></li>
          <li><a href="">Get in Touch</a></li>
        </ul>    
      </nav>

      <div>
        <h2 className="pt-20 text-center text-2xl drop-shadow-lg">Who is Daniel?</h2>
        <p className="text-center text-lg drop-shadow-lg pt-5">Daniel is a guy who likes to learn and needs a job.</p>
      </div>

      <a target="_blank" href="https://icons8.com">Icons supplied by Icons8</a>
    </main>
  )
}