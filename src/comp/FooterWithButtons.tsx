const styles = require('./css/FooterWithButtons.css');
import { ButtonsModule } from '../comp/ButtonsModule';

export function FooterWithButtons() {
    return(
        <div id="footerWithButtons">
            <ButtonsModule />

            <footer>
                <h5><a target="_blank" href="https://icons8.com">Icons supplied by Icons8</a><span>&emsp;&emsp;&emsp;Created by Daniel Regan - 2023</span></h5>
            </footer>
        </div>
    );
}