//Importar Mongoose
import mongoose from 'mongoose'

//Constante para crear el MODELO DE DATOS
const Schema=mongoose.Schema

//Contruyo mi modelo o Esquema Habitacion
const Habitacion=new Schema({

    nombre:{
        type:String,
        required:true
    },
    foto:{
        type:String,
        required:true
    },
    descripcion:{
        type:String,
        required:true
    },
    precio:{
        type:Number,
        required:true
    }

})

export const modeloHabitacion=mongoose.model('habitaciones',Habitacion)