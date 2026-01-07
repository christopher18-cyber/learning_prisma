import { addAuthor, deleteAuthor } from "../services/authorService.js";

export async function addAuthorCon(req, res) {
    try {
        const { name } = req.body
        const author = await addAuthor(name)
        res.status(201).json(author)
    }
    catch (err) {
        res.status(400).json({
            error: err.message
        })
    }
}

export async function deleteAuthorCon(req, res) {
    try {
        const deletedResult = await deleteAuthor(parseInt(req.params.id))
        res.status(200).json(
            { message: `Author deleted with id ${req.params.id}`, deletedResult }
        )
    }
    catch (err) {
        res.status(400).json({
            error: err.message
        })
    }
}