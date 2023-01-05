const express = require('express');
const app = express();

const user = require('./Controllers/UserController')
const Product = require('./Controllers/ProductController')
const Student = require ('./Controllers/StudentController')

var router = require("express").Router();

var bodyParser = require('body-parser');  

var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(express.urlencoded({ extended: false }));
app.use(express.json());


const mongoose = require('mongoose');

mongoose
  .connect('mongodb://127.0.0.1/test')
  .then(() => {
    console.log("Database Connected");
  })
  .catch((error) => {
    console.log("Database Connectivity Error", error);
    process.exit(1);
  });

app.use("/", router);

// router.post('/createProduct',(request,response) => {
//   console.log("req", request.body)
//   Product.createProduct(request.body)
// //  user.updateUser(request.body)
//   // user.deleteUser(request.body)
//   response.send("SUCCESS")
// });


// router.delete('/deleteProduct',(request,response) => {
//   console.log("req", request.body)
//   Product.deleteProduct(request.body)
//   response.send("SUCCESS")
// });



// router.put('/updateProduct',(request,response) => {
//   console.log("req", request.body)
//   Product.updateProduct(request.body)
//   response.send("SUCCESS")
// });


router.post('/createStudent',(request,response) => {
  console.log("req", request.body)
  Student.createStudent(request.body)
  response.send("SUCCESS")

// same above function but it send response to postman

  // router.post('/createStudent', async(request,response) => {
  //   console.log("req", request.body)
  // const res =  await Student.createStudent(request.body)
  // response.send(res)
  
});


router.delete('/deleteStudent',(request,response) => {
  console.log("req", request.body)
  Student.deleteStudent(request.body)
  response.send("SUCCESS")
});



app.listen(8090, ()=>{
  console.log("Listening to port 8080")
})