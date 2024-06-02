import Sala from '../models/salas.model.js';
import { response } from "express";
import { salas } from "../utils/salas.js";



//Ver una sala por id
export const verSala = async (req,res) => {
try {
    const id = request.params.id;
    const sal = await Sala.findById(id);
    if(!sala){
        response.status(404).json({
            message:"Sala no encontrada",
            data:null
        })
        return;
    }
    response.status(200).json({
        message:"La sala buscada es:",
        data:sal

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
export const actualizarSala = async (req,res) => {
try {
    const id = request.params.id;
    const salaActualizada = request.body;
    const sal = await Sala.findByIdAndUpdate(
        id,
        salaActualizada,
        {new:true}

    )
    
    if(!sal){
        response.status(404).json({
            message:"Sala no encontrada",
            data:null
        })
        return;
    }

    response.status(200).json({
        message:"La sala fue actualizada exitosamente.",
        data:sal

    })
} catch (error) {
    response.status(500).json({
        message:error.message
    })
}

}

