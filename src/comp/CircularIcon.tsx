import Image from 'next/image';
const styles = require('./css/CircularIcon.css');

const ghIconStatic = require('../assets/circularIcons/icons8-github-50.png');
const liIconStatic = require('../assets/circularIcons/icons8-linkedin-circled-50.png');

interface Props {
  href: string,
  id: string,
}

export function CircularIcon({href, id} : Props) {

    let icon;
    let iconAnimationClass;

    switch(id) {
      case 'github': {
        icon = ghIconStatic;
        iconAnimationClass = 'ghReference';
        break;
      }
      case 'linkedIn': {
        icon = liIconStatic;
        iconAnimationClass = 'liReference';
        break;
      }
      default: {
        break;
      }
    }

    if(icon && iconAnimationClass) {
      return(
        <div className={"circularIcon " + iconAnimationClass}>
            <a href={href}>
              <Image src={icon} alt={''} />
            </a>
        </div>
      );
    }
    else {
      return;
    }
}