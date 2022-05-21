const path=require('path');
const express=require('express');
const ejs=require('ejs');
const app=express();
app.set('view engine','ejs');
app.set('views','views');
app.use('/',express.static(__dirname+'/public'));

app.get('/',(req,res)=>{
    res.render('index');
    console.log('visited');
})
app.get('/projects',(req,res)=>{
    res.render('project');
    
})
app.get('/about',(req,res)=>{
    res.render('aboutme');
    console.log('About-me visited');
})

// app.get('/skills',(req,res)=>{
//     res.render('skills');
//     console.log('Skills visited');
// });

const PORT=process.env.PORT||3000;
app.listen(PORT,console.log('Server started running....'));

