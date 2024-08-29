import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


const reactElement = React.createElement(
  'a',
  { href: 'https://www.google.com', target: '_blank' },
  'Click here to visit google'
)

// variable declearation
const myVariable = 'Aquaman'
let myVariable2 = 'Aquaman 2'

const reactElement2 = React.createElement(
  'p',  // first mention the type of the html 
  { style: { color: 'red', backgroundColor: 'aqua' } },   // second are the attributes
  'this should display as a paragraph.', // third is the text that you want to show on screen
  myVariable,    // this is how we can use our declared variable 
  myVariable2    // to use our second variable 
)


createRoot(document.getElementById('root')).render(
  <>
    {reactElement}
    {reactElement2}
  </>
)
