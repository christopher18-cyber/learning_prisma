import "dotenv/config"
import express from "express"
import { authorRoutes } from "./routes/authorRoutes.js"

const app = express()

app.use(express.json())

app.use("/api/author", authorRoutes)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server is now running on port ${PORT}`);

})