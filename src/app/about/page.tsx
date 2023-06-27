import Image from 'next/image';
import React from 'react';

import { NameAndTitleModule } from '../comp/NameAndTitleModule';
import { BackgroundImage } from '../comp/BackgroundImage';
import { FooterWithButtons } from '../comp/FooterWithButtons';

export default function About() {
  return (   
    <main>
      <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no" />
      <title>Daniel Regan - Software Engineer & IT Professional</title>

      <BackgroundImage />

      <NameAndTitleModule />
      

      <div id="mainContent" className="bg-black bg-opacity-25 text-center">
        <h2 className="text-center w-full">About Daniel</h2>
        <p className="text-center w-full">Daniel graduated from Arizona State University in 2018 with a Bachelor of Computer Science. He currently lives in Mesa, Arizona with his wife and three dogs.</p>
        <p className="text-center w-full">Daniel has previously worked as a software developer for a Fortune-500 company (Republic Services), and is comforable working in a full-stack capacity. He has extensive experience with web development including UI design / creation, API work, writing unit tests, addressing security vulnerabilities, and more. He's also a great team player and thrives in an environment of Agile and cross-functional teams!</p>
      </div>

      <FooterWithButtons />
    </main>
  );
}