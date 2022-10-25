const http = require("http")
const port = 3000

const rotas = {
    "/": "Hello World",
    "/livros": "Página de livros",
    "/autores": "Página de autores",
    "/editora": "Página de editoras",
    "/sobre": "Página sobre"
}

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" })
    res.end(rotas[req.url])
})

server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
})