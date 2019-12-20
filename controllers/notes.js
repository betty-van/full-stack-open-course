const notesRouter = require('express').Router()
const Note = require('../models/note')

notesRouter.get('/', (request, response) => {
    Note.find({}).then(notes => {
        response.json(notes.map(note => note.toJSON()))
    })
})

notesRouter.get('/:id', (request, response, next) => {
    Note.findByID(request.params.id)
        .then(note => {
            // Part 4
        })
})