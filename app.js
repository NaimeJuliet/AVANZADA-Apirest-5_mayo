//Importando el paquete doetenv
//require('dotenv').config()
import 'dotenv/config'

//Importo la clase Servidor
import {Servidor} from './Server/Servidor.js'

//Creo un objeto de la clase SERVIDOR
//LOS OBJETOS SON VARIABLES
let servidor=new Servidor()

//LLamo al metodo encender servidor
servidor.encenderServidor()




