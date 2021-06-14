const theme = {
  colors: {
    apply: '#1e58ff',
    danger: '#f14668',
    white: '#fff',
    darkGrey: '#737C8E',
    grey: '#c0c7d6',
    black: 'rgb(1,1,1)',
    shadow: ' rgba(0, 0, 0, 0.85)',
  },

  fontSize: {
    xl: '5.5rem',
    l: '1.9rem',
    m: '1.5rem',
    s: '1.1rem',
  },

  mediaQueries: {
    smallest: `only screen and (max-width: 25em)`, //275px
    smaller: 'only screen and (max-width: 31.25em)', //500px
    small: 'only screen and (max-width: 37.5em)', //600px
    medium: 'only screen and (max-width: 56.25em)', //900px
    large: 'only screen and (max-width: 80em)', //1300px
    larger: 'only screen and (max-width: 90em)', //1300px
    largest: 'only screen and (max-width: 97em)', //1500px
  },
};

export default theme;
