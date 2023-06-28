import Image from 'next/image';
import React from 'react';

import { NameAndTitleModule } from '../../comp/NameAndTitleModule';
import { BackgroundImage } from '../../comp/BackgroundImage';
import { FooterWithButtons } from '../../comp/FooterWithButtons';

const styles = require('./page.css');


export default function Projects() {
  return (   
    <main>
      <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no" />
      <title>Daniel Regan - Software Engineer & IT Professional</title>

      <BackgroundImage />

      <NameAndTitleModule />

      <div id="mainContent" className="bg-black bg-opacity-25 text-center">
        <h2 className="text-center w-full">Daniel&apos;s Projects:</h2>
        <p className="text-center w-full">1. This website - using React (HTML, CSS, Typescript) and Next.js. See the open-source code <a href="https://github.com/danielpaulregan/2023-daniel-portfolio-project">here!</a></p>
        <br />
        <p>Check back soon for new projects! More coming Summer 2023</p>
      </div>

      <p><br /><br /><br /><br /><br /></p>

      <FooterWithButtons />
    </main>
  );
}
