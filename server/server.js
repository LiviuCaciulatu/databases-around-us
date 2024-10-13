
const mongoose = require('mongoose');
let Book = require('./model/Book.js')
const express = require('express');

const app = express();
app.use(express.json());
app.listen(3000,()=>console.log("server started on port 3000"));

app.use(function(req, res, next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next()
})

app.post("/api/data", (req, res)=>{
    const title = req.body.title;
    const author = req.body.author;
    const genre = req.body.genre;
    const createdAt = Date.now();
    const updatedAt = Date.now();
    const book = new Book ({
        title,
        author,
        genre,
        createdAt,
        updatedAt
    });
    book.save()
    .then(book=>res.json(book))
    .catch(err=>res.status(400).json({success: false}));
});





// async function createBook() {
//     try {
//       const book = await Book.create({
//         title: 'Beauty of Coding',
//         author: "Code Cool",
//         genre: 'historical, sci-fi',
//         createdAt: Date.now(),
//         updatedAt: Date.now()
//       });
//       console.log(book);
//     } catch (error) {
//       console.error(error);
//     }
//   }

  
  mongoose.connect("mongodb+srv://liviucaciulatu:Converse10@cluster0.gsylu01.mongodb.net/")
  
//   createBook().then(()=>{
//     console.log("done")
//   }).catch(()=>{
//     console.log("error")
//   })

Book.deleteOne({ title: "New Fancy Title" })
.then(book => {
console.log(book);
})
.catch(error => {
console.error(error);

});
