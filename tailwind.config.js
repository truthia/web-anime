module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width:{
        "7/8":"87.5%",
        "pageWidth":"1000px",
        "cardWidth":"155px",
        "smallSlideWidth":"3000px"
      },
      height:{
        "cardHeight":"200px"
      },
      padding:{
       "smallSlidePaddingX":"10px"
      },
      spacing:{
        "cardGap":"10px"
      },
      inset:{
        "buttonRight":"10px"
      },
      keyframes:{
        dropdown:{
          "0%": {maxHeight:"0px"},
          "100%":{maxHeight:"3000px"}
        },
        dropdownClose:{
          "0%": {maxHeight:"3000px"},
          "100%":{maxHeight:"0px"}
        }
      },
      animation:{
        dropdown:"dropdown 1s",
        dropdownClose:"dropdownClose 1s forwards"
      },
      gridTemplateColumns:{
        cardGridFull:"155px 155px 155px 155px"
      }
    },
  },
  variants: {
    extend: {
      visibility:["group-hover"]
    },
  },
  plugins: [],
}
