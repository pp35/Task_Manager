const mongoose = require("mongoose")

function connector() {
  mongoose.connect("mongodb+srv://poornimapandey3590:bOZIdtf4rqbn5PSQ@cluster0.1pmpeto.mongodb.net/task_manager?retryWrites=true&w=majority"
  , {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(()=>{
   console.log("mongoose is live now")
}).catch((err)=>{
console.log({err})
})}

module.exports = connector