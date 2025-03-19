// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigo = [];
let amigo1 = [];
let amigo2 = [];
let amigo3 = [];
let amigo4 = [];
let jugadoresQueJugaron = [];

let grupo = document.getElementById("grupo").value;
let ingresador = document.getElementById("ingresador").value;
let estado = bollean = true

function validarUser() {
    let ingresador = document.getElementById("ingresador").value;
    
    if (ingresador !== "5") {
        estado = false;
    }else{
        estado = true;
    }
}
function alternarListas() {
    validarUser();
    console.log(estado);
      if (estado==true) {
        let boton = document.getElementById("alternar");
        let resultado = document.getElementById("resultado");
        if (resultado.style.display === "none") {
            resultado.style.display = "block"; // Mostrar el contenido
            restaurarColor(boton);    
        } else {
            resultado.style.display = "none"; // Ocultar el contenido
            cambiarColor(boton);
        }
    }
    else {
        alert("Solo puede ver las listas el Ingresador");
    }
}
function cambiarColor() {
    boton.style.backgroundColor = "red"; // Cambia el color de fondo
    boton.style.color = "white"; // Cambia el color del texto
}
function restaurarColor() {
    boton.style.backgroundColor = ""; // Restaura el color original
    boton.style.color = ""; // Restaura el color del texto original
}
function agregarAmigo() {
    let inputAmigo = document.getElementById("amigo");
    let nombreAmigo = inputAmigo.value;
    // limpiar tabla
    let limpiarResultado = document.getElementById("resultado");
    limpiarResultado.innerHTML = "";
    
    let grupo = document.getElementById("grupo").value;
    // console.log(grupo);
    let ingresador = document.getElementById("ingresador").value;
    // console.log(ingresador);
    validarUser();
    if (estado==false) {
        alert("Solo puede agregar datos el Ingresador");
        return;
    }

    if (grupo === "0") {
        alert("Selecciona el grupo para agregar amigos");
        return;
    }
    if (!nombreAmigo || /\d/.test(nombreAmigo)) {
        alert("Agregue nombre y que no contenga números");
        return;
    }

    // Verificar si el nombre ya existe en cualquier arreglo
    if (
        amigo1.includes(nombreAmigo) ||
        amigo2.includes(nombreAmigo) ||
        amigo3.includes(nombreAmigo) ||
        amigo4.includes(nombreAmigo))
        {
        alert("El nombre ya existe en uno de los grupos");
        return;
    }

    if (grupo === "1") {
        amigo1.push(nombreAmigo);
    } else if (grupo === "2") {
        amigo2.push(nombreAmigo);
    } else if (grupo === "3") {
        amigo3.push(nombreAmigo);
    } else if (grupo === "4") {
        amigo4.push(nombreAmigo);
    }

    inputAmigo.value = "";
    inputAmigo.focus();

    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    let grupoActual = grupo === "1" ? amigo1 : grupo === "2" ? amigo2 : grupo === "3" ? amigo3 : amigo4;

    for (let i = 0; i < grupoActual.length; i++) {
        let item = document.createElement("li");
        item.textContent = `Grupo:${grupo}- Pos.:${i + 1}.- ${grupoActual[i]}`;
        listaAmigos.appendChild(item);
        
    }
}
function mostrarListas() {
    let contenido = "";
    listaAmigos.innerHTML = "";
   
    validarUser();
    if (estado==true) {
    // Construir el contenido de las listas
    contenido += "Grupo 1: " + amigo1.join(" // ") + "<br>";
    contenido += "Grupo 2: " + amigo2.join(" // ") + "<br>";
    contenido += "Grupo 3: " + amigo3.join(" // ") + "<br>";
    contenido += "Grupo 4: " + amigo4.join(" // ") + "<br>";

    // Mostrar el contenido en un elemento HTML
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = contenido;
    } else {
        alert("Solo puede ver las listas el Ingresador");
    }
}
function sortearAmigo() {
    validarUser();
    let grupo = document.getElementById("grupo").value;
    let jugadorActual = document.getElementById("jugadorActual").value.trim(); // Nombre del jugador actual

    // Verificar si el jugador ya jugó
    if (jugadoresQueJugaron.includes(jugadorActual.toLowerCase())) {
        alert("Este jugador ya ha jugado. No puede participar nuevamente.");
        return;
    }

    if (estado == false && grupo !== "0") {
        if (amigo1.length === 0 && amigo2.length === 0 && amigo3.length === 0 && amigo4.length === 0) {
            alert("No hay amigos para sortear");
            return;
        }

        let resultadoAmigo = document.getElementById("amigoSecreto");

        if (grupo === "1") {
            if (amigo1.length === 0) {
                alert("No hay más amigos para sortear en el grupo 1");
                return;
            }
            let amigosFiltrados = amigo1.filter(amigo => amigo.toLowerCase() !== jugadorActual.toLowerCase());
            if (amigosFiltrados.length === 0) {
                alert("No hay amigos disponibles para sortear en el grupo 1 (excluyendo al jugador actual)");
                return;
            }
            let index = Math.floor(Math.random() * amigosFiltrados.length);
            let amigoSorteado1 = amigosFiltrados[index];
            amigo1.splice(amigo1.indexOf(amigoSorteado1), 1); // Eliminar el amigo sorteado del arreglo original
            resultadoAmigo.innerHTML = `El amigo sorteado es: ${amigoSorteado1} para el grupo: ${grupo}`;
        }
        if (grupo === "2") {
            if (amigo2.length === 0) {
                alert("No hay más amigos para sortear en el grupo 2");
                return;
            }
            let amigosFiltrados = amigo2.filter(amigo => amigo.toLowerCase() !== jugadorActual.toLowerCase());
            if (amigosFiltrados.length === 0) {
                alert("No hay amigos disponibles para sortear en el grupo 2 (excluyendo al jugador actual)");
                return;
            }
            let index = Math.floor(Math.random() * amigosFiltrados.length);
            let amigoSorteado2 = amigosFiltrados[index];
            amigo2.splice(amigo2.indexOf(amigoSorteado2), 1); // Eliminar el amigo sorteado del arreglo original
            resultadoAmigo.innerHTML = `El amigo sorteado es: ${amigoSorteado2} para el grupo: ${grupo}`;
        }
        if (grupo === "3") {
            if (amigo3.length === 0) {
                alert("No hay más amigos para sortear en el grupo 3");
                return;
            }
            let amigosFiltrados = amigo3.filter(amigo => amigo.toLowerCase() !== jugadorActual.toLowerCase());
            if (amigosFiltrados.length === 0) {
                alert("No hay amigos disponibles para sortear en el grupo 3 (excluyendo al jugador actual)");
                return;
            }
            let index = Math.floor(Math.random() * amigosFiltrados.length);
            let amigoSorteado3 = amigosFiltrados[index];
            amigo3.splice(amigo3.indexOf(amigoSorteado3), 1); // Eliminar el amigo sorteado del arreglo original
            resultadoAmigo.innerHTML = `El amigo sorteado es: ${amigoSorteado3} para el grupo: ${grupo}`;
        }
        if (grupo === "4") {
            if (amigo4.length === 0) {
                alert("No hay más amigos para sortear en el grupo 4");
                return;
            }
            let amigosFiltrados = amigo4.filter(amigo => amigo.toLowerCase() !== jugadorActual.toLowerCase());
            if (amigosFiltrados.length === 0) {
                alert("No hay amigos disponibles para sortear en el grupo 4 (excluyendo al jugador actual)");
                return;
            }
            let index = Math.floor(Math.random() * amigosFiltrados.length);
            let amigoSorteado4 = amigosFiltrados[index];
            amigo4.splice(amigo4.indexOf(amigoSorteado4), 1); // Eliminar el amigo sorteado del arreglo original
            resultadoAmigo.innerHTML = `El amigo sorteado es: ${amigoSorteado4} para el grupo: ${grupo}`;
        }

        // Agregar el jugador actual a la lista de jugadores que ya jugaron
        jugadoresQueJugaron.push(jugadorActual.toLowerCase());

        // Mostrar el resultado por 10 segundos y luego ocultarlo
        setTimeout(() => {
            resultadoAmigo.innerHTML = ""; // Ocultar el contenido después de 10 segundos
        }, 10000); // 10000 milisegundos = 10 segundos
    } else {
        alert("Debe ser jugador para sortear");
    }
}
function Reset(){
    
    let limpiarLista = document.getElementById("listaAmigos");
    limpiarLista.innerHTML = "";

    let limpiarResultadoAmigo = document.getElementById("amigoSecreto");
    limpiarResultadoAmigo.innerHTML = "";

    let limpiarResultado = document.getElementById("resultado");
    limpiarResultado.innerHTML = "";
    

    amigo1 = [];
    amigo2 = [];
    amigo3 = [];
    amigo4 = [];
}