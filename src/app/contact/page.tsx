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


export default function Contact() {
  return (   
    <main className={mainFont.className}>
      <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no" />
      <title>Daniel Regan - Software Engineer & IT Professional</title>

      <BackgroundImage />

      <NameAndTitleModule />

      <div id="mainContent" className="bg-black bg-opacity-25 text-center">
        <p className="text-center w-full">Contact: [Under construction]</p>
      </div>

      <FooterWithButtons />
    </main>
  );
}