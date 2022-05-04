
import {ServicioReserva} from '../services/ServicioReserva.js'

export class ControladorReserva{

    constructor(){}

    async insertar(request,response){
        let servicio=new ServicioReserva() 
        let datosPeticion=request.body 
        try{
            await  servicio.registrar(datosPeticion) 
            response.status(200).json({
                mensaje:"exito en el ingreso de datos",
                datosIngresados:[],
                estado:true
            })
        }catch(error){
            response.status(400).json({
                mensaje:"fallamos en el ingreso de datos",
                datosIngresados:[],
                estado:false
            })
        }
    }

    
    async buscarPorId(request,response){
        let servicio=new ServicioReserva()
        let id=request.params.id

        try{
            response.status(200).json({
                mensaje:"exito buscando la reserva por id",
                datos:await servicio.buscarPorId(id),
                estado:true
            })
        }catch(error){
            response.status(400).json({
                mensaje:"fallamos buscando la reserva por id",
                datos:[],
                estado:false
            })
        }     
    }

    async editar(request,response){
        let servicio=new ServicioReserva()
        let id=request.params.id 
        let datosPeticion=request.body 

        try{
            await servicio.editar(id,datosPeticion)
            response.status(200).json({
                mensaje:"exito editando reserva por id",
                datos:"Datos del id: "+id,
                estado:true
            })
        }catch(error){
            response.status(400).json({
                mensaje:"fallamos editando reserva por id",
                datos:[],
                estado:false
            })
        }  
    }

    async eliminar(request,response){
        let servicio=new ServicioReserva()
        let id=request.params.id 
        try{
            await servicio.eliminar(id)
            response.status(200).json({
                mensaje:"exito eliminando reserva por id",
                datos:"Datos del id: "+id,
                estado:true
            })
        }catch(error){
            response.status(400).json({
                mensaje:"fallamos eliminando reserva por id",
                datos:"Datos del id: "+id,
                estado:false
            })
        }
    }

}