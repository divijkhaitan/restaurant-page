import Icon from './image.jpg'
const page=document.querySelector('#content')


const title=document.createElement('div')
title.textContent="Heart of India"
title.classList.add('title')
page.appendChild(title)

const about=document.createElement('div')
about.textContent="We are a group of homesick Indians hoping to bring the Heart of India (its food) to the streets of Japan"
about.classList.add('about')
page.appendChild(about)

// const myImg=new Image()
// myImg.src=Icon
// page.appendChild(myImg)
