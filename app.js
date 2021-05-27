const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require('lodash');
const $ = require('jquery');
const { get } = require("lodash");

let toDoLists=[];
let inProgresses=[];
let reviews=[];
let totaldone=[]

const app = express();


app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get('/',function (req,res){
    res.render('login')
})

app.post('/' ,function (req,res) {
    if (req.body.username==="todolist@generation.com"&&req.body.password==="28052021"){
        res.redirect('/mainpage')
    }
    
})


app.get('/mainpage',function (req,res) {
    res.render('mainpage',{
        toDoList : toDoLists,
        inProgress : inProgresses,
        review : reviews,
        done: totaldone
    })
})
app.post('/deletealltodolist',function (req,res) {
    toDoLists=[]
    res.redirect('/mainpage')
})

app.post('/deletetodolist',function (req,res) {
    toDoLists.pop();
    res.redirect('/mainpage')
})

app.post('/donetodolist',function (req,res) {
    let done=toDoLists.pop();
    totaldone.push(done);
    console.log(totaldone);
    res.redirect('/mainpage')
})

app.post('/deleteallinprogess',function (req,res) {
    inProgresses=[]
    res.redirect('/mainpage')
})

app.post('/deleteinprogress',function (req,res) {
    inProgresses.pop();
    res.redirect('/mainpage')
})

app.post('/doneinprogress',function (req,res) {
    let done = inProgresses.pop();
    totaldone.push(done);
    console.log(totaldone);
    res.redirect('/mainpage')
})
app.post('/deleteallreview',function (req,res) {
    reviews=[]
    res.redirect('/mainpage')
})

app.post('/deletereview',function (req,res) {
    reviews.pop();
    res.redirect('/mainpage')
})

app.post('/donereview',function (req,res) {
    let done=reviews.pop();
    totaldone.push(done);
    console.log(totaldone);
    res.redirect('/mainpage')
})

app.post('/deletealldone',function (req,res) {
    totaldone=[]
    res.redirect('/mainpage')
})

app.post('/deletedone',function (req,res) {
    totaldone.pop();
    res.redirect('/mainpage')
})



app.get('/todolist',function (req,res) {
    res.render('todolist')    
})
app.post('/todolist',function (req,res){
    const toDoList = {
        toDoListName:req.body.toDoListName,
        toDoListDescription:req.body.toDoListDescription,
        toDoListDueDate:req.body.toDoListDueDate,
        toDoListEmail:req.body.toDoListEmail
    }
    toDoLists.push(toDoList);
    res.redirect('/mainpage')
})

app.get('/inprogress',function (req,res){
    res.render('inprogress')
})
app.post('/inprogress',function (req,res){
    const inProgress = {
        inProgressName:req.body.inProgressName,
        inProgressDescription:req.body.inProgressDescription,
        inProgressDueDate:req.body.inProgressDueDate,
        inProgressEmail:req.body.inProgressEmail
    }
    inProgresses.push(inProgress);
    res.redirect('/mainpage')
})


app.get('/review', function (req,res){
    res.render('review')
})

app.post('/review',function (req,res){
    const review = {
        reviewName:req.body.reviewName,
        reviewDescription:req.body.reviewDescription,
        reviewDueDate:req.body.reviewDueDate,
        reviewEmail:req.body.reviewEmail
    }
    reviews.push(review);
    res.redirect('/mainpage')
})



app.listen(3000, function() {
    console.log("Server started on port 3000");
  });
  