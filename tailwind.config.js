/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      keyframes:{
        rightlao:{
          '0%':{
            transform:'translateX(100%)',
            opacity:'0'
          },
          '100%':{
            transform:'translateX(0px)',
            opacity:'1'
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
        rightlao:'rightlao 0.3s ease-in forwards',
        leftlao:'leftlao 0.3s ease-in forwards'
      }
    },
  },
  plugins: [],
}
