module.exports = {
    getAllMovies: (req,res)=>{
        const db = req.app.get('db') //this needs to be inside of every handler function to accesses your database

        // this accesses the db file then goes into the get_all_movies runs the sql query. Then takes the request and gives a response of 200 status as well as sending the movies.
        db.get_all_movies().then((movies)=>{
            res.status(200).send(movies)
        })

    },
    getMovieById: (req,res)=>{
        const db = req.app.get('db')
        const {movie_id}= req.params
        //movie_id is pass into get_movie_by_id from req.params as a array which is send to the SQL query to replace the dynamic variable also know as a positional argument.
        db.get_movie_by_id(movie_id).then((movie)=>{
            res.status(200).send(movie)
        })
    },
    addMovie: (req,res)=>{
        const db = req.app.get('db')

        const {title,poster,year} = req.body

        db.add_new_movie([title,poster,year]).then((movie)=>{
            res.status(200).send(movie)
        })
        //we are using the .catch to catch the error if any to help us better identify a problem
        .catch((err)=>{
            res.status(400).send(err)
        })
    },
    
    editMovie: (req,res)=>{
        const db = req.app.get('db')
        const {movie_id}= req.params // this is  parameter because you are not changing it you are referencing it to make your edits
        const {title,poster,year} = req.body
        db.edit_movie_by_id([title,poster,year,movie_id]).then((movie)=>{
            res.status(200).send(movie)
        })
        .catch((err)=>{
            res.status(400).send(err)
        })
    },
    deleteMovie: (req,res)=>{
        const db = req.app.get('db')
        const {movie_id} = req.params
        db.delete_movie_by_id([movie_id]).then(()=>{
            //sendStatus is what you use if you do not need to return any data.
            res.sendStatus(200)
        }) 
    },
}