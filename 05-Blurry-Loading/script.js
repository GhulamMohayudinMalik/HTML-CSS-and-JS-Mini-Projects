const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

let load = 0;

let int = setInterval(blurring, 30)

function blurring(){
    load++

    if (load>99){
        clearInterval(int)
    }

    console.log(load)
    loadText.innerText = `${load}%`

// We have deducted the present value from the maximum value to set OPACITY AND FILTER OF BLUR

    loadText.style.opacity = `${1 - load/100}`
    bg.style.filter = `blur(${30 - load/3.33}px)`
}


