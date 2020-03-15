import MuliLatin400Woff2 from './muli-v20-latin_latin-ext-regular.woff2'
import MuliLatin400Woff from './muli-v20-latin_latin-ext-regular.woff'
import MuliLatin700Woff2 from './muli-v20-latin_latin-ext-700.woff2'
import MuliLatin700Woff from './muli-v20-latin_latin-ext-700.woff'
import MuliLatin800Woff2 from './muli-v20-latin_latin-ext-800.woff2'
import MuliLatin800Woff from './muli-v20-latin_latin-ext-800.woff'

const Fonts = `
/* muli-regular - latin_latin-ext */
@font-face {
  font-family: 'Muli';
  font-style: normal;
  font-weight: 400;
  src: local(''),
       url(${MuliLatin400Woff2}) format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
       url(${MuliLatin400Woff}) format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}
/* muli-700 - latin_latin-ext */
@font-face {
  font-family: 'Muli';
  font-style: normal;
  font-weight: 700;
  src: local(''),
       url(${MuliLatin700Woff2}) format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
       url(${MuliLatin700Woff}) format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}
/* muli-800 - latin_latin-ext */
@font-face {
  font-family: 'Muli';
  font-style: normal;
  font-weight: 800;
  src: local(''),
       url(${MuliLatin800Woff2}) format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
       url(${MuliLatin800Woff}) format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
}
`
export default Fonts
