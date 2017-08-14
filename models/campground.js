var mongoose = require("mongoose");

//Schema Setup
var campgroundSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String,
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Comment"
        }
    ],
    author: {
      id: {
         type: mongoose.Schema.Types.ObjectId,
         ref: "User"
      },
      username: String
   }
});

module.exports = mongoose.model("Campground", campgroundSchema);

// Campground.create({
//     name:"Granite Hill", 
//     image: "https://i.ytimg.com/vi/vfkhlLnSq7o/maxresdefault.jpg",
//     description: "Granite hill Description"
// }, function(err, campground){
//     if(err){
//         console.log(err);
//     }else{
//         console.log(campground);
//     }
// });