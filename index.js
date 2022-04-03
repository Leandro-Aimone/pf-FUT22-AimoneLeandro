

const express = require("express");
const app = express();
const Port = 3000;
const path = require("path");
const hbs = require("hbs");

const mysql = require("mysql2");
const { error } = require("console");
const conexion = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Leancavs00",
    database: "fut22",
    port: 3306
});

conexion.connect((error) =>{
    if(error) throw error;
    console.log("conexion a la Data Base exitosa!!");
});


app.use(express.json());
app.use(express.urlencoded({extended:false})); //
app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));
hbs.registerPartials(path.join(__dirname, "views/partials"))


app.get("/", (req, res) =>{
    res.render("index", {titulo: "Somos #FIFA"})
})

app.get("/administracion", (req, res) =>{
    res.render("administracion", {titulo: "Modificar"})
})

app.post("/administracion", (req, res) =>{

const { NumeroUniforme, Nombre, Nacionalidad, Edad } = req.body;


    if(NumeroUniforme == "" || Nombre == "" || Nacionalidad == "" || Edad == ""){
        
        let validacion = "Faltan datos para guardar"
        res.render("administracion", {titulo: "No se pudo cargar",
        validacion 
        })
    }else{
        console.log(NumeroUniforme);
        console.log(Nombre);
        console.log(Nacionalidad);
        console.log(Edad);

        let data = {
            NumeroUniforme: NumeroUniforme,
            Nombre: Nombre,
            Nacionalidad: Nacionalidad,
            Edad: Edad
        }

        let sql = "Insert into jugadores set ?"
        conexion.query(sql, data, (error, results) =>{
            if(error) throw error;
            res.render("index",{ 
                titulo: "Cargado correctamente",
        });
    })
}
});


app.get("/jugadores", (req, res) =>{
    let sql = "SELECT * FROM jugadores";

    conexion.query(sql, (error, results) =>{
        if(error) throw error;
        res.render("jugadores", {
            titulo: "Jugadores destacados de la semana",
            results: results,
        })
    })
});

app.get("/contacto", (req, res) =>{
    res.render("Contacto", {titulo: "Escribenos"})
});
app.post("/contacto", (req, res) =>{

const { Nombre, Email, Descripcion } = req.body;
    
    if( Nombre == "" || Email == "" || Descripcion == ""){
        
        let validacion = "Faltan datos"
        res.render("contacto", {titulo: "No se pudo enviar",
        validacion 
        })
    }else{
        console.log(Nombre);
        console.log(Email);
        console.log(Descripcion);
        
        res.render("index",{ 
            titulo: "Enviado correctamente",
    })
    }
});


app.get("/login", (req, res) =>{
    res.render("login", {titulo: "Iniciar sesión"})
})

app.post("/login", (req, res) =>{

    const { Email, Contraseña} = req.body;
    
        
        if(Email == "aimoneleandro@gmail.com" && Contraseña == "pwiverano"){

            res.render("administracion", {
                titulo: 'Puedes realizar cambios',
                
            })
        }else{
        

            
            let validacion = "Error en los datos";
            
            res.render("contacto", {
                titulo: 'comentanos tu inconveniente',
                validacion
            })
        } 
    });

    app.get("/nosotros", (req, res) =>{
        res.render("nosotros", {titulo: "¿Quienes Somos?"})
    })



    app.get("/preguntas", (req, res) =>{
        res.render("preguntas", {titulo: "Preguntas frecuentes"})
    })


//conexion.end();  

app.listen(Port, () =>{
    console.log(`Servidor esta trabajando en el puerto ${Port}`);
});

app.on("error" , (err) => {
    console.log("Error en la ejecución del Servidor ${error}");
});






