import { updateBook, deleteBook, addBook, getAllBooks, getBookById } from "../services/bookService.js";

export async function addBookCon(req, res) {
    try {
        const { title, publishedDate, authorId } = req.body
        const book = await addBook(title, new Date(publishedDate), authorId)

        res.status(201).json(book)
    }
    catch (err) {
        res.status(400).json({
            error: err.message
        })
    }
}

export async function getAllBooksCon(req, res) {
    try {
        const books = await getAllBooks()
        res.json(books)
    }
    catch (err) {
        res.status(400).json({
            error: err.message
        })
    }
}

export async function getBookByIdCon(req, res) {
    try {
        const book = await getBookById(parseInt(req.params.id))
        if (book) {
            res.status(200).json(book)
        } else {
            res.status(404).json({ message: "Book not found" })
        }
    }
    catch (err) {
        res.status(400).json({
            error: err.message
        })
    }
}


export async function updateBookCon(req, res) {
    try {
        const { title } = req.body
        const book = await updateBook(parseInt(req.params.id), title)
        if (!book) {
            res.status(404).json({
                message: "Book not found."
            })
        } else {
            res.status(200).json(book)
        }
    }
    catch (err) {
        res.status(400).json({
            error: err.message
        })
    }
}


export async function deleteBookCon(req, res) {
    try {
        await deleteBook(parseInt(req.params.id))
        res.status(200).json({
            message: `Deleted book with id ${req.params.id}`
        })
    }
    catch (err) {
        res.status(400).json({
            error: err.message
        })
    }
}