let amigos = [];

function agregarAmigo() {
  let nombreAmigo = document.getElementById('amigo').value;

  if (nombreAmigo.trim() === '') {
    alert("Por favor, inserta un nombre.");
    return;
  }

  amigos.push(nombreAmigo);
  mostrarAmigos();
  document.getElementById('amigo').value = '';
}

function mostrarAmigos() {
  let lista = document.getElementById('listaAmigos');
  lista.innerHTML = '';

  for (let i = 0; i < amigos.length; i++) {
    let item = document.createElement('li');
    item.textContent = amigos[i];
    lista.appendChild(item);
  }
}

function sortearAmigo() {
  if (amigos.length < 2) {
    alert("¡Necesitas al menos 2 amigos para sortear!");
    return;
  }

  let indiceAleatorio = Math.floor(Math.random() * amigos.length);
  let amigoSorteado = amigos[indiceAleatorio];

  let resultado = document.getElementById('resultado');
  resultado.innerHTML = `<p>¡El amigo secreto es: <span>${amigoSorteado}</span>!</p>`;
}