const mongoose = require('mongoose')

mongoose.set('useFindAndModify', false)

// To  conect to be a MongoDB
// const password = process.argv[2]

const url = process.env.MONGODB_URI
    // `mongodb+srv://fullstack:${ password }@cluster0-3lf82.mongodb.net/note-app?retryWrites=true&w=majority`

console.log('connecting to', url)

mongoose.connect(url, { useNewUrlParser: true })
    .then(result => {
        console.log('connected to MongoDB')
    })
    .catch((error) => {
        console.log('error conecting to MongoDB: ', error.message)
    })

const noteSchema = new mongoose.Schema({
    content: String,
    date: Date,
    important: Boolean
})

noteSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

module.exports = mongoose.model('Note', noteSchema)

