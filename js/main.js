//Capturar los elementos del DOM
const menuBurger=document.querySelector("#menuBurger")
const nav=document.querySelector("#nav")
//Evento Click

document.addEventListener('click',(ev)=>{

    if(ev.target.matches("#menuBurger")){
console.log("hamburguesa")

nav.classList.add("navAbierta")
    }else{
        if(ev.target.matches("#cerrar")){
            
        nav.classList.remove("navAbierta")
    }
    }

    
})

