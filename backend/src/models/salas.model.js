import mongoose from "mongoose";

const salaSchema = new mongoose.Schema({
    nombre:{
        type:String,
        required: true
    },
    capacidad: {
        type:Number,
        required:true
    },
    edificio:{
        type:String,
        required:true
    },
    estado:{
        type:String,
        required:true
    },
    descripcion:{
        type:String,
        required:true
    },
})

export default mongoose.model('Sala',salaSchema);
