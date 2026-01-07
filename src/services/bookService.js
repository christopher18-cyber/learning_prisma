import "dotenv/config"


import { prisma } from "../../lib/prisma.js"


export async function addBook(title, published_date, authorId) {
    try {
        const newlyCreatedBook = await prisma.book.create({
            data: {
                title,
                published_date,
                author: {
                    connect: { id: authorId }
                }
            }, include: { author: true }
        })

        return newlyCreatedBook
    }
    catch (err) {
        console.error("Error", err);
        throw err
    }
}