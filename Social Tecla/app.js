const express = require("express");
const app = express();
require("dotenv").config(); //dotenv 


//////capturadora de datos
app.use(express.urlencoded({extended:false}));
app.use(express.json()); 


//recursos
app.use('/resources', express.static('public'))
app.use ('/resources', express.static(__dirname+'/public'))


app.set('view engine','ejs');


//session
const session = require("express-session");
app.use(session({

    secret: 'secret',
    resave: true,
    saveUninitialized:true

}))

//////////////////////DATABASE//////////////////////
// , {msg: "test o. o"}
const connection = require ('./db/database');
const { send, render } = require("express/lib/response");

    app.get('/login',(req,res)=>{
        res.render('login');
        })
        
        app.get('/register',(req,res)=>{
            res.render('register');
            })


app.post('/register', async(req,res)=>{
const email = req.body.email;
const pass = req.body.pass;
const name = req.body.name;
const country = req.body.country;
const last_name = req.body.last_name;
connection.query('INSERT INTO users SET?',{
    email:email,pass:pass,name:name,last_name:last_name,country:country
}, async(error,results)=>{
    if (error){
        res.render('register',{
     
            alert: false,
            alertTitle: "Registration",
            alertMessage: "Error de registro",
            alertIcon: 'error',
            showConfirmButton:false,
            timer:1500,
            ruta:'register'
                    })

    }
    else{
    
        res.render('register',{
     
alert: true,
alertTitle: "Registration",
alertMessage: "Succeful Registration",
alertIcon: 'sucess',
showConfirmButton:false,
timer:1500,
ruta:'login'
        })
    }

})

})



app.post("/auth",async(req,res)=>{
    const email = req.body.email;
    const pass = req.body.pass;
if(email && pass){
connection.query('SELECT * FROM users WHERE email =?',[email], async(error,results)=>{

if(!results||pass!=results[0].pass){
    res.render('login',{
        alert: true,
        alertTitle: "Usuario o paswword incorrecta",
        alertMessage: "Error",
        alertIcon: "error",
        showConfirmButton: false,
        timer:1500,
        ruta:'login'
        }
 
)
}
else{
    req.session.loggedin = true;
    req.session.name = results[0].name

    res.render('login',{
   
        alert: true,
        alertTitle: "Conexion exitosa",
        alertMessage: "Login correcto",
        alertIcon: "sucess",
        showConfirmButton: false,
        timer:1500,
        ruta:''
        })
       
       
}
})
}else{
res.send('por favor ingrese todos los datos')





}


})


app.get('/',(req,res)=>{


res,render('principal_page',{
login: true,
name: req.session.name 
}




)})










app.listen(3000,(req,res)=>{

    
console.log("Server running in http://localhost:3000")


})

