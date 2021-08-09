let rrang = document.querySelector('#red')
let redRes = document.querySelector('#rres')

redRes.textContent = rrang.value
rrang.addEventListener('input', () => {
    redRes.textContent = rrang.value
    document.body.style.backgroundColor = `rgba(${rrang.value}, ${grang.value}, ${brang.value})`
})

let grang = document.querySelector('#green')
let greenRes = document.querySelector('#gres')

greenRes.textContent = grang.value
grang.addEventListener('input', () => {
    greenRes.textContent = grang.value
    document.body.style.backgroundColor = `rgba(${rrang.value}, ${grang.value}, ${brang.value})`
})

let brang = document.querySelector('#blue')
let blueRes = document.querySelector('#bres')

blueRes.textContent = brang.value
brang.addEventListener('input', () => {
    blueRes.textContent = brang.value
    document.body.style.backgroundColor = `rgba(${rrang.value}, ${grang.value}, ${brang.value})`
})