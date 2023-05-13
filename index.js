/* BOTON DARK MODE */
var boton = document.querySelector("#boton-dark-mode");
var cambiarModo = function dark_mode(){
    document.documentElement.classList.toggle('dark-mode');
}
boton.addEventListener("click", cambiarModo);


// FORMULARIO 
const $form = document.getElementById('#form')
//const $buttonMailto = document.querySelector('#hiddenahref')

$form.addEventListener('submit', handleSubmit)

async function handleSubmit(event) {
    event.preventDefault()
    const form = new FormData(this)
    const response = await fetch(this.action, {
        method: this.method,
        body: form,
        headers: {
            'Accept': 'aplication/json'
        }
    })
    if (response.ok){
        this.reset()
        alert('Gracias por contactarme')
    }

    //$buttonMailto.setAttribute('href', `mailto:enzo.colocho.99@gmail.com?subject=nombre ${form.get('name')}  correo ${form.get('email')}&body=${form.get('comentario')}`)
    //$buttonMailto.click()
}