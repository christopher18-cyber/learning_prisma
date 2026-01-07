import express from "express"

import { addAuthorCon } from "../controllers/authorController.js"

export const authorRoutes = express.Router()

authorRoutes.post("/add-author", addAuthorCon)
