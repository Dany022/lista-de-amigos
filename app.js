
const amigos = [];

function agregarAmigo() {
  const input = document.getElementById('amigo');
  const nombre = input.value.trim();

  if (nombre === '') {
    alert('Por favor, ingresa un nombre válido.');
    return;
  }

  amigos.push(nombre);
  mostrarListaAmigos(amigos);
  input.value = '';
  input.focus();
}


function mostrarListaAmigos(amigos) {
  const lista = document.getElementById('listaAmigos');
  lista.innerHTML = '';

  for (let i = 0; i < amigos.length; i++) {
    const li = document.createElement('li');
    li.textContent = amigos[i];
    lista.appendChild(li);
  }
}


function sortearAmigo() {
  if (amigos.length === 0) {
    alert('La lista está vacía. Agrega nombres antes de sortear.');
    return;
  }

  const indice = Math.floor(Math.random() * amigos.length);
  const ganador = amigos[indice];

  const resultadoLista = document.getElementById('resultado');
  resultadoLista.innerHTML = ''; // Limpiar resultados anteriores

  const li = document.createElement('li');
  li.textContent = `🎉 El amigo secreto es: ${ganador}`;
  resultadoLista.appendChild(li);
}