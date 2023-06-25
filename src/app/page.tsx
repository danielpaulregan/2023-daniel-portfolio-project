import Image from 'next/image';
import React from 'react';
import { Fjalla_One } from 'next/font/google';

import { NameAndTitleModule } from './comp/NameAndTitleModule';
import { ButtonsModule } from './comp/ButtonsModule';
import { BackgroundImage } from './comp/BackgroundImage';

const mainFont = Fjalla_One({
  weight: '400',
  subsets: ['latin']
})


export default function Home() {
  return (   
    <main className={mainFont.className}>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <title>Daniel Regan - Software Engineer & IT Professional</title>

      <BackgroundImage />

      <NameAndTitleModule />

      <div id="mainContent">
        <h2 className="text-center w-full">Who is Daniel?</h2>
        <p className="text-center w-full">Daniel is a guy who likes to learn and needs a job.</p>
      </div>

      <ButtonsModule />

      <footer className="text-center align-bottom bg-black bg-opacity-60">
        <h5><a target="_blank" href="https://icons8.com">Icons supplied by Icons8</a></h5>
      </footer>
    </main>
  )
}

// Test for ButtonsModule
/*
export default function Home() {
  return (
    <main className="bg-white">
      <ButtonsModule />
    </main>
  );
}
*/
