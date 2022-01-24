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

const bcryptjs = require("bcryptjs");


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
const { send } = require("express/lib/response");

    app.get('/',(req,res)=>{
    res.send('INICIA SESION PRIMERO');
    })

    app.get('/login',(req,res)=>{
        res.render('login');
        })
        
        app.get('/register',(req,res)=>{
            res.render('register');
            })


app.post('/register', async(req,res)=>{
const user = req.body.user;
const name = req.body.name;
const rol = 'default_user';
const pass = req.body.pass;
let passwordHaash = await bcryptjs.hash(pass,8);
connection.query('INSERT INTO users SET?',{user:user,name:name,rol:rol,pass:passwordHaash}, async(error,results)=>{
    if (error){
        console.log(error);
    }
    else{
    
        res.render('register',{
     
alert: true,
alertTitle: "Registration",
alertMessage: "Succeful Registration",
alertIcon: 'sucess',
showConfirmButton:false,
timer:1500,
ruta:''
        })
    }

})

})



app.post("/auth",async(req,res)=>{
const user = req.body.user;
const pass = req.body.pass;
let passwordHaash = await  bcryptjs.hash(pass, 8);

if(user && pass){
connection.query('SELECT * FROM users WHERE user =?',[user], async(error,results)=>{

if(results.lenght==0||!(await bcryptjs.compare(pass, results[0].pass) )){
    res.render('login',{
        alert: true,
        alertTitle: "Error",
        alertMessage: "Usuario o paswword incorrecta",
        alertIcon: "error",
        showConfirmButton: true,
        timer:false,
        ruta:'login'
        }
        


)
}
else{
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







app.listen(3000,(req,res)=>{

    
console.log("Server running in http://localhost:3000")


})

