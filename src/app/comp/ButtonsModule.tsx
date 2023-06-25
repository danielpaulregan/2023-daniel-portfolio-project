import Image from 'next/image';
import ghIconStatic from '../../assets/circularIcons/icons8-github-50.png';
import liIconStatic from '../../assets/circularIcons/icons8-linkedin-circled-50.png';

export function ButtonsModule() {
    return (
        <div id="buttonsModule" className="bg-black bg-opacity-60 w-1/3">
            <div id="ghReference">
                <div id="circularIcon">
                    <a href="https://github.com/danielpaulregan">
                        <Image src={ghIconStatic} alt={''} quality={100} />
                        <span>My Github Profile</span>
                    </a>
                </div>
            </div>

            <div id="liReference">
                <div id="circularIcon">
                    <a href="https://www.linkedin.com/in/danielpaulregan/">
                        <Image src={liIconStatic} alt={''} quality={100} />
                        <span>Connect (or hire me) on LinkedIn!</span>
                    </a>
                </div>
            </div>
      </div>
    );
}