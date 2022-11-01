const theme = {
  colors: {
    black: '#000000',
    white: '#FFFFFF',
    sideColor: '#2d3748',
    mainColor: '#f0f0f0',
    footerColor: '#3B3B3B',
    ligthGrey: '#F4F4F4',
    grey: '#e5e4e4',
    deepGrey: '#3B3B3B',
    background: '#FAFAFC',
    defaultText: '#101010',
    hoverBlue: '#2542E6',
    bordeRadius: '6px',
    dotSize: '30px',
    dotColor: '#fff',
    pageWidth: '1080px',
    highModalShdow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
    highModalDeepShdow: 'rgba(11, 11, 11, 0.8) 0px 8px 24px',
    lowModalShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 3px',
    lowModalDeepShadow: 'rgba(0, 0, 0,0.6) 0px 2px 5px',
  },
  flexMixin: (align = 'center', justify = 'center') => `
  display:flex;
  align-items:${align};
  justify-content:${justify};
  `,
  responsive: {
    small: '500px',
    medium: '768px',
    large: '1000px',
  },
  text: {
    spacing: '0.2rem',
    fontWeight1: '100',
    fontWeight2: '200',
    fontWeight3: '400',
    fontWeight4: '500',
  },
  effect: {
    radius: '10px',
    shadow: '6px 7px 13px 0px rgba(0,0,0,0.57)',
  },
};

export default theme;
