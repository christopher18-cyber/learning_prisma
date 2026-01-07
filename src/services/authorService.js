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

export async function deleteAuthor(id) {
    try {
        const deletedAuthor = await prisma.author.delete({
            where: { id },
            include: { books: true }
        })

        return deletedAuthor
    }
    catch (err) {
        console.error("Error", err.message)
        throw new Error(err.message)
    }
}