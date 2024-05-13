let sorteio = [];
function adicionar() {
    let amigo = document.getElementById('nome-amigo');
    if (amigo.value == '') {
        alert('Erro! digite o nome desejado para o sorteio.');
        return;
    }
    let lista = document.getElementById('lista-amigos');
    if (sorteio.includes(amigo.value)){ 
        alert('Este nome já está incluso no sorteio.');
        amigo.value = '';
        return;
    }
    sorteio.push(amigo.value)
    if (lista.innerHTML == '') {
        lista.innerHTML = amigo.value;
    } else {
        lista.innerHTML = lista.innerHTML + ', ' + amigo.value;
    }
    amigo.value = '';
}
function sortear() {
    if (sorteio.length < 4) {
        alert('O mínimo para o sorteio é de 4 participantes');
        return;
    }
    embaralha(sorteio);
    let sorteados = document.getElementById('lista-sorteio');
    
    for (let i = 0; i < sorteio.length; i++) {
        if (i == sorteio.length -1) {
            sorteados.innerHTML = sorteados.innerHTML + sorteio[i] + '-->' + sorteio[0] + '<br>';
        } else {
            sorteados.innerHTML = sorteados.innerHTML + sorteio[i] + '-->' + sorteio[i + 1] + '<br>';
        }
        
    }
    
}
function embaralha(lista) {
    for (let indice = lista.length; indice; indice--) {
        let indiceAleatorio = Math.floor(Math.random() * indice);
        [lista[indice - 1], lista[indiceAleatorio]] = [lista[indiceAleatorio], lista[indice - 1]];
    }
}
function reiniciar() {
    document.getElementById('nome-amigo').value = '';
    document.getElementById('lista-amigos').innerHTML = '';
    document.getElementById('lista-sorteio').innerHTML = '';
    sorteio = [];
}