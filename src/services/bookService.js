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


export async function getAllBooks() {
    try {
        const books = await prisma.book.findMany({
            include: { author: true }
        })
        return books
    }
    catch (err) {
        throw err
    }
}


export async function getBookById(id) {
    try {
        const book = await prisma.book.findUnique({
            where: { id }, include: { author: true }
        })

        if (!book) {
            throw new Error(`Book with id ${id} not found.`)
        } else {
            return book
        }
    }
    catch (err) {
        throw err
    }
}


export async function updateBook(id, newTitle) {
    try {
        const book = await prisma.book.findUnique({
            where: { id }, include: { author: true }
        })

        if (!book) {
            throw new Error(`Book with id ${id} not found.`)
        }
        const updatedBook = await prisma.book.update({
            where: { id },
            data: { title: newTitle },
            include: { author: true }
        })

        return updatedBook
    }
    catch (err) {
        throw err
    }
}

export async function deleteBook(id) {
    try {
        const deletedBook = await prisma.book.delete({
            where: { id },
            include: { author: true }
        })

        return deletedBook
    }
    catch (err) {
        throw err
    }
}