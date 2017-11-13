// Función que se aplica al cargar la página
window.onload = function() {

// Llamando mis elementos del html

var texto = document.getElementById("txt");
var boton = document.getElementById("btn");
var contador = document.getElementById("count");
var nuevoContenedor = document.getElementById("contenido");

// Creando función para el botón
boton.addEventListener("click",function(){

// Mostrar mensaje en el caso que no se ingrese ningún comentario
    if (texto.value == "") {
          alert("Escriba su comentario");
        } else {

// Creando un div contenedor con el texto rescatado de mi textarea
        var contenedor_usuario = document.createElement("div");
        contenedor_usuario.classList.add("class","clase_div_contenedor");
        var titulo_usuario = document.createElement("p");
        var text_titulo_usuario = document.createTextNode(texto.value);
        var dateSpan = document.createElement("span");
 
 // Asignando los hijos al padre
        titulo_usuario.appendChild(text_titulo_usuario);
        contenedor_usuario.appendChild(titulo_usuario);
        contenedor_usuario.appendChild(dateSpan);
        dateSpan.textContent = new Date();
        nuevoContenedor.appendChild(contenedor_usuario);

// Limpiando texto después de hacer click en el botón
        document.getElementById("txt").value="";

}

// Función para el contador de forma regresiva y así ir cambiando los colores
    function countDown(obj){
    var contador = document.getElementById("count");
    contador.innerHTML = 140 - obj.value.length;

    if (140 - obj.value.length == 130){
        contador.style.color = "red";
    } else if(140 - obj.value.length == 120){
        contador.style.color = "green";

    } else if(140 - obj.value.length == -1){
        contador.style.color = "pink";
    }
    
}
})
}



