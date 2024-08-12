const threedots = document.querySelector('.three-dots')
const container = document.querySelector('.container');

const cut = document.querySelector('.cut')
threedots.addEventListener('click',(element)=>{
    container.style.width = '100vh'
})

cut.addEventListener('click',()=>{
    container.style.width = '0vh'
})

