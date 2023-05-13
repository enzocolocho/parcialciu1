/* BOTON DARK MODE */
var boton = document.querySelector("#boton-dark-mode");
var cambiarModo = function dark_mode(){
    document.documentElement.classList.toggle('dark-mode');
}
boton.addEventListener("click", cambiarModo);


/* FORMULARIO 
const $form = document.getElementById('#form')
const $buttonMailto = document.querySelector('#hiddenahref')

$form.addEventListener('submit', handleSubmit)

function handleSubmit(event) {
    event.preventDefault()
    const form = new FormData(this)
    console.log(form.get('name'));
    $buttonMailto.setAttribute('href', `mailto:enzo.colocho.99@gmail.com?subject=nombre ${form.get('name')}  correo ${form.get('email')}&body=${form.get('comentario')}`)
    $buttonMailto.click()
}
*/