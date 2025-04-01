function buscarUsuario(id) {
    return new Promise((resolve, reject) => {
        console.log(`Buscando usuário com o ID: ${id}`)

        setTimeout(() => { 
            const usuario = {id: id, nome: "João"}
    
            if (usuario) {
                resolve(usuario)
               
            } else {
                reject("Usuário não encontrado")
            
            }
        }, 2000)
    })
}
buscarUsuario(1)
    .then((usuario) => { // acontece quando a promise é aprovada
        console.log("Usuário encontrado:", usuario)
    })
    .catch((erro) => { // acontece quando a promise é rejeitada
        console.log("Erro", erro)
    })