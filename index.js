/* BOTON DARK MODE */
var boton = document.querySelector("#boton-dark-mode");
var cambiarModo = function dark_mode(){
    document.documentElement.classList.toggle('dark-mode');
}
boton.addEventListener("click", cambiarModo);
