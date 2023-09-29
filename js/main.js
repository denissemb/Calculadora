const pantalla = document.querySelector(".pantalla");
/*Con querySelector se crea un array para los botones*/
const botones = document.querySelectorAll(".btn");
botones.forEach(boton => {
    /*Creamos evento para clicar en el boton*/
    boton.addEventListener ("click",() => {
        /*Traemos el contenido del boton*/
        //console.log(boton.textContent);
        const clickar = boton.textContent;

        if (boton.id ==="C") {
            pantalla.textContent = "0";
            /*Hacemos return para que no se ejecute la siguiente función y pueda
            borrar el texto*/
            return;    
        }

        if (boton.id ==="delete") {
            /*Con esta función hacemos que fincione el botón de borrar pero vuelva a ponerse 0 y no*/
            if (pantalla.textContent.length === 1){
                pantalla.textContent = "0";
            } else {
                /*Usamos slice para indicarle desde que número o tecla borra y donde termina*/
            pantalla.textContent = pantalla.textContent.slice(0, -1);
            }
            return;
        }

        if (boton.id ==="igual") {
            pantalla.textContent = eval(pantalla.textContent);
        }
        
        if (pantalla.textContent === "0") {
            pantalla.textContent = clickar; 
        } else {
            /*Después de realizar las opoeraciones da el resultado con el signo =, y con esta funcion damos un realtado limpio.*/
            if(boton.id !=="igual")
                pantalla.textContent += clickar;
        }    
        
    })
})