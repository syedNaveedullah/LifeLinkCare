const express = require("express");
const path = require("path");
const mongoose = require("mongoose"); // Assuming you're using MongoDB with Mongoose
const app = express();
const port = 3000;


const { v4: uuidv4 } = require('uuid');


//these are used for ooverriding the method of forms coz they have only GET/POST so by this we can override it with PATCH/DELETE etc..
var methodOverride = require('method-override');
app.use(methodOverride('_method'));



// to parse or access the post request data =========
app.use(express.urlencoded({extended: true}));

// setting view engine to ejs========================
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// setting static files path=======================
app.use(express.static(path.join(__dirname, "public")));

// starting the server=========================
app.listen(port, ()=>{
    console.log(`server is running on port : ${port}`);
});


// post data ============================================
let audio1 = [
    {
        id : uuidv4(),
        audio : "1",
        source : "./lifelinkcare/public/chipmunks-hehehei-113723.mp3"
    },
    {
        id : uuidv4(),
        audio : "2",
        source : "./lifelinkcare/public/crowd_laughingwav-14578.mp3"
    },
    {
        id : uuidv4(),
        audio : "3",
        source : "./lifelinkcare/public/laughing-man-117725.mp3"
    },
    {
        id : uuidv4(),
        audio : "4",
        source : "./lifelinkcare/public/laughter-29686.mp3"
    },
    {
        id : uuidv4(),
        audio : "5",
        source : "./lifelinkcare/public/possessed-laugh-94851.mp3"
    }
];

// for seeing post in detail
app.get("/Laughing", (req,res)=>{
    // let { id } = req.params;
    // let audio = audio1.find((a) => id === a.id);
    console.log(audio1);
    res.render("Laughing.ejs", {audio1});
});



  


