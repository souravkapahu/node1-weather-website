const express = require('express')
const hbs = require('hbs')
const path=require('path')
const forcaste = require('./utils/forcaste')
const geocode =  require('./utils/geocoding')


const app=express()

//paths
const partialpath=path.join(__dirname,'../templates/partial')
const viewpath =path.join(__dirname,'../templates/views')
//set 
app.set('view engine','hbs')
app.set('views',viewpath)
hbs.registerPartials(partialpath)

//setup static directory to serve
app.use('/js',express.static(path.join(__dirname,'../public/js')))

//pages
app.get('/',(req,res)=>{
    res.render('index',{
        title:'weather'
    })
})
app.get ('/weather',(req,res)=>{
     if(!req.query.address){
         
     res.send({error:'location required.....'})
     }else{
        
    geocode(req.query.address,(error,data)=>{
        if(error){
           return res.send({error})
        }
       
       forcaste(data.lati,data.longi,(error,data1)=>{
           if(error){
               
               return res.send({error})
           }
       res.send({location:data1.location,
    current:data1.current})
       })
   })
     }
})
app.get('/help',(req,res)=>{
res.render('help',{
    title:'Help'
})
})
app.get('/about',(req,res)=>{
    res.render('about',{
        title:'About '
    })
})

app.listen(1002,()=>{
    console.log('server upto mark')
})