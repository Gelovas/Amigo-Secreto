let Amigo = [];

function agregarAmigo() {
    const inputNombre = document.getElementById("Amigo");
    const nombre = inputNombre.value.trim(); 

    if (nombre) { 
        Amigo.push(nombre); 

        const lista = document.getElementById("listaAmigos");
        const nuevoElemento = document.createElement("li");
        nuevoElemento.textContent = nombre;
        lista.appendChild(nuevoElemento);

        console.log("Lista de amigos:", Amigo); 
        inputNombre.value = ""; 
    } else {
        alert("Por favor, ingresa un nombre válido.");
        console.log("Por favor, ingresa un nombre válido."); 
    }
}

function sortearAmigo() {
    if (Amigo.length === 0) {
        console.log("No hay amigos disponibles para sortear. Reiniciando el sorteo...");
        reiniciarSorteo();
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * Amigo.length);

    const amigoSorteado = Amigo[indiceAleatorio];

    Amigo.splice(indiceAleatorio, 1);

    const lista = document.getElementById("listaAmigos");
    const elementos = lista.getElementsByTagName("li");
    elementos[indiceAleatorio].remove();

    console.log(`Amigo sorteado: ${amigoSorteado}`);
    console.log("Amigos restantes:", Amigo);

    document.getElementById("resultado").innerHTML = `🎉 ¡El amigo sorteado es: ${amigoSorteado}! 🎉`;
}

function reiniciarSorteo() {
    Amigo = [];
    console.log("El sorteo se ha reiniciado. Puedes agregar nuevos amigos.");

    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    document.getElementById("resultado").innerHTML = "El sorteo se ha reiniciado. Agrega nuevos amigos para continuar.";
}