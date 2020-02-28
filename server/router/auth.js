var express = require('express');
var router = express.Router();
//Lets load the mongoose module in our program
var mongoose = require('mongoose');

const databaseUrl = 'mongodb://localhost:27017/b12pro';
//Lets connect to our database using the DB server URL.
mongoose.connect(databaseUrl);

//router.get("path", (callback) => {})
 
// router.get("/login", (req, res) => {
//   console.log('Param: ', req.params);
//   console.log('Query: ', req.query);
//   res.send('This is login Api');
// });

router.post("/login", (req, res) => {
  if(req.body.username == "dangnhatminh20" && req.body.password == "123456"){
    res.json({
      "username": "Nhật Minh",
      "age": 24,
      "code": 1 //thanh cong
    })
  }else{
    res.json({
      "message": "Sai tài khoản hoặc mật khẩu!",
      "code": 2 //that bai
    })
  }
});

router.get("/logout", (req, res) => {
  res.send('This is logout Api');
});

router.get("/user", async (req, res) => {
  try {
      var result = await mongoose.find().exec();
      console.log(result)
      res.send(result);
  } catch (error) {
      res.status(500).send(error);
  }
});

module.exports = router;