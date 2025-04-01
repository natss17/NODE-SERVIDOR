function tarefaDemorada(nome, tempo) {
    setTimeout(() => {
        console.log(`Tarefa ${nome} concluída`); // Correção da template string
    }, tempo);
}

console.log("Iniciando o programa")
console.log("Executando a tarefa 1")
tarefaDemorada(1, 300)

console.log("Executando a tarefa 2")
tarefaDemorada(2, 3000)

console.log("Programa finalizado")