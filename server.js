// define the requirements from express router
const fs = require("fs");
const express = require('express')
const app = express()
const path = require('path')

// set up port variable / server  to host at 5000 as default
const port = process.env.PORT || 5000



//helps to access the html  files 
//app.use(express.static('./client/public'))
app.use('/static',express.static(path.join(__dirname,'client/build')))
//API endpoint for Search.json
app.get('/api.json', (req, res) => {
  let api = allRestaurants();
  //set data into a string to be sent to homepage
  let data = JSON.stringify(api);
  //send response as string to home page
  res.type("text/json");
  res.send(data);
})

//set up a route to serve all restaurant IDs as JSON
app.get("/api", (req, res) => {
  res.sendFile(path.resolve('./api/restaurantsDirectory.json'))
})

// set up to see all the available restaurants in Json format
app.get("/api/:restaurant", (req, res) => {
  res.sendFile(path.resolve('./api/' + req.params.restaurant + '.json'));
});

//set up to catch all route 
app.get('*', (req, res) => {
  res.sendFile(path.resolve('./client/public/index.html'))
});


//when you submit the new article form
// server ready to accept the comment request when the form is submitted 
app.post('/note/:restaurant',
  //this acts as a middleware for the server to get ready to accept the form
  express.urlencoded({ extended: false }),
  (req, res) => {
    // store new comment
    let newNote = req.body
    //stores the restaurant Id
    let restaurantId = req.params.restaurant

    // now the add comment function is called to the response (i.e)new comment to the rite restaurant json file
    addComment(restaurantId, newNote, res)
  })


// set up server to listen to requests at the port specified
app.listen(port, () => {
  console.log('listening on port:', port)
})
//Supporting helper functions
// all the available restaurant details are compiled into a single object
function allRestaurants() {

  return (
    fs
      //synchronously reads the contents of the directory
      .readdirSync(path.resolve("./api"))
      //filters the file from 
      .filter((file) => file.endsWith(".json"))
      // all the contents in the files are stored in single array
      .map((file) => JSON.parse(fs.readFileSync((path.resolve("./api"), file)))
      )
  )
}

//Function to add/update the  comments

function addComment(restaurantId, newNote, res) {
  console.log(restaurantId)
  //variable is assigned to the route to pull the restaurant information
  let restaurantDataFile = "./api/" + restaurantId + ".json"
  //readFileSync-read the full content of the file in memory before returning the data
  let restaurantComment = JSON.parse(fs.readFileSync(restaurantDataFile))
  console.log(restaurantComment)
  //add a new comment to the already existing restaurant info
  restaurantComment.notes.push(newNote.body)
  console.log(restaurantComment)
  // the current notes section is updated with the new comments added
  //json stringify is important to convert js objects to json when sending it over to server
  //fs.writeFileSync-creates a new file when a file doesn't exist
  fs.writeFileSync(restaurantDataFile, JSON.stringify(restaurantComment), (err) => {
    if (err) {
      //if any error the error page is loaded
      res.status(500).send(err);
    } else {
      //or else redirected to the restaurants api page
      res.sendFile(path.resolve('./client/public/index.html'));
    }
  });

}
