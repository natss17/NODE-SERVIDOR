//PASTA NODE -> PASTA MODULO OA -> SRIPT.JS
// Importa o modulo os 
const os = require ("os")

console.log("Sistema Operacional:", os.platform)
console.log("Arquitetura:", os.arch())
console.log("Memória Livre:", os.freemem(),"bytes")
console.log("Memória Livre:", os.totalmem(), "bytes")
