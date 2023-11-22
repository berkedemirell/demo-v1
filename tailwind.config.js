/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/main.jsx',
    './src/App.jsx',
    './src/components/Navbar.jsx',
    './src/components/Main.jsx',
    './src/components/MainFavs.jsx',
    './src/components/Footer.jsx',
    './src/components/Contact.jsx',
    './src/pages/Products.jsx',
    './src/source/products.json',
    './src/context/ProductContext.jsx',
  ],
  theme: {
    extend: {
      colors: {
        'main': '#3852d9',
        'mainWhite': '#fff'
      },
      width: {
        'search-input': '25rem',
        'llg-search-input': '20rem',
        'car-image': '45rem',
        'car-image-xl': '60rem',
        'car-image-2xl': '70rem',
        'car-image-md': '30rem',
        'car-image-xs': '24rem',
        'deneme': '45rem',
        'deneme-xl': '60rem',
        'deneme-2xl': '70rem',
        'deneme-md' : '30rem',
        'deneme-xs' : '24rem',
        'deneme2': '70rem',
        'mob-search-input': '17rem',
      },
      height: {
        'car-image': '25rem',
        'car-image-xl': '35rem',
        'car-image-2xl': '45rem',
        'car-image-md': '17rem',
        'car-image-xs': '14rem',
        'info-cont': '40rem',
        'sm-info-cont': '30rem',
        'ssm-info-cont': '25rem',
      },
      backgroundImage: {
        'xtar': "url('./src/source/image/xtar.jpg')",
        'sony': "url('./src/source/image/sony.jpg')",
        'tplink': "url('./src/source/image/tplink.jpg')",
        'prolink': "url('./src/source/image/prolink.jpg')",
      },
      gap: {
        'btn': '52rem',
        'nav-xl': '35rem',
      },
      boxShadow: {
        'pro-card': '2px 3px 7px 1px #3852d9',
        'contact-card': '4px 2px 15px 1px #3852d9',
        'cont-card': '1px 1px 5px 4px #3852d9',
      },
      screens: {
        '2xl': {'min': '1500px'},
        '3xl': {'min': '1700px'},
        'llg': {'max': '1150px'},
        'lgs': {'max': '1000px'},
        'mmd': {'max': '800px'},
        'smd': {'max': '750px'},
        'smm': {'max': '650px'},
        'ssm': {'max': '550px'},
        'xss': {'max': '500px'},

      }
    },
  },
  plugins: [],
}

