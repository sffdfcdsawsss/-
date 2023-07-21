
let elTop = document.querySelector('.about_top .ab_t')
let elMiddle = document.querySelector('.about_middle')
let elBottom = document.querySelector('.about_bottom figure')

const callback = ([entry], observer) => {
    entry.target.classList.add('active')
}

let options = {
  	threshold: 0.5
}
let observer = new IntersectionObserver(callback, options);

observer.observe( elTop )
observer.observe(elMiddle)
observer.observe(elBottom)


