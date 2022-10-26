import express from 'express'
import db from './config/dbConnect.js'
import livros from './models/Livro.js'

db.on("error", console.log.bind(console, "connection error"))
db.once("open", () => {
    console.log("database connection succeeded")
})

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).send('Bem vindo a API de livros')
})

app.get('/livros', (req, res) => {
    livros.find((error, livros) => {
        if (error) {
            return res.status(500).send(error)
        } else {
            return res.status(200).send(livros)
        }
    })
})

app.get('/livros/:id', (req, res) => {
    let index = buscaLivro(req.params.id)
    res.status(200).json(livros[index])
})

app.post('/livros', (req, res) => {
    livros.push(req.body)
    res.status(201).send('Livro adicionado com sucesso')
})

app.put('/livros/:id', (req, res) => {
    let index = buscaLivro(req.params.id)
    livros[index].titulo = req.body.titulo
    res.status(200).json(livros)
})

app.delete('/livros/:id', (req, res) => {
    let {id} = req.params
    let index = buscaLivro(id)
    livros.splice(index, 1)
    res.status(200).send(`Livro ${id} deletado com sucesso`)
})

function buscaLivro(id){
    return livros.findIndex(livro => livro.id == id)
}

export default app