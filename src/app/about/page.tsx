import React from 'react';

import { NameAndTitleModule } from '../../comp/NameAndTitleModule';
import { BackgroundImage } from '../../comp/BackgroundImage';
import { FooterWithButtons } from '../../comp/FooterWithButtons';

const styles = require('./page.css');

export default function About() {
  return (   
    <main>
      <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no" />
      <title>Daniel Regan - Software Engineer & IT Professional</title>

      <BackgroundImage />

      <NameAndTitleModule />
      

      <div id="mainContent" className="bg-black bg-opacity-25 text-center">
        <h2 className="text-center">About Daniel</h2>
        <p className="text-left aboutParagraph">Daniel graduated from Arizona State University in 2018 with a Bachelor of Computer Science. He currently lives in Mesa, Arizona with his wife and three dogs.</p>
        <p className="text-left aboutParagraph">Daniel most recently worked in a full-stack software development role (Support Engineer) for Republic Services, a Fortune-500 company.</p>
        <p className="text-left aboutParagraph">He has extensive professional experience with web development including UI design and implementation, backend work involving APIs and databases (both relational and non-relational), writing unit tests, fixing security vulnerabilities, and more. He is also a great team player and thrives in an Agile environment with cross-functional teams!</p>
      </div>

      <p><br /><br /><br /><br /><br /></p>

      <FooterWithButtons />
    </main>
  );
}