import React from "react";
const styles = require('./css/FooterWithButtons.css');
import { ButtonsModule } from '../comp/ButtonsModule';

export function FooterWithButtons() {
    return(
        <div id="footerWithButtons">
            <ButtonsModule />

            <footer className="text-center align-bottom bg-black bg-opacity-60">
                <h5 className="inline"><a target="_blank" href="https://icons8.com">Icons supplied by Icons8&emsp;&emsp;&emsp;Created by Daniel Regan - 2023</a></h5>
            </footer>
        </div>
    );
}