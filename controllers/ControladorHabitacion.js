//Importamos el servicio HABITACION 
//NOTA: UN CONTROLADOR PUEDE LLAMAR A VARIOS SERVICIOS
import {ServicioHabitacion} from '../services/ServicioHabitacion.js'

//CONTROLADOR TIENE LA LOGICA
//DEL NEGOCIO
export class ControladorHabitacion{

    constructor(){}

    async insertar(request,response){
        let servicio=new ServicioHabitacion() 
        let datosPeticion=request.body //Recibo datos BODY
        try{
            await  servicio.registrar(datosPeticion) //Espero a que els ervicio guarde los datos
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

    async buscarTodos(request,response){

        //Instancio la clase servicio
        //PARA PODERLA UTILIZAR
        let servicio=new ServicioHabitacion()
        try{
            response.status(200).json({
                mensaje:"exito buscando la información",
                datos: await servicio.buscarTodos(),
                estado:true
            })
        }catch(error){
            response.status(400).json({
                mensaje:"fallamos buscando la información",
                datos: [],
                estado:false
            })
        }
    }

    async buscarPorId(request,response){
        let servicio=new ServicioHabitacion()
        let id=request.params.id //El id que llega por la URL

        try{
            response.status(200).json({
                mensaje:"exito buscando habitación por id",
                datos:await servicio.buscarPorId(id),
                estado:true
            })
        }catch(error){
            response.status(400).json({
                mensaje:"fallamos buscando habitación por id",
                datos:[],
                estado:false
            })
        }     
    }

    async editar(request,response){
        let servicio=new ServicioHabitacion()
        let id=request.params.id //El id que llega por la URL
        let datosPeticion=request.body //Recibo datos BODY

        try{
            await servicio.editar(id,datosPeticion)
            response.status(200).json({
                mensaje:"exito editando habitación por id",
                datos:"Datos del id: "+id,
                estado:true
            })
        }catch(error){
            response.status(400).json({
                mensaje:"fallamos editando habitación por id",
                datos:[],
                estado:false
            })
        }  
    }

    async eliminar(request,response){
        let servicio=new ServicioHabitacion()
        let id=request.params.id //El id que llega por la URL
        try{
            await servicio.eliminar(id)
            response.status(200).json({
                mensaje:"exito eliminando habitación por id",
                datos:"Datos del id: "+id,
                estado:true
            })
        }catch(error){
            response.status(400).json({
                mensaje:"fallamos eliminando habitación por id",
                datos:"Datos del id: "+id,
                estado:false
            })
        }
    }

}