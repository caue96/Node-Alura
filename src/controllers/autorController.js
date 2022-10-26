import autores from '../models/Autor.js'

class AutorController {
    static listarAutores = (req, res) => {
        autores.find((error, autores) => {
            res.status(200).json(autores)
        })
    }

    static buscarAutor = (req, res) => {
        const id = req.params.id
        autores.findById(id, (error, autores) => {
            if(error){
                res.status(400).send({message: `${error.message} - Id do autor não localizado.`})
            } else{
                res.status(200).send(autores)
            }
        })
    }

    static cadastrarAutores = (req, res) => {
        let autor = new autores(req.body)
        autor.save((error) => {
            if(error) {
                res.status(500).send({message: `${error.message} - falha ao cadastrar autor`})
            } else{
                res.status(201).send(autor.toJSON())
            }
        })
    }

    static atualizarAutores = (req, res) => {
        const id = req.params.id
        autores.findByIdAndUpdate(id, {$set: req.body}, (error) => {
            if(error) {
                res.status(500).send({message: `${error.message} - falha ao atualizar autor`})
            } else{
                res.status(200).send({message: 'autor atualizado com sucesso'})
            }
        })
    }

    static excluirAutores = (req, res) => {
        const id = req.params.id
        autores.findByIdAndDelete(id, (error) => {
            if(error) {
                res.status(500).send({message: `${error.message} - falha ao excluir autor`})
            } else{
                res.status(200).send({message: 'autor excluído com sucesso'})
            }
        })
    }
}

export default AutorController