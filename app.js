const express = require('express')
const app = express()

const db = require('./db')

//seteamos el motor de plantillas ejs
app.set('view engine', 'ejs')

app.use(express.urlencoded({extended:true}))
app.use(express.json())

const clientes = require('./routes/clientes')
const proveedor=require('./routes/proveedor')
const insumos = require('./routes/insumos')
app.use(clientes)
app.use(proveedor)
app.use(insumos)

app.use(express.static('public'));

app.listen(4000, ()=>{
    console.log('¡Server UP! en http://localhost:4000')
})


