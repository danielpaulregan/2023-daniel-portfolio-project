import Image from 'next/image';
import liIconStatic from '../assets/circularIcons/icons8-linkedin-circled-50.png';

export function CircularIcon(props) {
    return(
        <div id="circularIcon">
            <a href={props.href}>
              <Image src={props.img} alt={''} quality={100} />
              <span>{props.label}</span>
            </a>
        </div>
    );
}

Connect (or hire me) on LinkedIn!

"https://www.linkedin.com/in/danielpaulregan/"