import livros from '../models/Livro.js'

class LivroController {
    static listarLivros = (req, res) => {
        livros.find((error, livros) => {
            res.status(200).json(livros)
        })
    }

    static buscarLivro = (req, res) => {
        const id = req.params.id
        livros.findById(id, (error, livros) => {
            if(error){
                res.status(400).send({message: `${error.message} - Id do livro não localizado.`})
            } else{
                res.status(200).send(livros)
            }
        })
    }

    static cadastrarLivros = (req, res) => {
        let livro = new livros(req.body)
        livro.save((error) => {
            if(error) {
                res.status(500).send({message: `${error.message} - falha ao cadastrar livro`})
            } else{
                res.status(201).send(livro.toJSON())
            }
        })
    }

    static atualizarLivros = (req, res) => {
        const id = req.params.id
        livros.findByIdAndUpdate(id, {$set: req.body}, (error) => {
            if(error) {
                res.status(500).send({message: `${error.message} - falha ao atualizar livro`})
            } else{
                res.status(200).send({message: 'Livro atualizado com sucesso'})
            }
        })
    }

    static excluirLivros = (req, res) => {
        const id = req.params.id
        livros.findByIdAndDelete(id, (error) => {
            if(error) {
                res.status(500).send({message: `${error.message} - falha ao excluir livro`})
            } else{
                res.status(200).send({message: 'Livro excluído com sucesso'})
            }
        })
    }
}

export default LivroController