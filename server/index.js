require('dotenv').config() //  this gives us access to our dotEnv file


const express = require('express')
const app = express()
const massive = require('massive')
const movieCtrl = require('./movieController')

const {SERVER_PORT,CONNECTION_STRING} = process.env // this is us destructuring from our .env file.

app.use(express.json())

//end points go here
app.get('/api/movies', movieCtrl.getAllMovies)
app.get('/api/movies/:movie_id', movieCtrl.getMovieById)
app.post('/api/movies', movieCtrl.addMovie)
app.put('/api/movies/:movie_id',movieCtrl.editMovie)
app.delete('/api/movies/:movie_id',movieCtrl.deleteMovie)


//this is how we create a constant connection with our database it needs to be exact.
massive({
    connectionString:CONNECTION_STRING,//this is the connection string
    ssl:{
        rejectUnauthorized:false,// this is because massive stopped supporting ssl=true so this is how is accomplishes that.
    }
}).then((dbInstance) => {   // this is the instance of the database that comes back. 
    console.log('database is connected')
    app.set('db',dbInstance); // this is setting the that instance to 'db' inside your app
    app.listen(SERVER_PORT,()=>console.log(`Running on port ${SERVER_PORT}`)) // placing your app.listen inside of the .then insures that the server is not listening for request before the database is connected. Helps prevent timing issues.
})


