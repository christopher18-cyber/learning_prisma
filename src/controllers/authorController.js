import { addAuthor } from "../services/authorService.js";

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