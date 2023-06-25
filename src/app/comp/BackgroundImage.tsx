import React from "react";
import Image from "next/image";
const styles = require('./css/BackgroundImage.css');
const bg = require('../../assets/backgrounds/background2.jpg');

export function BackgroundImage() {
    return(
        <div className="absolute -z-10">
            <Image src={bg} alt={''} quality={100} />
        </div>
    );
}