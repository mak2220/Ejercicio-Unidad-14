const boton = document.querySelector('#btn');

boton.addEventListener('click',()=>{
    alert('Click en el botón')
})

$(document).ready(()=>{
    $('#btn').click(()=>{
        console.log('Hola, estoy usando jQuery')
    })
})