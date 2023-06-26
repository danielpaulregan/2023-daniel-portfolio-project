import React from "react";
import { Navbar } from "./Navbar";
const styles = require('./css/NameAndTitleModule.css');

export function NameAndTitleModule() {
    return(
      <div className={"bg-black bg-opacity-75"}>
        <div id="nameAndTitle">
          <h1 className="font-semibold text-center w-full">Daniel Regan</h1>
          <h2 className="text-center w-full">Full-Stack Software Engineer & IT Professional</h2>
        </div>
        <Navbar />
      </div>
    );
}