import mongoose from "mongoose"

mongoose.connect("mongodb+srv://root:admin@cluster0.htkg6pl.mongodb.net/node-alura")

let db = mongoose.connection

export default db