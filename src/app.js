import express from 'express'

const app = express()

app.use(express.json())

const livros = [
    {id: 1, titulo: 'O Senhor dos Anéis', autor: 'J.R.R. Tolkien'},
    {id: 2, titulo: 'Harry Potter e a Pedra Filosofal', autor: 'J.K. Rowling'}
]

app.get('/', (req, res) => {
    res.status(200).send('Bem vindo a API de livros')
})

app.get('/livros', (req, res) => {
    res.status(200).json(livros)
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