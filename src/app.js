const express = require('express')//primero: importar dependencias
const morgan = require('morgan')
const mongoose = require('mongoose')
const cors = require('cors')
const path = require('path')
//segundo: instanciar express
const app = express()
const authRoutes = require('./routes/auth.routes')
const incomeRoutes = require('./routes/income.routes');
const outcomeRoutes = require('.routes/outcome.routes');

//decimoquinto hacer require del dotenv
require('dotenv').config()


//tercero: configurar puerto
//configuraciones
app.set('port', process.env.PORT || 3000)
//decimosexto configuracion de DB
mongoose.connect(process.env.DB_STRING).then(db => console.log('Connected to mongo'))
.catch(err => console.log(err))
app.use('/documentation', express.static(path.join(__dirname, '../doc/')))

//cuarto: configurar los middlewares
//middlewares
app.use(morgan('dev'))
app.use(cors())
app.use(express.urlencoded({
    extended: false
}))

//decimotercero: se crean las rutas
//rutas
app.use('/auth', authRoutes)
app.use('/incomes', incomeRoutes)
app.use('/outcomes', outcomeRoutes)


//inicio del servidor hacer la prueba de que el servidor esta corriendo
app.listen(app.get('port'), ()=>{
    console.log('Server Runing')
})




