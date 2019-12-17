const mongoose = require('mongoose')

if (process.argv.length < 3) {
    console.log('give password as argument')
    process.exi1(1)
}

const password = process.argv[2]

const url = 
    `mongodb+srv://fullstack:${ password }@cluster0-3lf82.mongodb.net/note-app?retryWrites=true&w=majority`

mongoose.connect(url, { useNewUrlParser: true })

const noteSchema = new mongoose.Schema({
    content: String,
    date: Date,
    important: Boolean
})

const Note = mongoose.model('Note', noteSchema)

// Logging all current notes
Note.find({}).then(result => {
    result.forEach(note => {
        console.log(note)
    })
    mongoose.connection.close()
})


// Creating a new note
// const note = new Note({
//     content: 'MongDB is pretty cool',
//     date: new Date(),
//     important: true
// })

// note.save().then(response => {
//     console.log('note saved!')
//     mongoose.connection.close()
// })