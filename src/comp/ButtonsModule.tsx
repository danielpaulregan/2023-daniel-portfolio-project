const styles = require('./css/ButtonsModule.css');
import { CircularIcon } from './CircularIcon';

export function ButtonsModule() {
    return (
        <div id="buttonsModule" className={"text-center"}>
            <CircularIcon href="https://github.com/danielpaulregan" id='github' />

            <CircularIcon href="https://www.linkedin.com/in/danielpaulregan/" id='linkedIn' />
        </div>
    );
}