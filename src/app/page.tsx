import Image from 'next/image';
import React from 'react';
import { Overpass } from 'next/font/google';

import { NameAndTitleModule } from '../comp/NameAndTitleModule';
import { BackgroundImage } from '../comp/BackgroundImage';
import { FooterWithButtons } from '../comp/FooterWithButtons';

const myPhoto = require('../assets/myphoto.png');
const styles = require('./page.css');

const mainFont = Overpass({
  weight: 'variable',
  subsets: ['latin']
});

export default function Home() {
  return (   
    <main className={mainFont.className}>
      <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no" />
      <title>Daniel Regan - Software Engineer & IT Professional</title>

      <BackgroundImage />

      <NameAndTitleModule />

      <div id="mainContent" className="text-center">
        <div id="paddingForMyPhoto">  
          <Image src={myPhoto} alt={''} id="myPhoto" />
        </div>
        <p className="text-center w-full">I love learning about new technologies and using them to develop unique, scalable, and efficient software solutions!</p>
      </div>

      <p><br /><br /><br /><br /></p>

      <FooterWithButtons />
    </main>
  );
}
