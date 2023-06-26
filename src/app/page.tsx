import Image from 'next/image';
import React from 'react';
import { Fjalla_One } from 'next/font/google';

import { NameAndTitleModule } from './comp/NameAndTitleModule';
import { BackgroundImage } from './comp/BackgroundImage';
import { FooterWithButtons } from './comp/FooterWithButtons';

const myPhoto = require('../assets/myphoto.png');

const mainFont = Fjalla_One({
  weight: '400',
  subsets: ['latin']
})


export default function Home() {
  return (   
    <main className={mainFont.className}>
      <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no" />
      <title>Daniel Regan - Software Engineer & IT Professional</title>

      <BackgroundImage />

      <NameAndTitleModule />

      <div id="mainContent">
        <Image src={myPhoto} alt={''} id="myPhoto" />
        <p className="text-center w-full">I love learning about new technologies and using them to develop unique, scalable, and efficient software solutions!</p>
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
