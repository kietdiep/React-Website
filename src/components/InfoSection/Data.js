import myImage1 from '../../images/svg-1.svg'
import myImage3 from '../../images/svg-3.svg'
import myImage4 from '../../images/svg-4.svg'

export const homeObjOne = {
    id: 'about',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Premium Bank',
    headline: 'Unlimited Transactions with zero fees',
    description: 'Get access to our exclusive app that allows you to send unlimited transactions without getting charged any fees',
    buttonLabel: 'Get started',
    imgStart: false,
    img: myImage1,
    alt: 'Car',
    dark: true,
    primary: true,
    darkText: false
};

export const homeObjTwo = {
    id: 'discover',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Unlimited Access',
    headline: 'Unlimited Transactions with zero fees',
    description: 'Get access to our exclusive app that allows you to send unlimited transactions without getting charged any fees',
    buttonLabel: 'Learn More',
    imgStart: true,
    img: myImage4,
    alt: 'PiggyBank',
    dark: false,
    primary: false,
    darkText: true
};

export const homeObjThree = {
    id: 'signup',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Join our Team',
    headline: 'Creating an account is extremely eeasy',
    description: 'Get everything set up and ready in under 10 minutes. All you need to do is add your information and you\'re ready to go.',
    buttonLabel: 'Start Now',
    imgStart: false,
    img: myImage3,
    alt: 'Desk',
    dark: false,
    primary: false,
    darkText: true
};