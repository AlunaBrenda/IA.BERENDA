const nomes = ["Brenda", "Flavia", "Caciele", "Yasmin", "Ana", "Júlia", "Renan"];

export function aleatorio (lista){
    const posicao = Math.floor(Math.random()* lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes)