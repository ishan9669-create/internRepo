/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      keyframes:{
        uparniche:{
          '0%':{
            transform:'translateY(-100%)',
            opacity:'0'
          },
          '100%':{
            transform:'translateY(1)',
            opacity:'1'
          }
        },
        nicheupar:{
          '0%':{
            transform:'translateY(1)',
            opacity:'1'
          },
          '100%':{
            transform:'translateY(-100%)',
            opacity:'0'
          }
        },
        leftlao:{
          '0%':{
            transform:'translateX(0px)',
            opacity:'1'
          },
          '100%':{
            transform:'translateX(100%)',
            opacity:'0'
          }
        }

      },
      animation:{
        uparniche:'uparniche 0.3s ease-in forwards',
        nicheupar:'nicheupar 0.3s ease-in backwards',
        leftlao:'leftlao 0.3s ease-in forwards'
      }
    },
  },
  plugins: [],
}

