const chooseColor = document.querySelectorAll('.choose__color-btn')
const contentItem = document.querySelectorAll('.content-item')

chooseColor.forEach(function(elem){
  elem.addEventListener('click', open)
})

function open(event){
  const target = event.currentTarget
  const button = target.dataset.button
  const contentActive = document.querySelectorAll(`.${button}`)

  chooseColor.forEach(function(item){
    item.classList.remove('choose__color-btn--active')
  })

  target.classList.add('choose__color-btn--active')

  contentItem.forEach(function(item){
    item.classList.remove('content-item--active')
  })

  contentActive.forEach(function(item){
    item.classList.add('content-item--active')
  })

}

function scrollNav(){
  const navLinks = document.querySelectorAll('.menu__list-link')

  navLinks.forEach(function(navLink){
    navLink.addEventListener('click', function(event){
      event.preventDefault()

      const activeElem = document.querySelectorAll('.active')
      
      activeElem.forEach(function(activeElem){
        activeElem.classList.remove('active')
      })

      this.classList.add('active')

      const targetId = this.getAttribute('href').substring(1)
      const targerElem = document.getElementById(targetId)
      if(targerElem){
        const offsetTop = targerElem.offsetTop - 160
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        })
      }
    })
  })
}

scrollNav()

// let info = document.querySelector('.menu__list-link') 
// let scrollAmount = 1600
// let scrollDuration = 1000

// info.addEventListener('click', function(event){
//   event.preventDefault()

//   var scrollTop = window.scrollY || document.documentElement.scrollTop;
//   var targetScrollTop = scrollTop + scrollAmount;

//   scrollToSmoothly(targetScrollTop, scrollDuration);
// })

// function scrollToSmoothly(targetPosition, duration) {
//   var startPosition = window.scrollY || document.documentElement.scrollTop;
//   var startTime = performance.now();
  
//   function scrollStep(timestamp) {
//     var currentTime = timestamp - startTime;
//     var progress = Math.min(currentTime / duration, 1);
//     window.scrollTo(0, startPosition + progress * (targetPosition - startPosition));
    
//     if (progress < 1) {
//       window.requestAnimationFrame(scrollStep);
//     }
//   }
  
//   window.requestAnimationFrame(scrollStep);
// }