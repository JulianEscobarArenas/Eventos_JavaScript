let boton= document.querySelector('button')
let parrafo = document.querySelector('p')
let contador=0;

boton.addEventListener('click', ()=>{
    boton.style.backgroundColor = 'red'
    contador = contador + 1
    parrafo.textContent = contador
})

