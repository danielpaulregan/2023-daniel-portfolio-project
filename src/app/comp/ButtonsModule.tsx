import React from 'react';
const styles = require('./css/ButtonsModule.css');
import { CircularIcon } from './CircularIcon';

export function ButtonsModule() {
    return (
        <div id="buttonsModule" className={"bg-black bg-opacity-60 w-2/3"}>
            <CircularIcon href="https://github.com/danielpaulregan" id='github' />

            <CircularIcon href="https://www.linkedin.com/in/danielpaulregan/" id='linkedIn' />
        </div>
    );
}