import Image from 'next/image';
import bg from '../assets/background2.jpg';
import { Fjalla_One } from 'next/font/google';

const mainFont = Fjalla_One({
  weight: '400',
  subsets: ['latin']
})

export default function Home() {
  return (   
    <main className={mainFont.className}>
      <title className="text-center">Daniel Regan - Software Engineer & IT Professional</title>
      <div className="absolute -z-10">
        <Image src={bg} alt={''} quality={100} />
      </div>
      <nav className="bg-black bg-opacity-60">
        <div className="py-20">
          <h1 className="text-7xl font-semibold text-center">Daniel Regan</h1>
          <h2 className="text-2xl pt-5 text-center">Software Engineer & IT Professional</h2>
        </div>
        <ul id="navigationBar" className="text-center bg-opacity-60 outline outline-3">
          <li><a href="#top">Home</a></li>
          <li><a href="">About</a></li>
          <li><a href="https://www.linkedin.com/in/danielpaulregan/">LinkedIn</a></li>
          <li><a href="">Projects</a></li>
        </ul>    
      </nav>

      <div className="pt-20 text-center text-2xl drop-shadow-lg">
        <h2>Who is Daniel?</h2>
      </div>

      <p className="text-center text-lg drop-shadow-lg pt-5">Daniel is a guy who likes to learn and needs a job.</p>
    </main>
  )
}