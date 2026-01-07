import "dotenv/config"

import { prisma } from "../../lib/prisma.js"



export async function addAuthor(name) {
    try {
        const newlyCreatedAuthor = await prisma.author.create({
            data: {
                name
            }

        })
        return newlyCreatedAuthor
    }
    catch (err) {
        console.error("Error", err)
    }
}