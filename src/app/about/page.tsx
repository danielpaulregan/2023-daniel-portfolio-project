import Image from 'next/image';
import React from 'react';
import { Fjalla_One } from 'next/font/google';

import { NameAndTitleModule } from '../comp/NameAndTitleModule';
import { BackgroundImage } from '../comp/BackgroundImage';
import { FooterWithButtons } from '../comp/FooterWithButtons';

const mainFont = Fjalla_One({
  weight: '400',
  subsets: ['latin']
})


export default function About() {
  return (   
    <main className={mainFont.className}>
      <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no" />
      <title>Daniel Regan - Software Engineer & IT Professional</title>

      <BackgroundImage />

      <NameAndTitleModule />

      <div id="mainContent">
        <h2 className="text-center w-full">About Daniel</h2>
        <p className="text-center w-full">Daniel graduated from Arizona State University in 2018 with a Bachelor's degree in Computer Science.</p>
      </div>

      <FooterWithButtons />
    </main>
  );
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
