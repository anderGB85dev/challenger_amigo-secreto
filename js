

let arrayAmigos = [];

function adicionar() {
  let nomeAmigo = document.getElementById('nome-amigo');
  let listaAmigos = document.getElementById('lista-amigos');
  
  if(nomeAmigo.value == '') {
    alert('Digite um nome');
    return
  }
  
  if (arrayAmigos.includes(nomeAmigo.value)) {
    alert('Nome já adicionado!');
    return
  }
  arrayAmigos.push(nomeAmigo.value);
  
  if (listaAmigos.textContent == '') {
    listaAmigos.textContent = nomeAmigo.value;
  } else {
    listaAmigos.textContent += ', ' + nomeAmigo.value;
  }
  nomeAmigo.value = ''
}

function sortear() {
  if (arrayAmigos.length < 4) {
    alert('Adione pelo menos 4 amigos');
    return
  }

  embaralhar(arrayAmigos)
  let sorteados = document.getElementById('lista-sorteio');
  
  for (let i = 0; i < arrayAmigos.length; i++) {
    if (i == arrayAmigos.length - 1) {
      sorteados.innerHTML += `${arrayAmigos[i]} ==> ${arrayAmigos[0]} <br>`;
    } else {
      sorteados.innerHTML += `${arrayAmigos[i]} ==> ${arrayAmigos[i + 1]} <br>`;
    };
  };

};

function embaralhar(lista) {
  for (let i = lista.length; i; i--) {
    const indiceAleatorio = Math.floor(Math.random() * i);
    [lista[i - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[i - 1]]
  };
};

function reiniciar() {
  arrayAmigos = [];
  document.getElementById('lista-amigos').innerHTML = '';
  document.getElementById('lista-sorteio').innerHTML = '';
};

