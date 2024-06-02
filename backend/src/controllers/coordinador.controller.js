import Sala from '../models/salas.model.js';
import { response } from "express";
import { salas } from "../utils/salas.js";



//Ver una sala por id
export const verSala = (req,res) => {
try {
    const id = request.params.id;
    const sala = salas.find((sala) => sala.id == id)
    if(!sala){
        response.status(404).json({
            message:"Sala no encontrada",
            data:null
        })
        return;
    }
    response.status(200).json({
        message:"La sala buscada es:",
        data:sala

    })
} catch (error) {
    response.status(500).json({
        message:error.message
    })
}

}

//Ver todas las salas
export const verTodas = async (req,res) => {

    try {
        const todasSalas = await Sala.find();
        response.status(200).json({
            message: "Lista de salas:",
            data:Sala
        })
    } catch (error) {
        response.status(500).json({
            message:error.message
        })  
    }
    


}


//Actualizar una sala
export const actualizarSala = (req,res) => {
try {
    const id = request.params.id;
    const sala = request.body;
    const index = salas.findIndex((sala) => sala.id == id);
    if(index === -1){
        response.status(404).json({
            message:"Sala no encontrada",
            data:null
        })
        return;
    }
    salas[index]= sala;
    response.status(200).json({
        message:"Sala actualizada correctamente",
        data:sala
    })
    
} catch (error) {
    response.status(500).json({
        message:error.message
    })
}

}

