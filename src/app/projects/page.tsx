import Image from 'next/image';
import React from 'react';
import { Overpass } from 'next/font/google';

import { NameAndTitleModule } from '../comp/NameAndTitleModule';
import { BackgroundImage } from '../comp/BackgroundImage';
import { FooterWithButtons } from '../comp/FooterWithButtons';

const styles = require('./page.css');

const mainFont = Overpass({
  weight: '300',
  subsets: ['latin']
})


export default function Projects() {
  return (   
    <main className={mainFont.className}>
      <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no" />
      <title>Daniel Regan - Software Engineer & IT Professional</title>

      <BackgroundImage />

      <NameAndTitleModule />

      <div id="mainContent" className="bg-black bg-opacity-25 text-center">
        <h2 className="text-center w-full">Daniel's Projects:</h2>
        <p className="text-center w-full">1. This website - using React (HTML, CSS, Typescript) and Next.js. See the open-source code <a href="https://github.com/danielpaulregan/2023-daniel-portfolio-project">here!</a></p>
      </div>

      <FooterWithButtons />
    </main>
  );
}
