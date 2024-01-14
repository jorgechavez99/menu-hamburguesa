//Capturar los elementos del DOM
const menuBurger = document.querySelector("#menuBurger")
const nav = document.querySelector("nav")
//Evento Click
/**
 * Realizamos una delegacion de eventos, para poder asignar diferentes acciones segun el punto donde clickemos.
 * @param 'click' {asigno el evento click}
 * @param "callback"{funcion callback en la tenemos como parametro 'ev' donde indicamos que realizaremos con el evento} 
 * Decimos que si clickamos en #menuBurger nos crearemos en nav una clase llamada "navVisible"
 * Si clickamos en ".cerrar" removeremos de nav la clase creada "navVisible"
 */
document.addEventListener('click', (ev) => {
    if (ev.target.matches("#menuBurger")) {
        console.log("hamburguesa")
        nav.classList.add("navVisible")
    } else {
        if (ev.target.matches(".cerrar")) {
            nav.classList.remove("navVisible")
        }
    }
})

