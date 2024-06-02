"use strict";

import express from 'express';
import {
    verSala,
    verTodas,
    actualizarSala
} from '../controllers/coordinador.controller.js';

const router = express.Router();

//Petición get para visualizar sala
router.get('/verSala/:id',verSala);

//Petición para visualizar todas las salas
router.get('/verTodas/:id',verTodas);

//Petición put para actualizar el estado de una sala
router.patch('/actualizarSala/:id',actualizarSala);

export default router;
