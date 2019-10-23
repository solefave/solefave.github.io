(function(){
  document.addEventListener('DOMContentLoaded', (event) => {
    [...document.querySelectorAll('.button') ].map( (el, i) => {
      el.style.animation = `reveal 600ms ease ${i*200+600}ms forwards`
    })
  })
}())