import express from "express"
import AutorController from "../controllers/autorController.js"

const router = express.Router()

router.get('/autores', AutorController.listarAutores)
router.get('/autores/:id', AutorController.buscarAutor)
router.post('/autores', AutorController.cadastrarAutores)
router.put('/autores/:id', AutorController.atualizarAutores)
router.delete('/autores/:id', AutorController.excluirAutores)

export default router