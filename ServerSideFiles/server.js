const express = require('express');
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const port = 3000;

// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://ConnectSchools:7UPYJ34g4xq8coA8@connectschools.cvofo90.mongodb.net/?retryWrites=true&w=majority";

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);




// const mongoose = require('mongoose');
const School = require('./Models/school');

// Connect to MongoDB

let uri = 'mongodb+srv://ConnectSchools:7UPYJ34g4xq8coA8@connectschools.cvofo90.mongodb.net/connectschools?retryWrites=true&w=majority';
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
      console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Failed to connect to MongoDB:', error);
  });
app.use(cors());

//routes
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/getSchools', async (req, res) => {
  try {
    // Check which search parameters are present in the query
    const { city, state, district } = req.query;
    let schools;

    if (city) {
      schools = await School.find({ city }).limit(5);
    } else if (state) {
      schools = await School.find({ state }).limit(5);
    } else if (district) {
      schools = await School.find({ district }).limit(5);
    } else {
      // If no search parameter is provided, return an empty array or a default response
      schools = [];
    }

    console.log(schools);
    res.send(schools);
  } catch (error) {
    console.error('Error retrieving schools:', error);
    res.status(500).send('Failed to retrieve schools');
  }
});
app.get('/searchSchoolsByBoard', async (req, res) => {
  try {
    console.log(req.query);
    const schools = await School.find({board : req.query['board']}).limit(5);
    console.log(schools);
    res.send(schools);
  } catch (error) {
    console.error('Error searching schools:', error);
    res.status(500).send('Failed to search schools');
  }
});
// Assuming you have defined your School model and connected to the database

app.get('/searchSchools', async (req, res) => {
  try {
    const name = req.query['name']; // Get the school name from the request query

    // Use the school name to search for schools with matching names
    const schools = await School.find({ name: { $regex: name, $options: 'i' } });

    console.log(schools); // Log the matching schools to the console
    res.json(schools); // Send the matching schools as the JSON response
  } catch (error) {
    console.error('Error searching schools:', error);
    res.status(500).json({ error: 'Failed to search schools' });
  }
});

app.get('/getAllSchools', async (req, res) => {
  try {
    const schools = await School.find({});
    res.send(schools);
  } catch (error) {
    console.error('Error retrieving all schools:', error);
    res.status(500).send('Failed to retrieve all schools');
  }
});


// autocomplete API endpoint

// register user (normal user or school administration)

// login user

// add school (school admin account)

// update school

// compare school (takes a lists of schools, and returns all their data., min schools-2, max schools -3)

// get specific school information based on it's id


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
