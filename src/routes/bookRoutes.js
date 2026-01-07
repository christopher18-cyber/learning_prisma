import express from "express"

import { getAllBooksCon, addBookCon, getBookByIdCon, updateBookCon, deleteBookCon } from "../controllers/bookController.js"

export const bookRoutes = express.Router()

bookRoutes.post("/add-new-book", addBookCon)

bookRoutes.get("/get-all-books", getAllBooksCon)

bookRoutes.get("/:id", getBookByIdCon)

bookRoutes.put("/:id", updateBookCon)

bookRoutes.delete("/delete/:id", deleteBookCon)