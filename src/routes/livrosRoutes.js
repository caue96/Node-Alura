import express from "express"
import LivroController from "../controllers/livroController.js"

const router = express.Router()

router.get('/livros', LivroController.listarLivros)
router.get('/livros/:id', LivroController.buscarLivro)
router.post('/livros', LivroController.cadastrarLivros)
router.put('/livros/:id', LivroController.atualizarLivros)
router.delete('/livros/:id', LivroController.excluirLivros)

export default router