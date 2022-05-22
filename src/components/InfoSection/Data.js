import about1 from '../../images/image_about.jpg';
import team from '../../images/team.jpg';
import sign from '../../images/signup.jpg';
export const homeObjOne = {
  id: 'about',
  lightBg: false,
  lightText: true,
  lightTextDesc: true,
  topLine: 'About cuts',
  headline: 'Simplicity leads to Perfection',
  description:
    'booking barber appointments has never been this easy',
  buttonLabel: 'Get Started',
  imgStart: false,
  img: about1,
  alt: 'about',
  dark: true,
  primary: true,
  darkText: false
};

export const homeObjTwo = {
  id: 'team',
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: 'Team',
  headline: 'elite of the elite',
  description:
    'here is where you can find the best of the best in the artistry of hairdressing .',
  buttonLabel: 'Learn More',
  imgStart: true,
  img: team,
  alt: 'barbers',
  dark: false,
  primary: false,
  darkText: true
};

export const homeObjThree = {
  id: 'signup',
  lightBg: true,
  lightText: false,
  lightTextDesc: false,
  topLine: 'Join us',
  headline: 'booking has never been this easy',
  description:
    "No more calls and book based scheduling; Get everything set up and ready in under 10 minutes.",
  buttonLabel: 'Start Now',
  imgStart: false,
  img: sign,
  alt: 'Papers',
  dark: false,
  primary: false,
  darkText: true
};

