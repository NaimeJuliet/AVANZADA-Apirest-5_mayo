import express from 'express'

//Importo el CONTROLADORHABITACION
import {ControladorHabitacion} from '../controllers/ControladorHabitacion.js'
import { ControladorReserva } from '../controllers/ControladorReserva.js'

export let rutas=express.Router()
//CREO UN OBJETO DE LA CLASE CONTORLADORHABITACION
let controladorHabitacion=new ControladorHabitacion()
let controladorReserva=new ControladorReserva()

//DEFINO LAS RUTAS

//RUTAS PARA LOS SERVICIOS DE HABITACIONES
rutas.post('/api/v1/habitaciones/',controladorHabitacion.insertar)
rutas.get('/api/v1/habitaciones/', controladorHabitacion.buscarTodos)
rutas.get('/api/v1/habitaciones/:id/', controladorHabitacion.buscarPorId)
rutas.put('/api/v1/habitaciones/:id/', controladorHabitacion.editar)
rutas.delete('/api/v1/habitaciones/:id/', controladorHabitacion.eliminar)

//RUTAS PARA LOS SERVICIOS DE RESERVAS

rutas.post('/api/v1/reserva/',controladorReserva.insertar)
rutas.get('/api/v1/reserva/', controladorReserva.buscarPorId)
rutas.put('/api/v1/reserva/:id/', controladorReserva.editar)
rutas.delete('/api/v1/reserva/:id/', controladorReserva.eliminar)