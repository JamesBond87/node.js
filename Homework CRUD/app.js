import express, { json } from "express";
const app = express();

app.use(json());


const movies = [
    {
       id: 1,
       name: "Casino Royale",
       type: "Action",
    },
    {
       id: 2,
       name: "The Nice Guys",
       type: "Comedy",
    }
    
];

// Get movies
app.get("/movies", (req, res) => {
    res.send(movies);
});


// Get movies by id
app.get("/movies/:Id", (req, res) => {

   const id = parseInt(req.params.Id);

   const selectedMovie = movies.filter((y) => y.id == id)[0];
    
   res.send(selectedMovie);
});  


// Add a movie
app.post("/movies", (req, res) => {

   // Making movies (json)
   const movie = 
   {
       id: movies.length+1,
       name: req.body.name,
       type: req.body.type
   };

   movies.push(movie);
   res.send(movies);
})

// Delete movie by id
app.delete("/movies/:Id", (req, res) => {

   const id = parseInt(req.params.Id)-1;

   movies.splice(id,1);
    // For loop to replace ids of remaining movies
   for (let i = 0; i < movies.length; i++) {
       movies[i].id = i + 1
   }

   res.send(movies)
});  


//  Server.port=5151
app.listen(5151);