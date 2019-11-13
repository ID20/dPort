
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const PORT = 3001;
const routes = express.Router();
const User = require('./models/User.js');
const Doctor =require('./models/Doctor.js');
const Admin =require('./models/Admin.js');

app.use(cors())
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/todo', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function () {
    console.log("MongoDB database connection established successfully");
})

routes.route('/DoctorList').get((req, res) => {
res.header('Cache-Control', 'no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
	Doctor.find((err,dat) => {
        if (!err) {
            res.json(dat);
        }
    })
})

routes.route('/register').post((req, res) => {
   User.findOne({email: req.body.email}, function(err, user){
        if(err) {
          console.log(err);
        }

        if(user) {

           console.log(user)
           res.send("email already exists");

        }
        else {

               let user = new User(req.body);
              user.save().
               then(() => {
            res.status(200).send("Registered successfully");
        })
        }

    });
})

routes.route('/adddoctor').post((req, res) => {
   Doctor.findOne({phone: req.body.phone}, function(err, doctor){
        if(err) {
          console.log(err);
        }

        if(doctor) {

           console.log(doctor)
           res.send("Dcotor already exists");

        }
        else {

               let doctor = new Doctor(req.body);
              doctor.save().
               then(() => {
            res.status(200).send("Added successfully");
        })
        }

    });
})




routes.route('/DoctorListEdit').get((req, res) => {
    Doctor.find((err,todos) => {
        if (!err) {
            res.json(todos);
        }
    })
})

routes.route('/login').post((req,res) => {

User.findOne({email: req.body.email}, function(err, user){
        if(err) {
          console.log(err);
        }

        if(user) {


            res.status(200).send("Successful");

        }

        else {

               res.send("Invalid Credentials!");
        }
        });


})

routes.route('/loginadmin').post((req,res) => {

Admin.findOne({email: req.body.email}, function(err, user){
        if(err) {
          console.log(err);
        }

        if(user) {


            res.status(200).send("Successful");

        }

        else {

               res.send("Invalid Credentials!");
        }
        });


})





routes.route('/DoctorListEdit/update/:id').post((req, res) => {
    Doctor.findById(req.params.id, function (err, todo) {
        if (!todo)
            res.status(404).send('data is not found');
        else
        {
        todo.description = req.body.description;
        todo.phone = req.body.phone;
        todo.dname=req.body.dname;
        }

        todo.save().then(todo => {
            res.json('Doctor Info updated');
        })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
})


routes.route('/DoctorListEdit/delete/:id').post((req, res) => {
    Doctor.findById(req.params.id, function (err, todo) {
        if (!todo)
            res.status(404).send('data is not found');
        else
        {
           todo.deleteOne().then(todo => {
            res.send("deleted");
        })
           .catch(err => {
                res.status(400).send("Deletion not possible");
            });
        }


    });
})

app.use('/todos', routes);


app.listen(PORT, () => {
    console.log("Listening...");
});
