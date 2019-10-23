(function(){
  document.addEventListener('DOMContentLoaded', (event) => {
    [...document.querySelectorAll('.button') ].map( (el, i) => {
      el.style.animation = `reveal ${600+(i*150)}ms ease 600ms forwards`
    })
  })
}())